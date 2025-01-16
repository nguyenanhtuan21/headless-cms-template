// app/api/v1/posts/route.js  
import { NextResponse } from 'next/server';  
import { fetchAPI } from '@/services/wordpress/wordpress';  

export async function GET(request) {  
  // Lấy search params từ URL  
  const { searchParams } = new URL(request.url);  
  const page = searchParams.get('page') || '1';  
  const per_page = searchParams.get('per_page') || '10';  
  const category = searchParams.get('category');  
  const search = searchParams.get('search');  

  try {  
    const data = await fetchAPI('/posts', {  
      page,  
      per_page,  
      categories: category,  
      search,  
      _embed: true,  
    });  

    return NextResponse.json(data);  
  } catch (error) {  
    console.error('API Error:', error);  
    return NextResponse.json(  
      { error: 'Failed to fetch posts' },  
      { status: 500 }  
    );  
  }  
}