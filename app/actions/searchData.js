"use server"

import axiosInstance from "@/lib/axiosInstance"

export async function getGlobalSearchData() {
    try {
        const [galleryRes, newsRes, notifRes, coesRes] = await Promise.all([
            axiosInstance.get('/gallery').catch(() => ({ data: [] })),
            axiosInstance.get('/news').catch(() => ({ data: [] })),
            axiosInstance.get('/notifications').catch(() => ({ data: [] })),
            axiosInstance.get('/coes').catch(() => ({ data: [] })),
        ])

        const newItems = []

        if (galleryRes.data && Array.isArray(galleryRes.data)) {
            galleryRes.data.forEach(item => {
                if (item.title) {
                    newItems.push({
                        name: item.title,
                        href: item.href || "/CollegeGallery",
                        keywords: `gallery, photo, event, image, ${item.category || ""}`,
                        group: "Gallery & Events"
                    })
                }
            })
        }

        if (newsRes.data && Array.isArray(newsRes.data)) {
            newsRes.data.forEach(item => {
                if (item.title) {
                    newItems.push({
                        name: item.title,
                        href: item.href || "/",
                        keywords: `news, update, event, announcement, ${item.description || ""}`,
                        group: "News Updates"
                    })
                }
            })
        }

        if (notifRes.data && Array.isArray(notifRes.data)) {
            notifRes.data.forEach(item => {
                if (item.title) {
                    newItems.push({
                        name: item.title,
                        href: item.href || "/",
                        keywords: `notification, notice, alert, important`,
                        group: "Notifications"
                    })
                }
            })
        }

        if (coesRes.data && Array.isArray(coesRes.data)) {
            coesRes.data.forEach(item => {
                if (item.name) {
                    newItems.push({
                        name: item.name,
                        href: item.href || "/",
                        keywords: `coe, center of excellence, facility, lab, department`,
                        group: "Centers of Excellence"
                    })
                }
            })
        }

        return newItems
    } catch (error) {
        console.error("Failed to fetch search data", error)
        return []
    }
}
