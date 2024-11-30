export interface MovieResponse {
  "show_id": string,
  "type": string,
  "title": string,
  "director": string,
  "cast": string,
  "country": string,
  "date_added": string,
  "release_year": number,
  "rating": string,
  "duration": string,
  "listed_in": string,
  "description": string
}

export interface ApiResponse {
  total_count: number,
  data: MovieResponse[],
}
