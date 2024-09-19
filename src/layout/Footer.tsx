import mecenazgo from '../assets/mecenazgo.svg'

const Footer = () => {
  return (
    <footer className='flex lg:fixed bottom-0 left-0 px-8 py-12 flex-col items-start gap-y-2 text-sm'>
      <span className='font-light text-secondary'>Con el apoyo de</span>

      <img
        src={mecenazgo}
        alt='Mecenazgo BA'
        className='w-32 mb-1'
      />

      <hr className='w-12 border-secondary' />

      <div className='flex flex-col font-normal leading-4 text-xs'>
        <span>Nucleo Audiovisual</span>
        <span>Buenos Aires</span>
      </div>
    </footer>
  )
}

export default Footer
