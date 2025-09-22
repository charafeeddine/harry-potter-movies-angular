export interface Movie {
    id: number;
    title: string;
    duration: number;
    budget: number;
    release_date: string;
    box_office: string | number;
    cinematographers: string[];
    poster: string;
    producers: string[];
    summary: string; 
}