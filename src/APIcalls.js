var randomizeEpisode = () => {
    return Math.ceil(Math.random() * 7)
}

export const textFetch = async () => {
    const episode = randomizeEpisode()
    try {
        const response = await fetch(`https://swapi.co/api/films/${episode}/`)
        const film = await response.json()
        return film;
    } catch (error) {
        console.log(error)
    } 
}