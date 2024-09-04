import { Link, useLocation } from 'wouter'
import { HeadProvider } from 'react-head'
import Layout from '../../layout/Layout'
import ReactPlayer from 'react-player'

const Index = () => {
  const [location] = useLocation()
  const backUrl = location.split('/').slice(0, -2).join('/')

  const data = [
    {
      id: 1,
      title: '#3 Nuestro otro lado',
      video: 'https://youtu.be/pCUbo_5Zoxk?si=ikCQC3R0n-FlJ2v9',
      text: 'Gustavo Fabián “Polo” Polosecki nació en Buenos Aires el 31 de julio de 1964. Fue el menor de tres hermanos varones. Hijo de Josué Polosecki y Aída Prizant. De familia judía, inmigrantes polacos, su padre heredó el negocio de la impresión, encuadernación y gráﬁca por parte de su abuelo. Esto, sumado a una histórica identiﬁcación con el Partido Comunista, le dio a “Polo” una infancia rodeado de libros y discusiones políticas en donde, ya más crecido, se atrevió.'
    }
  ]
  return (
    <Layout>
      <section className='flex flex-col gap-y-6 max-w-3xl'>
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
      </section>

      <HeadProvider>
        <title>Fabián Polosecki Episodio {data[0].title}</title>
      </HeadProvider>
    </Layout>
  )
}

export default Index
