'use server';

import { BASE_URL } from "@/utils/api";

export const fetchData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/websitesettings/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    if (!res.ok) console.log(`HTTP error! Status: ${res.status}`);

    const contentType = res.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const data = await res.json();
      return data;
    }

    throw new Error('Invalid JSON response');
  } catch (error) {
    console.error("Error fetching meta data:", error);
    return null;
  }
};
