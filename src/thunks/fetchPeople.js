import { storePeople } from '../actions/index'
import { fetchNestedPeopleData } from '../APIcalls'

export const fetchPeople = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const people = await fetchNestedPeopleData(data.results)
      dispatch(storePeople(people))
    } catch(error) {
      console.log(error)
    }
  }
}