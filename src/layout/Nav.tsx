import { Link, useLocation } from 'wouter'
import { menu } from '../components/data'

const Nav = () => {
  const [location] = useLocation()

  const data = [
    {
      id: 1,
      title: 'El otro lado',
      url: '/programas/1/el-otro-lado'
    },
    {
      id: 2,
      title: 'El visitante',
      url: '/programas/2/el-visitante'
    }
  ]

  return (
    <nav
      className='hidden lg:block'
      id='menu'
    >
      <ul className='flex flex-col leading-6'>
        <li>
          <Link
            href={data[0].url}
            className='hover:underline'
          >
            <span>Programas</span>
          </Link>
          {location.split('/')[1] === 'programas' && (
            <ul className='pl-6 text-secondary'>
              {data.map((item, index) => (
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
