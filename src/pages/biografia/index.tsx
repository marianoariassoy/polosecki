import { HeadProvider } from 'react-head'
import Layout from '../../layout/Layout'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'

interface Data {
  id: number
  title: string
  image: string
  text: string
}
interface Props {
  data: Data[]
  loading: boolean
}

const Index = () => {
  const { data, loading } = useFetch(`/biografia`) as Props

  return (
    <Layout>
      {loading ? (
        <div className='px-8 lg:px-0'>
          <BeatLoader />
        </div>
      ) : (
        data.map(data => (
          <section
            className='flex flex-col gap-y-12 max-w-3xl mb-6'
            key={data.id}
          >
            <div className='lg:pr-16'>
              <Image
                src={data.image}
                alt={data.title}
              />
            </div>
            <p className='text-secondary leading-6 px-8 lg:px-0'>{data.text}</p>
          </section>
        ))
      )}

      <HeadProvider>
        <title>Fabián Polosecki Biografía</title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
