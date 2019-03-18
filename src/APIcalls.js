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
        const people = await fetchNestedPeopleData(peopleData.results)
        return Promise.all(people)
    } catch (error) {
        console.log(error)
    }
}

const fetchNestedPeopleData = (people) => {
    const peopleData = people.map( async person => {
        const speciesData = await (fetchSpecies(person))
        const homeworldData = await(fetchHomeworld(person))
        return {
            name: person.name,
            species: speciesData.species,
            homeworld: homeworldData.homeworld,
            population: homeworldData.population
        }
    })
    return Promise.all(peopleData)
}

const fetchHomeworld = async (person) => {
    const response = await fetch(person.homeworld)
    const homeworldData = await response.json()
    return {    homeworld: homeworldData.name, 
                population: homeworldData.population }
}

const fetchSpecies = async (person) => {
    const response = await fetch(person.species)
    const species = await response.json()
    console.log('species', species.name)
    return { species: species.name }
    }