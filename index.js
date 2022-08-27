require(["esri/config","esri/Map", "esri/views/MapView", "esri/widgets/Locate"], function (esriConfig,Map, MapView, Locate) {
esriConfig.apiKey = "AAPK2765eef721994d35856744c688ac696f0a69bVMIpgnCttpbfzYxsr8gTLxDSitTxNYa9n8hlcVyXI6PwJ_hmOIe7tqHqAC6";

const map = new Map({
    basemap: "arcgis-topographic" // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-75.567, 6.217], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
  });
  const locate = new Locate({
    view: view,
    useHeadingEnable: false,
    goToOverride: function(view, options){
        options.target.scale = 1500;
        return view.goTo(options.target);
    }
  });
  view.ui.add(locate, "top-left");
})