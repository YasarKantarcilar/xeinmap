import { useRef, useEffect, useState } from "react";
import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  console.log(lat, lng, zoom)
  mapboxgl.accessToken = "pk.eyJ1IjoibXltb29uIiwiYSI6ImNsc3B5ZDNnNTAzb3gybnFrZXZkaWd2b2EifQ.PU9pxWmKif3n3VFQ9TOoFg";
  useEffect(() => {

    if (map.current) return;
    // initialize map only once
    if (!mapContainer.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
    const Draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        line_string: true,
        point: true,
        trash: true
      },
      defaultMode: 'draw_polygon'
    });
    if (!map.current) return
    map.current.addControl(Draw, "top-left");
    map.current.on('draw.create', updateArea);
    map.current.on('draw.delete', updateArea);
    map.current.on('draw.update', updateArea);
    function updateArea() {
      const data = Draw.getAll();
      console.log(data.features[0].geometry.coordinates)
    }
    //map.current.on('move', () => {
    //  if (!map.current) return
    //  setLng(map.current.getCenter().lng.toFixed(4));
    //  setLat(map.current.getCenter().lat.toFixed(4));
    //  setZoom(map.current.getZoom().toFixed(2));
    //});
    const fetchedData = [
      [-71.6461009570174, 42.760132399230145],
      [-71.41187855038415, 42.362287547635646],
      [-71.08683521056626, 42.781185963843086],
      [-71.6461009570174, 42.760132399230145]
    ]
    // Function to reshape the data into a GeoJSON polygon
    function reshapeToGeoJSONPolygon(coordinates: number[][]) {
      return {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [coordinates] // Wrap the coordinates in an array to form a polygon
        }
      };
    }

    // Reshape the fetched data into a GeoJSON polygon
    const geoJSONPolygon = reshapeToGeoJSONPolygon(fetchedData);

    // Now you can add the reshaped polygon to the map using MapboxDraw
    // Assuming `draw` is your MapboxDraw instance
    Draw.add(geoJSONPolygon);
  }, []);

  return (
    <>
      <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
    </>
  );
};

export default MapComponent;
