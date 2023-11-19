import { useState } from 'react';
import { MoviesContextProvider, useMovies } from 'context/movies-context';

import FeaturedSection from 'components/featured-section/FeaturedSection';
import NavigationList from 'components/naviagation/Navigation';
import TrendingNowSection from 'components/trending-now/TrendingNowSection';

import ErrorComponent from 'components/error/Error';
import Loading from 'components/loading/Loading';

function App() {
  const { moviesError, moviesLoading } = useMovies();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const expandDrawer = () => {
    setIsDrawerOpen(true);
  };

  const reduceDrower = () => {
    setIsDrawerOpen(false);
  };

  if (moviesError) {
    return <ErrorComponent errorMessage={moviesError} />;
  }

  if (moviesLoading) {
    return <Loading />;
  }

  return (
    <div>
      <NavigationList
        isDrawerOpen={isDrawerOpen}
        expandDrawer={expandDrawer}
        reduceDrower={reduceDrower}
      />
      <MoviesContextProvider>
        <main style={{ marginLeft: '157px' }}>
          <FeaturedSection isDrawerOpen={isDrawerOpen} />
          <TrendingNowSection />
        </main>
      </MoviesContextProvider>
    </div>
  );
}

export default App;
