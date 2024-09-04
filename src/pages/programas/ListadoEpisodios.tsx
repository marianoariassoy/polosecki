import { useLocation } from 'wouter'
import Items from './Items'

const Episodios = () => {
  const [location] = useLocation()

  const data = [
    {
      id: 1,
      title: '#1 - El otro lado',
      image:
        'https://images.pexels.com/photos/27574694/pexels-photo-27574694/free-photo-of-blanco-y-negro-paisaje-naturaleza-moda.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: '#2 - El otro lado',
      image:
        'https://images.pexels.com/photos/27574694/pexels-photo-27574694/free-photo-of-blanco-y-negro-paisaje-naturaleza-moda.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: '#3 - El otro lado',
      image:
        'https://images.pexels.com/photos/27574694/pexels-photo-27574694/free-photo-of-blanco-y-negro-paisaje-naturaleza-moda.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: '#4 - El otro lado',
      image:
        'https://images.pexels.com/photos/27574694/pexels-photo-27574694/free-photo-of-blanco-y-negro-paisaje-naturaleza-moda.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <div className='flex flex-col gap-y-6 max-w-4xl'>
      <h1 className='text-secondary'>Episodios</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12'>
        {data.map(item => (
          <Items
            key={item.id}
            data={item}
            location={location}
          />
        ))}
      </div>
    </div>
  )
}

export default Episodios
