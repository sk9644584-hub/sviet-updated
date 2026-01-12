export const metadata = {
    title: "Gallery"
}
import React from 'react'
import GalleryPage from './Gallery'
import axiosInstance from '@/lib/axiosInstance';
function groupDataByCategory(dataArray) {
    const grouped = dataArray.reduce((acc, item) => {
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
        console.log(categories);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
    return (
        <GalleryPage categories={categories} />
    )
}

export default page