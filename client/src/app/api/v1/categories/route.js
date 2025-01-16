// app/api/v1/categories/route.js  
import { NextResponse } from 'next/server';  
import { fetchAPI } from '@/services/wordpress/wordpress';  

export async function GET(request) {  
  const searchParams = request.nextUrl.searchParams;  
  const page = searchParams.get('page') || '1';  
  const per_page = searchParams.get('per_page') || '100';  
  const hide_empty = searchParams.get('hide_empty') || true;  

  try {  
    const data = await fetchAPI('/categories', {  
      page,  
      per_page,  
      hide_empty,  
    });  

    return NextResponse.json(data);  
  } catch (error) {  
    return NextResponse.json(  
      { error: 'Failed to fetch categories' },  
      { status: 500 }  
    );  
  }  
}