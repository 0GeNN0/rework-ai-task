import React from "react";

function Button({ text, brW, pad, fnS, fnW }) {

  const styles = {
    border: `${brW || 2}px solid #F48850`,
    borderRadius: '6px',
    padding: pad || '6px 30px',
    color: '#F48850',
    fontFamily: 'Lato, sans-serif',
    fontWeight: fnW || '400',
    fontSize: `${fnS || 20}px`,
    cursor: 'pointer'
  };

  return <button style={styles}>
    {text}
  </button>;
}

export default Button;
