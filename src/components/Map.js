import React from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


const MyPosition = ({ text }) => (
<div className="pin">
    <FontAwesomeIcon icon={faLocationDot} bounce />
    <p className="pin-text">{text}</p>
</div>);


export default function SimpleMap(){
    const defaultProps = {
      center: {
        lat: 16.841175,
        lng: -5.257163
      },
      zoom: 20,
    };    //   address : "Voilà où j'étais lorsque je faisais ce checkpoint"

  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '85%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAmbx062nZ4rJvkhcg1GvKzo1rokb_Ub80" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <MyPosition
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="Voilà où j'étais lorsque je faisais ce checkpoint"
          />
        </GoogleMapReact>
      </div>
    );
  }