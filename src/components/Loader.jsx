import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html center>
      <div className="w-[10vw] h-[10vw] rounded-full flex justify-center items-center">
        Loading...
      </div>
    </Html>
  );
}

export default Loader;
