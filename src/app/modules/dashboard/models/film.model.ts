
export interface Film {
    Title: string, 
    Year: string, 
    Rated: string, 
    Released: string, 
    Runtime: string, 
    Genre: string, 
    Director: string, 
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: Raiting[],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: VideoTypes,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: "True" | "False"
}

export interface FilmPreview {
    Poster: string,
    Title: string, 
    Type: string, 
    Year:  string
}

export interface Raiting {
    Source: string;
    Value: string
}

export enum VideoTypes {
    movie,
    series,
    episode
}

export const noData = 'N/A'