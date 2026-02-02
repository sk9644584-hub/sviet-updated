export const metadata = {
    title: "Gallery"
}
import React from 'react'
import GalleryPage from './Gallery'
import axiosInstance from '@/lib/axiosInstance';

function extractDateFromTitle(title) {
    // Matches formats like: 26th January 2026, 11 October 2025, 08-11-2025
    const monthMap = {
        january: 0, february: 1, march: 2, april: 3,
        may: 4, june: 5, july: 6, august: 7,
        september: 8, october: 9, november: 10, december: 11
    };

    let match = title.match(/(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)\s+(\d{4})/);
    if (match) {
        const day = parseInt(match[1]);
        const month = monthMap[match[2].toLowerCase()];
        const year = parseInt(match[3]);
        return new Date(year, month, day);
    }

    match = title.match(/(\d{1,2})-(\d{1,2})-(\d{4})/);
    if (match) {
        return new Date(match[3], match[2] - 1, match[1]);
    }

    // Fallback (very old if parsing fails)
    return new Date(0);
}

function groupDataByCategory(dataArray) {

    const sortedData = [...dataArray].sort((a, b) => {
        const dateA = extractDateFromTitle(a.title);
        const dateB = extractDateFromTitle(b.title);
        return dateB - dateA; // DESC
    });
    const grouped = sortedData.reduce((acc, item) => {
        const { category, title, img, href } = item;

        if (!acc[category]) {
            acc[category] = [];
        }

        // preserve original sequence from the source data by pushing
        acc[category].push({ title, img, href });

        return acc;
    }, {}); // Start with an empty object

    const categoryOrder = [
        "Cultural Events",
        "Technical Events",
        "Sports",
        "Academic & Ceremonial"
    ];
    const sortedCategories = {};

    for (const categoryName of categoryOrder) {
        if (grouped[categoryName]) {
            sortedCategories[categoryName] = grouped[categoryName];
        }
    }
    for (const categoryName in grouped) {
        if (!sortedCategories[categoryName]) {
            sortedCategories[categoryName] = grouped[categoryName];
        }
    }
    return sortedCategories;
}


const page = async () => {
    let categories = []
    try {
        const response = await axiosInstance.get('/gallery');
        categories = groupDataByCategory(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    return (
        <GalleryPage categories={categories} />
    )
}

export default page