var randomizeEpisode = () => {
    return Math.ceil(Math.random() * 7)
}

export const fetchText = async () => {
    const episode = randomizeEpisode()
    try {
        const response = await fetch(`https://swapi.co/api/films/${episode}/`)
        const film = await response.json()
        return film;
    } catch (error) {
        console.log(error)
    } 
}

export const fetchPeople = async () => {
    try {
        const response = await fetch('https://swapi.co/api/people')
        const peopleData = await response.json()
        const people = await fetchHomeworlds(peopleData.results)
        return people
    } catch (error) {
        console.log(error)
    }
}

const fetchHomeworlds = (people) => {
    const peopleData = people.map( async person => {
        const response = await fetch(person.homeworld)
        const homeworld = await response.json()
        const homeworldData = {homeworld: homeworld.name, population: homeworld.population, person: person.name}
        return homeworldData
    })
    return Promise.all(peopleData)
}