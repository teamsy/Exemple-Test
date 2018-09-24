// API/TMDBApi.js

const API_TOKEN = "f41e0eae90e54f52c3395e4a7271f9ac";

export function getFilmsFromTMDBApiWithSearchText (text) {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +  "&language=fr&query=" + text;
    return fetch(url)
        .then((Response) => Response.json())
        .catch((error) => console.error(erreor))
}