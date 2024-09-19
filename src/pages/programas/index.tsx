import { HeadProvider } from 'react-head'
import { useParams } from 'wouter'
import Layout from '../../layout/Layout'
import Episodios from './ListadoEpisodios'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

interface Props {
  data: {
    id: number
    title: string
    text: string
    data: string
    data2: string
  }
  loading: boolean
}

const Index = () => {
  const { id } = useParams()
  const { data, loading } = useFetch(`/programas/${id}`) as Props

  return (
    <Layout>
      {loading ? (
        <div className='px-8 lg:px-0'>
          <BeatLoader />
        </div>
      ) : (
        <section className='flex flex-col gap-y-12 px-8 lg:px-0'>
          <div className='flex flex-col gap-y-4 max-w-3xl'>
            <h1 className='text-secondary'>{data.title}</h1>
            <p className='leading-6'>{data.text}</p>
          </div>
          <div className='flex flex-col gap-y-4 max-w-3xl text-sm'>
            <h2 className='text-secondary'>Ficha técnica</h2>
            <div className='grid grid-cols-2 gap-x-3'>
              <div className='whitespace-pre-wrap'>{data.data}</div>
              <div className='whitespace-pre-wrap'>{data.data2}</div>
            </div>
          </div>

          <Episodios id={data.id} />

          <HeadProvider>
            <title>Fabián Polosecki {data.title}</title>
          </HeadProvider>
        </section>
      )}
    </Layout>
  )
}

export default Index
