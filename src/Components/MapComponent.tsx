import MapboxDraw from "@mapbox/mapbox-gl-draw";
import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MapComponent = ({ markable, createArea, marker, setMarker }: { markable: boolean, createArea: (area: any) => void, marker?: number[], setMarker: (...args: any) => void }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | any>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  console.log(lat, lng, zoom)
  mapboxgl.accessToken = "pk.eyJ1IjoibXltb29uIiwiYSI6ImNsc3B5ZDNnNTAzb3gybnFrZXZkaWd2b2EifQ.PU9pxWmKif3n3VFQ9TOoFg";
  useEffect(() => {
    setLng(-70.9)
    setLat(42.35)
    setZoom(9)

    if (map.current) return;
    // initialize map only once
    if (!mapContainer.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
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
    map.current.on('click', function(e: any) {
      // e.lngLat contains the longitude and latitude of the clicked point
      var lat = e.lngLat.lat;
      var lon = e.lngLat.lng;
      if (!markable) return
      new mapboxgl.Marker()
        .setLngLat(e.lngLat)
        .addTo(map.current);

      setMarker(lon, lat)
    });
    map.current.addControl(Draw, "top-left");
    map.current.on('draw.create', updateArea)
    function updateArea() {
      const data = Draw.getAll();
      createArea(data.features[0].geometry!.coordinates!)
    }

    //const fetchedData = [[-71.10118713378904, 42.589570595259346],

    //[-71.21379699707059, 42.40326080910569],

    //[-70.98857727050813, 42.438742918061365],

    //[-70.9556182861327, 42.59664750638598],
    //[-71.10118713378904, 42.589570595259346]
    //]
    // Function to reshape the data into a GeoJSON polygon
    //function reshapeToGeoJSONPolygon(coordinates: number[][]) {
    // return {
    // type: 'Feature',
    //geometry: {
    //  type: 'Polygon',
    //  coordinates: [coordinates] // Wrap the coordinates in an array to form a polygon
    // }
    //};
    // }

    // Reshape the fetched data into a GeoJSON polygon
    //const geoJSONPolygon = reshapeToGeoJSONPolygon(fetchedData);

    // Now you can add the reshaped polygon to the map using MapboxDraw
    // Assuming `draw` is your MapboxDraw instance
    //Draw.add(geoJSONPolygon);
  }, [marker]);

  return (
    <>
      <Link to={"/admin"} className="fixed top-5 right-5 px-8 py-4 rounded z-50 bg-white border-2">Admin</Link>
      <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
    </>
  );
};

export default MapComponent;
