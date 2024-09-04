import { HeadProvider } from 'react-head'
import Layout from '../../layout/Layout'
import Image from '../../components/Image'

const index = () => {
  const data = [
    {
      id: 1,
      title: 'Fabián Poloseski, 1993',
      image:
        'https://images.pexels.com/photos/27574694/pexels-photo-27574694/free-photo-of-blanco-y-negro-paisaje-naturaleza-moda.jpeg?auto=compress&cs=tinysrgb&w=1200',
      text: 'Gustavo Fabián “Polo” Polosecki nació en Buenos Aires el 31 de julio de 1964. Fue el menor de tres hermanos varones. Hijo de Josué Polosecki y Aída Prizant. De familia judía, inmigrantes polacos, su padre heredó el negocio de la impresión, encuadernación y gráﬁca por parte de su abuelo. Esto, sumado a una histórica identiﬁcación con el Partido Comunista, le dio a “Polo” una infancia rodeado de libros y discusiones políticas en donde, ya más crecido, se atrevió a intervenir. Pasó por varios colegios, nunca se destacó como alumno y, cuentan sus familiares, siempre tuvo una actitud rebelde. En el libro Polo, el buscador (Editorial Sudestada), la excelente biografía escrita por Hugo Montero e Ignacio Portela,  describen al Polito adolescente criado en el barrio de La Paternal: “Observador,  extrovertido, audaz, nada vergonzoso, siempre con una sonrisa dibujada en el  rostro, quería imitar a sus hermanos y era el obligado lastre que los seguía a...'
    }
  ]
  return (
    <Layout>
      <section className='flex flex-col gap-y-12 max-w-3xl'>
        <div className='lg:pr-16'>
          <Image
            src={data[0].image}
            alt={data[0].title}
          />
        </div>
        <p className='text-secondary leading-6'>{data[0].text}</p>
      </section>

      <HeadProvider>
        <title>Fabián Polosecki Biografía</title>
      </HeadProvider>
    </Layout>
  )
}

export default index
