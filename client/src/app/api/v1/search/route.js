// app/api/v1/search/route.js  
import { NextResponse } from 'next/server';  
import { fetchAPI } from '@/services/wordpress/wordpress';  

export async function GET(request) {  
  const searchParams = request.nextUrl.searchParams;  
  const query = searchParams.get('q') || '';  
  const page = searchParams.get('page') || '1';  
  const per_page = searchParams.get('per_page') || '10';  
  const type = searchParams.get('type') || 'post'; // post, page, or any custom post type  

  try {  
    const data = await fetchAPI(`/${type}s`, {  
      search: query,  
      page,  
      per_page,  
      _embed: true,  
    });  

    return NextResponse.json(data);  
  } catch (error) {  
    return NextResponse.json(  
      { error: 'Search failed' },  
      { status: 500 }  
    );  
  }  
}