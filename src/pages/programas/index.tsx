import { HeadProvider } from 'react-head'
import Layout from '../../layout/Layout'
import Episodios from './ListadoEpisodios'

const index = () => {
  const data = [
    {
      id: 1,
      title: 'El otro lado',
      text: '«El otro lado» fue un ciclo periodístico-documental creado por Fabián Polosecki. Bajo una estética de autor que mixturaba el registro documental y ﬁccional, cada  envío hurgaba y retrataba temas y personajes marginalizados por la sociedad. El programa fue emitido semanalmente por ATC entre los años 1993 y 1994.',
      data: `Duración: 1 semana  
Cantidad de programas: 1 
Género: Documental 
Dirección: ATC 
Guión: ATC 
Fotografía: ATC 
Cámara: ATC      
Edición: ATC 
Sonido: ATC `,
      data2: `Producción: ATC 
Investigación: ATC 
Conducción: ATC 
Compañías productoras: ATC 
Canal de emisión: ATC`
    }
  ]

  return (
    <Layout>
      <section className='flex flex-col gap-y-12 '>
        <div className='flex flex-col gap-y-4 max-w-3xl'>
          <h1 className='text-secondary'>{data[0].title}</h1>
          <p className='leading-6'>{data[0].text}</p>
        </div>
        <div className='flex flex-col gap-y-4 max-w-3xl text-sm'>
          <h2 className='text-secondary'>Ficha técnica</h2>
          <div className='grid grid-cols-2 gap-x-3'>
            <div className='whitespace-pre-wrap'>{data[0].data}</div>
            <div className='whitespace-pre-wrap'>{data[0].data2}</div>
          </div>
        </div>

        <Episodios />
      </section>

      <HeadProvider>
        <title>Fabián Polosecki {data[0].title}</title>
      </HeadProvider>
    </Layout>
  )
}

export default index
