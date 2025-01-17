import MainLayout from '@/components/layout/MainLayout';
import { fetchAPI } from '@/services/wordpress/wordpress';
import { notFound } from 'next/navigation';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  try {
    const category = await fetchAPI(`/categories/${params.id}`);
    return {
      title: `${category.name} - MISA AMIS`,
      description: category.description || `Danh sách bài viết thuộc chuyên mục ${category.name}`,
    };
  } catch {
    return {
      title: 'Category - MISA AMIS',
      description: 'Danh sách bài viết theo chuyên mục',
    };
  }
}

export default async function CategoryPage({ params }) {
  try {
    // Fetch both category info and its posts
    const [category, posts] = await Promise.all([
      fetchAPI(`/categories/${params.id}`),
      fetchAPI('/posts', {
        categories: params.id,
        per_page: 12,
        _embed: true,
      }),
    ]);

    if (!category) {
      notFound();
    }

    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {category.name}
              </h1>
              {category.description && (
                <div 
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: category.description }}
                />
              )}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <article 
                  key={post.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={post.title.rendered}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">
                      <a 
                        href={`/${post.id}/${post.slug}`}
                        className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                      >
                        {post.title.rendered}
                      </a>
                    </h2>
                    <div 
                      className="text-gray-600 line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <div className="flex items-center text-sm text-gray-500">
                      <span>
                        {new Date(post.date).toLocaleDateString('vi-VN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* No Posts Message */}
            {posts.length === 0 && (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-600">
                  Không có bài viết nào trong chuyên mục này
                </h2>
              </div>
            )}
          </div>
        </div>
      </MainLayout>
    );
  } catch (error) {
    notFound();
  }
}