import { useState } from 'react';
import ReactSlider from 'react-slick';

import { useMovies } from 'context/movies-context';

import SliderItem from 'components/trending-now/SliderItem';

const Slider = () => {
  const { moviesCatalog } = useMovies();
  const { TendingNow } = moviesCatalog || {};
  const [dragging, setDragging] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    arrows: false,
    beforeChange: () => {
      setDragging(true);
    },
    afterChange: () => {
      setDragging(false);
    },
  };

  return (
    <ReactSlider {...settings}>
      {TendingNow?.map((trendingNow) => {
        return (
          <SliderItem
            key={trendingNow.Id}
            item={trendingNow}
            dragging={dragging}
          />
        );
      })}
    </ReactSlider>
  );
};

export default Slider;
