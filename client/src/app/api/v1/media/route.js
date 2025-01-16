// app/api/v1/media/route.js  
import { NextResponse } from 'next/server';  
import { fetchAPI } from '@/services/wordpress/wordpress';  

export async function GET(request) {  
  const searchParams = request.nextUrl.searchParams;  
  const page = searchParams.get('page') || '1';  
  const per_page = searchParams.get('per_page') || '20';  
  const parent = searchParams.get('parent'); // ID of parent post  

  try {  
    const data = await fetchAPI('/media', {  
      page,  
      per_page,  
      parent,  
    });  

    return NextResponse.json(data);  
  } catch (error) {  
    return NextResponse.json(  
      { error: 'Failed to fetch media' },  
      { status: 500 }  
    );  
  }  
}