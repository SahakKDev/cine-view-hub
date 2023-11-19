import { styled } from '@mui/material/styles';

import useLoadImage from 'hooks/use-load-image';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { secondsToHoursMinutes } from 'helpers/helpers';
import { VideoItem } from 'types';

import Button from 'utils/Button';

const Div = styled('div')(() => ({
  position: 'absolute',
  top: '20%',
  left: '0%',
  maxWidth: '500px',
}));

const H1 = styled('h1')(() => ({
  color: '#858688',
  textTransform: 'uppercase',
  fontSize: 18,
  marginBottom: '5px',
}));

const VideoBlockInfo = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
  marginBottom: '10px',
}));

const InfoText = styled('p')(() => ({
  fontSize: '20px',
  marginBottom: '20px',
}));

const Actions = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
}));

type Props = {
  featuredVideo: VideoItem;
};

const VideoBlock = ({ featuredVideo }: Props) => {
  const {
    Category,
    TitleImage,
    ReleaseYear,
    MpaRating,
    Duration,
    Description,
    Title,
  } = featuredVideo;
  const { imageSrc } = useLoadImage(TitleImage);
  return (
    <Div>
      <header>
        <H1>
          {Category} ({Title})
        </H1>
        <img
          src={imageSrc}
          alt="asd"
          width={'80%'}
          style={{ marginBottom: '5px' }}
        />
      </header>
      <section>
        <VideoBlockInfo>
          <span>{ReleaseYear}</span>
          <span>{MpaRating}</span>
          <span>{secondsToHoursMinutes(Duration)}</span>
        </VideoBlockInfo>

        <InfoText>{Description}</InfoText>

        <Actions>
          <Button Icon={<PlayArrowIcon />} backgroundColor="#fff" color="#000">
            Play
          </Button>
          <Button backgroundColor="#2727F5" color="#fff">
            More Info
          </Button>
        </Actions>
      </section>
    </Div>
  );
};

export default VideoBlock;
