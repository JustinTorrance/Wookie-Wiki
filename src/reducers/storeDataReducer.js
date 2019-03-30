export const storeDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_PEOPLE':
      return action.people
    default: 
      return state
  }
}