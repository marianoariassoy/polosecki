import mecenazgo from '../assets/mecenazgo.png'

const Footer = () => {
  return (
    <footer className='flex lg:fixed bottom-0 left-0 px-8 py-12 flex-col items-start gap-y-2 text-sm'>
      <span className='font-light text-secondary'>Con el apoyo de</span>

      <img
        src={mecenazgo}
        alt='mecenazgo'
      />

      <hr className='w-12 border-secondary' />

      <div className='flex flex-col font-normal'>
        <span>Nucleo Audiovisual</span>
        <span>Buenos Aires</span>
      </div>
    </footer>
  )
}

export default Footer
