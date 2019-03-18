export const cleanFilmText = (film) => {
    return {
        title: film.title,
        episode: film.episode_id,
        text: film.opening_crawl
    }
}

// export const cleanPeople = (people) => {
//     return people.filter(person => {
//         return {
//             person.name,
//             person.homeworld, //fetch, grab name and population
//             person.species, //fetch, reference staff bios
//             //homeworld species
//         }
//     })
// }

// const fetchHomeworld = () => {

// }