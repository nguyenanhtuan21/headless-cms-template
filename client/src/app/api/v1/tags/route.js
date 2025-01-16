// app/api/v1/tags/route.js  
import { NextResponse } from 'next/server';  
import { fetchAPI } from '@/services/wordpress/wordpress';  

export async function GET(request) {  
  const searchParams = request.nextUrl.searchParams;  
  const page = searchParams.get('page') || '1';  
  const per_page = searchParams.get('per_page') || '100';  

  try {  
    const data = await fetchAPI('/tags', {  
      page,  
      per_page,  
    });  

    return NextResponse.json(data);  
  } catch (error) {  
    return NextResponse.json(  
      { error: 'Failed to fetch tags' },  
      { status: 500 }  
    );  
  }  
}