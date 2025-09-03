import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import products from '../../data/products.json'
import { currencyARS, shareLinks } from '../../lib/utils'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (products as any[]).map(p => ({ params: { id: (p as any).id } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const p = (products as any[]).find((x:any) => x.id === params?.id)
  return { props: { p } }
}

export default function Producto({ p }: any) {
  const share = shareLinks({ url: `https://tu-dominio.example/producto/${p.id}`, title: p.nombre })
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square relative bg-gray-100 rounded">
            <Image src={p.imagen} alt={p.nombre} fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">{p.nombre}</h1>
            <p className="text-gray-600 mt-2">{p.material} · {p.dimension}</p>
            <p className="text-2xl mt-4">{currencyARS(p.precio_ars)}</p>
            <p className="text-gray-700 mt-4">{p.descripcion}</p>
            <div className="flex gap-2 mt-6">
              <a className="btn" href={`https://wa.me/5493620000000?text=Consulta%20por%20${encodeURIComponent(p.nombre)}`} target="_blank" rel="noreferrer">Consultar</a>
              <a className="btn" href={share.whatsapp} target="_blank" rel="noreferrer">Compartir</a>
              <a className="btn" href={share.facebook} target="_blank" rel="noreferrer" aria-label="Compartir en Facebook">Fb</a>
              <a className="btn" href={share.x} target="_blank" rel="noreferrer" aria-label="Compartir en X">X</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
