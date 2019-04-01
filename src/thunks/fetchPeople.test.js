import { fetchPeople } from './fetchPeople'
import { fetchNestedPeopleData } from '../APIcalls'
import { storePeople } from '../actions'

describe('fetchPeople', () => {
  let mockUrl
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.someurl.com'
    mockDispatch = jest.fn()
  })

  it('should dispatch storePeople', async () => {
    const mockPeople = [{name: 'Luke', residents: ['han', 'solo']}]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        people: mockPeople
      })
    }))

    const thunk = fetchPeople(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(storePeople(mockPeople))

  })




})