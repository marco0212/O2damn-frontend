import React, { useEffect, useRef } from 'react';
import Canvas from './Canvas';

function CanvasContainer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = window.innerHeight;
  }, []);
  return <Canvas refs={canvasRef} />;
}

export default CanvasContainer;
