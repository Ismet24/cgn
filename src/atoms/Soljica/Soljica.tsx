import React from 'react';

interface Kafa {
  // string - niz karaktera
  // number - broj
  // boolean - true ili false
  // null - nista
  // undefined - fakat nista
  // array - string[], boolean[], number[]
  tecnost: string[];
}
const Soljica = (props: { kafa: string[] }) => {
  return <div>{props.kafa}</div>;
};

export default Soljica;