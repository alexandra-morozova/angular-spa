import { FilmPreview } from "./film.model";

export interface SearchResponce {
    Response: string,
    totalResults: string,
    Search: FilmPreview[]
}
