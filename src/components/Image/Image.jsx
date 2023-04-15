import React from "react";

function Image({ iSrc }) {

  const styles = {
    maxWidth: '100%',
    objectFit: 'cover',
  };

  return (
    <img styles={styles} src={iSrc} alt="Image" />
  );
}

export default Image;
