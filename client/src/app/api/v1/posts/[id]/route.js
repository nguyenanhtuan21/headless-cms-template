// app/api/v1/posts/[id]/route.js  
import { NextResponse } from 'next/server';  
import { fetchAPI } from '@/services/wordpress/wordpress';  

export async function GET(request, context) {  
  // Đảm bảo params được xử lý đúng cách  
  const id = context.params.id;  
  

  try {  
    const post = await fetchAPI(`/posts/${id}`, {  
      _embed: true,  
    });  

    if (!post) {  
      return NextResponse.json(  
        { error: 'Post not found' },  
        { status: 404 }  
      );  
    }  

    return NextResponse.json(post);  
  } catch (error) {  
    return NextResponse.json(  
      { error: 'Failed to fetch post' },  
      { status: 500 }  
    );  
  }  
}