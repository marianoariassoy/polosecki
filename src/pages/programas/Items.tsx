import Image from '../../components/Image'
import { Link } from 'wouter'
interface Props {
  data: {
    id: number
    title: string
    image: string
  }
  location: string
}

const Items = ({ data }: Props) => {
  return (
    <article className='text-secondary flex flex-col gap-y-3'>
      <div className='relative aspect-square lg:aspect-video'>
        <Link
          to={`${location}/episodio/${data.id}`}
          className='absolute z-10 top-0 left-0 w-full h-full hover:backdrop-blur transition-all'
        ></Link>
        <Image
          src={data.image}
          alt={data.title}
        />
      </div>
      <h1 className='text-medium'>{data.title}</h1>
    </article>
  )
}

export default Items
