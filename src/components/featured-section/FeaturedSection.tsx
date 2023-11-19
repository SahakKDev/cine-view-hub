import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useMovies } from 'context/movies-context';

import useLoadImage from 'hooks/use-load-image';
import VideoBlock from 'components/featured-section/VideoBlock';

import { styled } from '@mui/material/styles';

const Div = styled('div')<{ url?: string | null; isDrawerOpen: boolean }>(
  ({ url, isDrawerOpen }) => ({
    background: url
      ? `${
          isDrawerOpen
            ? 'linear-gradient(to right, black 2%, transparent 100%)'
            : 'none'
        }, url(${url})`
      : '',
    backgroundSize: 'cover',
    height: '80vh',
    width: '100%',
    position: 'relative',
  }),
);

const TrendingNow = styled('p')(() => ({
  fontSize: '30px',
  position: 'absolute',
  bottom: 0,
  left: 0,
}));

type Props = {
  isDrawerOpen: boolean;
};

let timerId: number;

const FeaturedSection = ({ isDrawerOpen }: Props) => {
  const { moviesCatalog, favoriteMovie, showFeatured } = useMovies();

  const { item: favoriteMovieItem, play = false } = favoriteMovie || {};
  const { Id, VideoUrl } = favoriteMovieItem || {};

  const [playing, setPlaying] = useState<boolean>(play);
  const [video, setVideo] = useState<string>('');
  const { Featured } = moviesCatalog || {};

  let selectedMovie = Featured;

  if (!showFeatured && favoriteMovieItem) {
    selectedMovie = favoriteMovieItem;
  }

  const { imageSrc } = useLoadImage(selectedMovie?.CoverImage);

  const stopPlaying = () => {
    setPlaying(false);
    setVideo('');
  };

  useEffect(() => {
    stopPlaying();

    if (play) {
      timerId = window.setTimeout(() => {
        if (VideoUrl) {
          setPlaying(true);
          setVideo(VideoUrl);
        }
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [Id, VideoUrl, play]);

  return (
    <Div url={!playing ? imageSrc : null} isDrawerOpen={isDrawerOpen}>
      {!playing && selectedMovie && (
        <VideoBlock featuredVideo={selectedMovie} />
      )}
      {playing && (
        <ReactPlayer
          url={video}
          playing={playing}
          loop={false}
          muted
          width={'100%'}
          height={'100%'}
          onEnded={() => {
            setPlaying(false);
          }}
        />
      )}
      <TrendingNow>Trending Now</TrendingNow>
    </Div>
  );
};

export default FeaturedSection;
