//Reducer
const categories = (state = false, action) => {
    switch (action.type) {
        case "CATEGORIES":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default categories