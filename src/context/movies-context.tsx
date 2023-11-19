import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import { cloneDeep, sortBy } from 'lodash';

import { VideoCatalog, VideoItem } from 'types';
import { FAVORITE_MOVIE_ID, hasMessageProperty } from 'helpers/helpers';

const MoviesContext = createContext<{
  favoriteMovie?: {
    item: VideoItem | null;
    play: boolean;
  };
  showFeatured: boolean;
  changeFavoriteMovie: (movie: VideoItem) => void;
  moviesCatalog: VideoCatalog | null;
  moviesLoading: boolean;
  moviesError: string | null;
}>({
  favoriteMovie: undefined,
  showFeatured: true,
  changeFavoriteMovie: (movie: VideoItem) => {},
  moviesCatalog: null,
  moviesLoading: false,
  moviesError: null,
});

export const useMovies = () => {
  return useContext(MoviesContext);
};

type Props = {
  children: ReactNode;
};

export const MoviesContextProvider = ({ children }: Props) => {
  const [favoriteMovie, setFavoriteMovie] = useState<{
    item: VideoItem | null;
    play: boolean;
  }>();
  const [showFeatured, setShowFeatured] = useState(true);
  const [movies, setMovies] = useState<VideoCatalog | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const changeFavoriteMovie = (movie: VideoItem) => {
    setFavoriteMovie({ item: movie, play: true });
    setShowFeatured(false);
  };

  useEffect(() => {
    // Fetch movies using axios
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const selectedItemId = sessionStorage.getItem(FAVORITE_MOVIE_ID);
        const response = await axios.get<VideoCatalog>('data.json');

        const copyData = cloneDeep(response.data);
        const { TendingNow } = copyData;

        let sortedItems = sortBy(
          TendingNow,
          (item: VideoItem) => new Date(item.Date),
        );

        if (selectedItemId) {
          const selectedFavoriteMovie = response.data.TendingNow.find(
            (movie) => {
              return movie.Id === selectedItemId;
            },
          );

          if (selectedFavoriteMovie) {
            setFavoriteMovie({ item: selectedFavoriteMovie, play: false });

            const filtered = sortedItems.filter(
              (item) => item.Id !== selectedFavoriteMovie.Id,
            );

            sortedItems = [selectedFavoriteMovie, ...filtered];
          } else {
            setFavoriteMovie(undefined);
          }
        } else {
          setFavoriteMovie(undefined);
        }

        copyData.TendingNow = sortedItems;
        setMovies(copyData);

        setLoading(false);
        setError(null);
      } catch (error) {
        hasMessageProperty(error);
        setLoading(false);
        console.log(error);
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        favoriteMovie,
        showFeatured,
        changeFavoriteMovie,
        moviesCatalog: movies,
        moviesLoading: loading,
        moviesError: error,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
