import React, { useEffect, useState, useRef } from 'react';
import { loadEsriModules } from '../utils/loader';

export default function Map({ center }) {
  const mapEl = useRef();
  const [view, setView] = useState(null);

  useEffect(() => {
    // Use esri-loader to load the ArcGIS JS API Web map:
    loadEsriModules(['esri/WebMap', 'esri/views/MapView']).then(
      ([WebMap, MapView]) => {
        if (!mapEl) {
          // component or app was likely destroyed
          return;
        }
        // create the Map
        const webmap = new WebMap({
          portalItem: {
            id: '41281c51f9de45edaf1c8ed44bb10e30'
          }
        });
        // show the map at the element
        let view = new MapView({
          map: webmap,
          container: mapEl.current
        });
        // wait for the view to load
        view.when(() => {
          setView(view);
        });
      }
    );

    return () => {
      // this is run when the component unmounts and it should help
      // ensure that the map & view are scheduled for garbage collection
      setView(null);
    };
  }, []);

  // gets called ever time something changes the "center" state
  useEffect(() => {
    if (view && center) {
      view.center = center;
    }
  }, [center, view]);

  return <div className='map' style={{ height: '100vh' }} ref={mapEl} />;
}
