'use client'
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  Pin,
} from '@vis.gl/react-google-maps'
import React, { useState } from 'react'
const CampusNav = () => {
  const position = { lat: 13.183221955047566, lng: 74.9339889962557 }
  const apj = { lat: 13.183373671334712, lng: 74.93341687796102 }
  const apjUp = { lat: 13.1834, lng: 74.93341687796102 }

  const [open, setOpen] = useState(false)
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY!}>
      <section className="h-screen flex items-center justify-center bg-yellow-500 pt-20">
        <div className="w-full h-full z-50">
          <Map
            styles={[
              {
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#212121',
                  },
                ],
              },
              {
                elementType: 'labels.icon',
                stylers: [
                  {
                    visibility: 'off',
                  },
                ],
              },
              {
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                elementType: 'labels.text.stroke',
                stylers: [
                  {
                    color: '#212121',
                  },
                ],
              },
              {
                featureType: 'administrative',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                featureType: 'administrative.country',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#9e9e9e',
                  },
                ],
              },
              {
                featureType: 'administrative.land_parcel',
                stylers: [
                  {
                    visibility: 'off',
                  },
                ],
              },
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#bdbdbd',
                  },
                ],
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#181818',
                  },
                ],
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#616161',
                  },
                ],
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.stroke',
                stylers: [
                  {
                    color: '#1b1b1b',
                  },
                ],
              },
              {
                featureType: 'road',
                elementType: 'geometry.fill',
                stylers: [
                  {
                    color: '#2c2c2c',
                  },
                ],
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#8a8a8a',
                  },
                ],
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#373737',
                  },
                ],
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#3c3c3c',
                  },
                ],
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#4e4e4e',
                  },
                ],
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#616161',
                  },
                ],
              },
              {
                featureType: 'transit',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#757575',
                  },
                ],
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#000000',
                  },
                ],
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                  {
                    color: '#3d3d3d',
                  },
                ],
              },
            ]}
            mapId={process.env.NEXT_PUBLIC_MAPS_ID!}
            defaultCenter={position}
            defaultZoom={20}
          >
            <AdvancedMarker position={apj} onClick={() => setOpen(true)}>
              <Pin
                background={'gray'}
                borderColor={'red'}
                glyphColor={'yellow'}
                scale={1.5}
              >
                APJ
              </Pin>
            </AdvancedMarker>
            {open && (
              <InfoWindow position={apjUp} onCloseClick={() => setOpen(false)}>
                <p>
                  You can walk from the main bus stand towards the building from
                  the narrow bridge
                </p>
              </InfoWindow>
            )}
          </Map>
        </div>
        {/* <h2 className="w-full font-bold text-center sm:text-8xl text-2xl">
          Soon...
        </h2> */}
      </section>
    </APIProvider>
  )
}

export default CampusNav
