export const booksAction = (value) => {
    return {
        type: 'BOOKS',
        payload: value
    }
}

export const categoriesAction = (value) => {
    return {
        type: 'CATEGORIES',
        payload: value
    }
}

export const commentsAction = (value) => {
    return {
        type: 'COMMENTS',
        payload: value
    }
}