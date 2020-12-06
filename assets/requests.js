export function getSentencesUrl(page) {
    return `/api/sentences?order%5BcreatedAt%5D=desc&page=${page}`;
}

export function createSentenceUrl() {
    return '/api/sentences'
}