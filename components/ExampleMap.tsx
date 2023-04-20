import { Marker } from "react-map-gl";
import { Map } from "react-map-gl";

interface Props {}

const ExampleMap = ({}: Props) => {



  return (
    <div className="">
      <div className="h-[500px] w-[500px] rounded-md">
        <Map
          mapboxAccessToken="Your mapbox token"
          initialViewState={{
            longitude: -70.9,
            latitude: 42.5,
            zoom: 8,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11">

          <Marker longitude={-70.9} latitude={42.35} />
          <Marker longitude={-71.3} latitude={42.35} />
          <Marker longitude={-70.5} latitude={42.35} />

          <Marker longitude={-70.9} latitude={42.9} />
          <Marker longitude={-71.3} latitude={42.9} />
          <Marker longitude={-70.5} latitude={42.9} />
            
        </Map>
      </div>
    </div>
  );
};

export default ExampleMap;
