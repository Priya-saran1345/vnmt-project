/* eslint-disable @typescript-eslint/no-explicit-any */
import HomePage from '@/components/homepage'
import React from 'react'
import { BASE_URL } from '@/utils/api';
import { fetchMeta } from '../meta-data';

const Home = async () => {
  let blogData = null;

  try {
      const response = await fetch(`${BASE_URL}/api/blog`);
     blogData = await response.json();
  } catch (error) {
    console.error("Failed to fetch website details:", error);
  }
  return (
    <HomePage blogdata={blogData} />
  )
}

export default Home


export async function generateMetadata() {
  try {
    const metaData = await fetchMeta("/");
    // console.log("metaData",metaData);

    return {
      title: metaData?.title || '',
      description: metaData?.description || '',
      keywords: metaData?.keywords || '',

      openGraph: metaData?.openGraph
        ? {
          type: metaData.openGraph.type || '',
          title: metaData.openGraph.title || '',
          description: metaData.openGraph.description || '',
          url: metaData.openGraph.url || '',
          siteName: metaData.openGraph.siteName || '',
          images: metaData.openGraph.images?.map((image: any) => ({
            url: image?.url || '',
            width: parseInt(image?.width) || '',
            height: parseInt(image?.height) || '',
            alt: image?.alt || '',
          })) || [],
          locale: metaData.openGraph.locale || '',
        }
        : undefined,

      robots: {
        index: metaData?.robots?.index ?? false,
        follow: metaData?.robots?.follow ?? false,
      },

      icons: metaData?.schema?.[0]?.logo
        ? {
          icon: metaData.schema[0].logo,
          shortcut: metaData.schema[0].logo,
          apple: metaData.schema[0].logo,
        }
        : undefined,

      twitter: metaData?.twitter
        ? {
          card: metaData.twitter.card || '',
          title: metaData.twitter.title || '',
          description: metaData.twitter.description || '',
          creator: metaData.twitter.creator || '',
          images: metaData.twitter.images || '',
        }
        : undefined,

      alternates: {
        canonical: metaData?.schema?.[0]?.url || '',
      },
    };
  } catch (error) {
    console.error('Error fetching meta data:', error);
    return {
      title: 'Premium Guest Posting Services for SEO Success',
      description: 'Elevate your search engine rankings with our top-tier guest posting services. Quality placements for enhanced visibility and traffic.',
    };
  }
}
