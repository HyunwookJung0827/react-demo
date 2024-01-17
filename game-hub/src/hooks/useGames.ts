// Main Functionality around fetching the game
import { GameQuery } from "../App";
import useData from "./useData";

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
const useGames = (gameQuery: GameQuery) => 
useData<Game>('/games', { 
  params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder
  }}, 
[gameQuery]
);

export default useGames;