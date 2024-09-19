import { useLocation } from 'wouter'
import Items from './Items'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

interface Data {
  id: number
  title: string
  image: string
}
interface Props {
  data: Data[]
  loading: boolean
}

const Episodios = ({ id }: { id: number }) => {
  const [location] = useLocation()
  const { data, loading } = useFetch(`/episodios-listado/${id}`) as Props

  if (loading) return <BeatLoader />

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
