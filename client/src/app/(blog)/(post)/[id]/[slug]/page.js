// app/[id]/[slug]/page.js  
import MainLayout from '@/components/layout/MainLayout';
import { notFound } from 'next/navigation';  
import { fetchAPI } from '@/services/wordpress/wordpress';  

async function getPost(id) {  
  try {  
    return await fetchAPI(`/posts/${id}`, { _embed: true });  
  } catch (error) {  
    throw new Error('Failed to fetch post');  
  }  
}  

export async function generateStaticParams() {  
  const posts = await fetchAPI('/posts', { per_page: 100 });  
  
  return posts.map((post) => ({  
    id: post.id.toString(),  
    slug: post.slug,  
  }));  
}  

export async function generateMetadata({ params }) {  
  const post = await getPost(params.id);  
  
  return {  
    title: post.title.rendered,  
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ''),  
    openGraph: {  
      title: post.title.rendered,  
      description: post.excerpt.rendered.replace(/<[^>]*>/g, ''),  
      images: post._embedded?.['wp:featuredmedia']?.[0]?.source_url  
        ? [{ url: post._embedded['wp:featuredmedia'][0].source_url }]  
        : [],  
    },  
  };  
}  

export default async function PostPage({ params }) {  
  try {  
    const post = await getPost(params.id);  

    if (!post || post.slug !== params.slug) {  
      notFound();  
    }  

    return (  
      <MainLayout>
      <article className="max-w-4xl mx-auto py-8">  
        <h1 className="text-4xl font-bold mb-4">  
          {post.title.rendered}  
        </h1>  
        
        {post._embedded?.['wp:featuredmedia']?.[0] && (  
          <div className="mb-8">  
            <img  
              src={post._embedded['wp:featuredmedia'][0].source_url}  
              alt={post.title.rendered}  
              className="w-full h-auto rounded-lg"  
            />  
          </div>  
        )}  

        <div   
          className="prose prose-lg max-w-none"  
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}  
        />  
      </article> 
      </MainLayout>
    );  
  } catch (error) {  
    notFound();  
  }  
}