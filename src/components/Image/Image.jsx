import React from "react";

function Image({ iSrc }) {

  const styles = {
    maxWidth: '100%',
    objectFit: 'cover',
  };

  return (
    <img src={iSrc} alt="Image" styles={styles} />
  );
}

export default Image;
