import { HeadProvider } from 'react-head'
import Layout from '../../layout/Layout'
import Image from '../../components/Image'

const index = () => {
  const data = [
    {
      id: 1,
      title: 'Fabián Poloseski, 1993',
      image:
        'https://images.pexels.com/photos/27574694/pexels-photo-27574694/free-photo-of-blanco-y-negro-paisaje-naturaleza-moda.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ]
  return (
    <Layout>
      <section className='flex flex-col gap-y-4 max-w-4xl'>
        <div className='lg:aspect-[6/4] overflow-hidden'>
          <Image
            src={data[0].image}
            alt={data[0].title}
          />
        </div>
        <h2 className='text-secondary text-sm'>{data[0].title}</h2>
      </section>

      <HeadProvider>
        <title>Archivo Fabián Polosecki</title>
      </HeadProvider>
    </Layout>
  )
}

export default index
