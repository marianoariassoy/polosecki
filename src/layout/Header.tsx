import { Link } from 'wouter'
import Nav from './Nav'
import Bars from './Bars'

const Header = () => {
  return (
    <header className='sticky lg:fixed bg-white top-0 z-50 pb-4 pt-16 lg:pb-16 px-8'>
      <div className='relative flex flex-col gap-y-12'>
        <Link href='/'>
          <div className='flex flex-col leading-6 text-secondary hover:underline'>
            <span>Archivo</span>
            <span>Fabián Polosecki</span>
          </div>
        </Link>

        <Nav />

        <Bars />
      </div>
    </header>
  )
}

export default Header
