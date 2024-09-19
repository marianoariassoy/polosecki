import { Link, useLocation, useParams } from 'wouter'
import { HeadProvider } from 'react-head'
import Layout from '../../layout/Layout'
import ReactPlayer from 'react-player'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

interface Data {
  id: number
  title: string
  text: string
  video: string
}
interface Props {
  data: Data[]
  loading: boolean
}

const Index = () => {
  const [location] = useLocation()
  const backUrl = location.split('/').slice(0, -2).join('/')
  const { ide } = useParams()
  const { data, loading } = useFetch(`/episodio/${ide}`) as Props

  return (
    <Layout>
      {loading ? (
        <div className='px-8 lg:px-0'>
          <BeatLoader />
        </div>
      ) : (
        <section className='flex flex-col gap-y-6 max-w-3xl px-8 lg:px-0'>
          <Link
            href={backUrl}
            className='text-sm hover:underline text-secondary'
          >
            {'<'} Volver
          </Link>

          <h1 className='text-secondary leading-6'>{data[0].title}</h1>
          <p className='leading-6 mb-6'>{data[0].text}</p>
          <ReactPlayer
            url={data[0].video}
            width='100%'
            height='100%'
            style={{ aspectRatio: '16/9' }}
          />
          <HeadProvider>
            <title>Fabián Polosecki Episodio {data[0].title}</title>
          </HeadProvider>
        </section>
      )}
    </Layout>
  )
}

export default Index
