/* eslint-disable @typescript-eslint/no-explicit-any */
import HomePage from '@/components/homepage'
import React from 'react'
import { fetchData } from './websitesettings'

const Home = async () => {
  let websiteDetails = null;

  try {
    websiteDetails = await fetchData();
  } catch (error) {
    console.error("Failed to fetch website details:", error);
  }
  // console.log("websiteDetails",websiteDetails);
  return (
    <HomePage data={websiteDetails} />
  )
}

export default Home


export async function generateMetadata() {
  try {
    const metaData = await fetchData();
    console.log(metaData);

    return {
      title: metaData?.meta_title || '',
      description: metaData?.meta_description || '',
      keywords: metaData?.meta_keyword || '',

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
        index: metaData?.index ?? false,
        follow: metaData?.follow ?? false,
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
