import { HeadProvider } from 'react-head'
import Layout from '../../layout/Layout'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import Slider from './Slider'

interface Data {
  id: number
  title: string
  image: string
}
interface Props {
  data: Data[]
  loading: boolean
}

const Index = () => {
  const { data, loading } = useFetch(`/portada`) as Props

  return (
    <Layout>
      <section className='w-screen max-w-4xl'>
        {loading ? (
          <div className='px-8 lg:px-0'>
            <BeatLoader />
          </div>
        ) : (
          <Slider data={data} />
        )}
      </section>
      <HeadProvider>
        <title>Archivo Fabián Polosecki</title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
