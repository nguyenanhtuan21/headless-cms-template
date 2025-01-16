
import "./globals.css"; 
import '../styles/shared.module.css'; 
// import GTM from "./GTM"; 
 

export const metadata = {  
  title: "MISA AMIS - Nền tảng quản trị doanh nghiệp hợp nhất",  
    description: "MISA AMIS - Nền tảng quản trị doanh nghiệp hợp nhất",  
    openGraph: {  
      type: "website",  
      locale: "vi_VN",  
      url: "https://www.example.com/",  
      site_name: "MIAS AMIS",  
      images: [  
        {  
          url: "https://amis.misa.vn/wp-content/uploads/2023/09/misa-amis-homepage-feature.png",  
          width: 1200,  
          height: 630,  
          alt: "MISA AMIS - Nền tảng quản trị doanh nghiệp hợp nhất",  
        },  
      ],  
    },  
    twitter: {  
      handle: "@example",  
      site: "@example",  
      cardType: "summary_large_image",  
    }, 
};  

export default function RootLayout({ children }) { 
  return (  
    <html lang="vi">  
      <body>  
        {children}  
        {/* <GTM /> */}
      </body>  
    </html>  
  );  
}