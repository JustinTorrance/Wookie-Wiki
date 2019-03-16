const randomizeEpisode = () => {
    return Math.random()
}

export const textFetch = async () => {
    try {
        const response = await fetch('https://swapi.co/api/films/1/')
        const film = await response.json()
        console.log(film)
        return film;
    } catch (error) {
        console.log(error)
    } 
}