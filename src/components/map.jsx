export default function Map() {
  return (
    <div className='h-full w-full'>
      <iframe
        className='h-full w-full border-0'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63356.60241880392!2d79.8612433!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2598aec969b62%3A0x7af68d3b82447400!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1738480000000!5m2!1sen!2slk'
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='Google Map view of Colombo, Sri Lanka'
      />
    </div>
  )
}
