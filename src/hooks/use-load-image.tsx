import { useEffect, useState } from 'react';

const useLoadImage = (path?: string) => {
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    const loadImage = async () => {
      try {
        if (path) {
          const image = await import(`../assets/images/${path}`);
          setImageSrc(image.default);
        }
      } catch (error) {
        console.error('Error loading the image:', error);
      }
    };

    loadImage();
  }, [path]);

  return { imageSrc, setImageSrc };
};

export default useLoadImage;
