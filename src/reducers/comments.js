//Reducer
const comments = (state = false, action) => {
    switch (action.type) {
        case "COMMENTS":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}

export default comments