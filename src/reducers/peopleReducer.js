export const peopleReducer = (state = [], action) => {
  switch(action.type) {
    case 'STORE_PEOPLE':
    console.log('action.people', action.people)
      return action.people
    default: 
      return state
  }
}