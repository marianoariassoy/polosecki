import { HeadProvider } from 'react-head'
import Layout from '../../layout/Layout'

const index = () => {
  return (
    <Layout>
      <section className='flex flex-col gap-y-4 max-w-3xl px-8 lg:px-0'>
        <h1 className='text-secondary'>Contacto</h1>
        <div>
          Para consultas o solicitudes de autorización de uso, por favor comunicarse vía mail a{' '}
          <a
            href='mailto:info@archivopolosecki.com'
            className='text-secondary hover:underline'
          >
            info@archivopolosecki.com
          </a>
        </div>
      </section>

      <HeadProvider>
        <title>Fabián Polosecki Contacto</title>
      </HeadProvider>
    </Layout>
  )
}

export default index
