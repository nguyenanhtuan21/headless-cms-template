// app/api/v1/categories/[id]/route.js  
import { NextResponse } from 'next/server';  
import { fetchAPI } from '@/services/wordpress/wordpress';  

export async function GET(request, { params }) {  
  try {  
    const category = await fetchAPI(`/categories/${params.id}`);  
    
    // Lấy thêm posts trong category này  
    const posts = await fetchAPI('/posts', {  
      categories: params.id,  
      per_page: 12,  
      _embed: true,  
    });  

    return NextResponse.json({  
      category,  
      posts,  
    });  
  } catch (error) {  
    return NextResponse.json(  
      { error: 'Category not found' },  
      { status: 404 }  
    );  
  }  
}