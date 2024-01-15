// Main Functionality around fetching the game
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    // parent_platform is not an array of platform
    // It's an array of objects that has a property platform
    metacritic: number;
  }
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGames;