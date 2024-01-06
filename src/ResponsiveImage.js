// import React from 'react';

// const ResponsiveImage = ({ originalImageUrl }) => {
//   // Extract folder name from the original image URL
//   const parts = originalImageUrl.split('/');
//   const imagesIndex = parts.indexOf('images');

//   if (imagesIndex === -1 || imagesIndex === parts.length - 1) {
//     console.error('Invalid original image URL format:', originalImageUrl);
//     // Handle this case or log an error as needed
//     return null;
//   }

//   const folderName = parts[imagesIndex + 1];

//   const getResponsiveImageUrl = (width, height) => {
//     const responsiveImageName = `${width}x${height}.webp`;
//     return `/images/${folderName}/${responsiveImageName}`;
//   };

//   const getSrcSet = () => {
//     const sizes = [
//       [300, 120],
//       [700, 270],
//       [1300, 500]
//     ];

//     const srcset = sizes.map(([width, height]) => {
//       const imageUrl = getResponsiveImageUrl(width, height);
//       console.log(`Generated Image URL for ${width}x${height}: ${imageUrl}`);
//       return `${imageUrl} ${width}w`;
//     });

//     console.log(`Generated srcset: ${srcset.join(', ')}`);

//     // Return the generated srcset
//     return srcset.join(', ');
//   };

//   return (
//     <img
//       className="img-fluid"
//       src={getResponsiveImageUrl(1300, 500)} // Fallback for browsers that don't support srcset
//       srcSet={getSrcSet()}
//       sizes="(max-width: 320px) 300px, (max-width: 576px) 300px, (max-width: 992px) 700px, 1300px"
//       alt=""
//     />
//   );
// };

// export default ResponsiveImage;

import React from 'react';

const ResponsiveImage = ({ originalImageUrl }) => {
  // Extract folder name from the original image URL
  const parts = originalImageUrl.split('/');
  const imagesIndex = parts.indexOf('images');

  if (imagesIndex === -1 || imagesIndex === parts.length - 1) {
    console.error('Invalid original image URL format:', originalImageUrl);
    // Handle this case or log an error as needed
    return null;
  }

  const folderName = parts[imagesIndex + 1];

  const getResponsiveImageUrl = (width, height) => {
    const responsiveImageName = `${width}x${height}.webp`;
    return `/images/${folderName}/${responsiveImageName}`;
  };

  const getSrcSet = () => {
    const sizes = [
      [300, 120],
      [700, 270],
      [1300, 500]
    ];

    const srcset = sizes.map(([width, height]) => {
      const imageUrl = getResponsiveImageUrl(width, height);
      console.log(`Generated Image URL for ${width}x${height}: ${imageUrl}`);
      return `${imageUrl} ${width}w`;
    });

    console.log(`Generated srcset: ${srcset.join(', ')}`);

    // Return the generated srcset
    return srcset.join(', ');
  };

  return (
    <img
      className="img-fluid"
      src={getResponsiveImageUrl(1300, 500)} // Fallback for browsers that don't support srcset
      srcSet={getSrcSet()}
      sizes="(max-width: 320px) 300px, (max-width: 576px) 300px, (max-width: 992px) 700px, 1300px"
      style={{ objectFit: 'cover', height: '100%', width: '100%' }} // Maintain aspect ratio
      alt=""
    />
  );
};

export default ResponsiveImage;
