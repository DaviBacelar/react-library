export default (state = {}, action) => {
    switch (action.type) {
     case 'BOOKS':
      return {
       result: action.payload
      }
     default:
      return state
    }
}