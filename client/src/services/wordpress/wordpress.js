 const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'http://localhost/cms/wp-json/wp/v2';  

export async function fetchAPI(endpoint, params = {}) {  
  try {  
    const queryString = new URLSearchParams();  
    Object.entries(params).forEach(([key, value]) => {  
      if (value !== undefined && value !== null) {  
        queryString.append(key, String(value));  
      }  
    });  

    const url = `${WORDPRESS_API_URL}${endpoint}${  
      queryString.toString() ? '?' + queryString.toString() : ''  
    }`;  

    console.log('Fetching:', url); // For debugging  

    const response = await fetch(url, {  
      headers: {  
        'Content-Type': 'application/json',  
      },  
      next: { revalidate: 60 },  
    });  

    if (!response.ok) {  
      throw new Error(`HTTP error! status: ${response.status}`);  
    }  

    const data = await response.json();  
    return data;  
  } catch (error) {  
    console.error('WordPress API Error:', error);  
    throw error;  
  }  
}