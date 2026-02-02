import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  return (
    <div className='h-full w-full relative z-0'>
      <MapContainer
        center={[6.9270786, 79.8612433]}
        zoom={13}
        className='h-full w-full'
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  )
}
