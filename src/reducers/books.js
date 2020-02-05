//Reducer
const books = (state = false, action) => {
    switch (action.type) {
        case "BOOKS":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default books