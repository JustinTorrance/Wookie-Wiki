export const cleanFilmText = (film) => {
    return {
        title: film.title,
        episode: film.episode_id,
        text: film.opening_crawl
    }
}