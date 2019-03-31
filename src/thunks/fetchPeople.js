import { storePeople } from '../actions'
import { fetchNestedPeopleData } from '../APIcalls'

export const fetchPeople = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      const people = await fetchNestedPeopleData(data.results)
      
      dispatch(storePeople(people))
    }
  }
}