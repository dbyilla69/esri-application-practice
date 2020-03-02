import React from 'react';
import { WebMap, WebScene } from '@esri/react-arcgis';

const webMap = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WebMap id='6627e1dd5f594160ac60f9dfc411673f' />
    </div>
  );
};

export default webMap;
