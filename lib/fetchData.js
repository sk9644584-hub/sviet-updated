// src/lib/fetchData.js
const baseURL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export async function fetchPublicHomeData() {
  if (!baseURL) {
    throw new Error("Please Provide API URL (API_URL or NEXT_PUBLIC_API_URL) in your .env file");
  }

  const endpoint = `${baseURL}/public/home`;

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 60 } // Next.js specific ISR cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch home data: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching public home data via native fetch:", error);
    // Return empty fallback payload to prevent UI crashing on backend failure
    return {
      topBanners: [],
      heroImages: [],
      news: [],
      notifications: [],
      coes: [],
      gallery: []
    };
  }
}
