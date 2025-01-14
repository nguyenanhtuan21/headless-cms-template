import { NextSeo } from "next-seo";
export default function AmisAccountingPage() {
  return (
    <div>
        <NextSeo
            title="Manage SEO in NextJS with Next SEO"
            description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
            canonical="www.example.com/next-seo-blog"
            openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2022-06-21T23:04:13Z',
                    modifiedTime: '2022-01-21T18:04:43Z',
                    authors: [
                        'https://www.example.com/authors/@firstnameA-lastnameA',
                        'https://www.example.com/authors/@firstnameB-lastnameB',
                    ],
                    tags: ['Tag A', 'Tag B', 'Tag C'],
                },
                url: 'www.example.com/next-seo-blog',
                images: {
                    url: 'https://www.test.ie/images/cover.jpg',
                    width: 850,
                    height: 650,
                    alt: 'Photo of text',
                },
                site_name: 'Next Blog'
            }}
        />
      amis ke toan
    </div>
  );
}