import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'
import useFetch from '../hooks/useFetch'

interface Data {
  id: number
  title: string
  url: string
}
interface Props {
  data: Data[]
  loading: boolean
}

const Nav = () => {
  const [location] = useLocation()
  const { data, loading } = useFetch(`/programas`) as Props

  return (
    <nav
      className='hidden lg:block'
      id='menu'
    >
      <ul className='flex flex-col leading-6'>
        <li>
          <Link
            href='/programas'
            className='hover:underline'
          >
            <span>Programas</span>
          </Link>
          {location.split('/')[1] === 'programas' && (
            <ul className='pl-6 text-secondary'>
              {!loading &&
                data.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className={`${
                        +location.split('/')[2] === item.id ? 'text-secondary underline' : 'hover:underline'
                      }`}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </li>

        {menu.slice(1).map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className={`${location === item.url ? 'text-secondary underline' : 'hover:underline'}`}
            >
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
