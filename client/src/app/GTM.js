"use client";  

import { useEffect } from 'react';  
import TagManager from 'react-gtm-module';  

export default function GTM() {  
  useEffect(() => {  
    TagManager.initialize({  
      gtmId: 'GTM-WPMWDJ9', // Thay bằng GTM ID của bạn  
    });  
  }, []);  

  return null; // Không cần render gì  
}