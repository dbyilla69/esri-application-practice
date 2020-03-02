import React from 'react';
import { WebScene } from '@esri/react-arcgis';

const SceneView = () => {
  return (
    // <Scene
    //   style={{ width: '100vw', height: '100vh' }}
    //   mapProperties={{ basemap: 'satellite' }}
    //   viewProperties={{
    //     center: [-122.4443, 47.2529],
    //     zoom: 3
    //   }}
    // />
    <div style={{ width: '90vw', height: '90vh' }}>
      <WebScene id='1c7a06421a314ac9b7d0fae22aa367fb' />
    </div>
  );
};

export default SceneView;
