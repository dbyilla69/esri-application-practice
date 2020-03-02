import { loadModules } from 'esri-loader';

// Ensures that the same options (second parameter to loadModules)
// is always sent the same for all calls to loadModules().
export function loadEsriModules(moduleNames) {
  return loadModules(moduleNames, { css: true });
}
