'use server';

import { BASE_URL } from "@/utils/api"; 
export const fetchMeta = async (slug: string ) => {

  try {
    // Remove leading and trailing slashes, but keep internal slashes
    const formattedSlug = slug.replace(/^\/+|\/+$/g, '') || '/';
    // Perform the fetch request
    const res = await fetch(`${BASE_URL}/api/meta-data/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug: formattedSlug }),
      cache: 'no-store',
        });
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      return data?.data;
    } else {
        console.error("Error from else of metadata")
    }
  } catch (error) {
    console.error("Error fetching meta data:", error);
  }
};
