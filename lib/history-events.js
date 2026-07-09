"use client"

let patched = false

export function patchHistoryForLocationChange() {
    if (patched || typeof window === "undefined") return
    patched = true

    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function (...args) {
        originalPushState.apply(window.history, args)
        window.dispatchEvent(new Event("locationchange"))
    }

    window.history.replaceState = function (...args) {
        originalReplaceState.apply(window.history, args)
        window.dispatchEvent(new Event("locationchange"))
    }

    window.addEventListener("popstate", () => {
        window.dispatchEvent(new Event("locationchange"))
    })
}