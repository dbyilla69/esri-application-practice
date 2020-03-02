import React, { useEffect, useState, useRef } from 'react';
import { loadEsriModules } from '../utils/loader';

export default function Map({ center }) {
  const mapEl = useRef();
  const [view, setView] = useState(null);
  const [legend, setLegend] = useState(null);

  useEffect(() => {
    // Use esri-loader to load the ArcGIS JS API Web map:
    loadEsriModules([
      'esri/WebScene',
      'esri/views/SceneView',
      'esri/widgets/Legend'
    ]).then(([WebScene, SceneView, Legend]) => {
      if (!mapEl) {
        // component or app was likely destroyed
        return;
      }
      // create the Map
      const webScene = new WebScene({
        portalItem: {
          id: '579f97b2f3b94d4a8e48a5f140a6639b'
        }
      });
      // show the map at the element
      let view = new SceneView({
        map: webScene,
        container: mapEl.current
      });
      let legend = new Legend({
        view: view
      });
      view.ui.add(legend, 'top-right');
      // wait for the view to load
      view.when(() => {
        setView(view);
      });
    });

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
