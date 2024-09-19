import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'

interface Props {
  data: {
    id: number
    image: string
    title: string
  }[]
}

const Slider = ({ data }: Props) => {
  const sliderProperties = {
    autoplay: true,
    transitionDuration: 800,
    duration: 3500,
    indicators: false,
    arrows: false,
    infinite: true,
    pauseOnHover: false
  }

  return (
    <Fade {...sliderProperties}>
      {data.map(item => (
        <div
          key={item.id}
          className='w-full h-full flex flex-col gap-y-3'
        >
          <div className='w-full aspect-square lg:aspect-[7/5]'>
            <Image
              src={item.image}
              alt={item.title}
            />
          </div>
          <h2 className='text-secondary text-base px-8 lg:px-0'>{item.title}</h2>
        </div>
      ))}
    </Fade>
  )
}

export default Slider
