import { useMovies } from 'context/movies-context';
import useLoadImage from 'hooks/use-load-image';

import { styled } from '@mui/material/styles';

import { FAVORITE_MOVIE_ID } from 'helpers/helpers';
import { VideoItem } from 'types';

const Img = styled('img')(() => ({
  height: '20vh',
  cursor: 'pointer',
}));

type Props = {
  item: VideoItem;
  dragging: boolean;
};

const SliderItem = ({ item, dragging }: Props) => {
  const { imageSrc } = useLoadImage(item.CoverImage);
  const { changeFavoriteMovie } = useMovies();

  const handleClick = () => {
    if (!dragging) {
      sessionStorage.setItem(FAVORITE_MOVIE_ID, item.Id);
      changeFavoriteMovie(item);
    }
  };

  return (
    <div>
      <Img
        role="button"
        src={imageSrc}
        alt="Cover Image of the film"
        onClick={handleClick}
      />
    </div>
  );
};

export default SliderItem;
