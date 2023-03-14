function findNeedle(haystack) {
    for (const i in haystack) {
        if (haystack[i] === "needle") {
            return `found needle at position ${i}`
        }
    }
}

