import Image from 'next/image'
import Link from 'next/link'
import { currencyARS, shareLinks } from '../lib/utils'

type Product = {
  id: string
  nombre: string
  precio_ars: number
  imagen: string
  categoria: string
  material: string
  dimension: string
  descripcion: string
}

export default function ProductCard({ p }: { p: Product }) {
  const share = shareLinks({
    url: `https://tu-dominio.example/producto/${p.id}`,
    title: p.nombre,
    text: `${p.nombre} — ${currencyARS(p.precio_ars)}`
  })
  return (
    <article className="card">
      <div className="aspect-[4/3] bg-gray-100 rounded mb-3 overflow-hidden relative">
        <Image src={p.imagen} alt={p.nombre} fill className="object-cover" />
      </div>
      <h3 className="text-lg font-medium">{p.nombre}</h3>
      <p className="price mt-1">{currencyARS(p.precio_ars)}</p>
      <p className="text-sm text-gray-600 mt-2">{p.descripcion}</p>
      <div className="flex gap-2 mt-4">
        <Link href={`/producto/${p.id}`} className="btn">Ver detalle</Link>
        <a className="btn" href={share.whatsapp} target="_blank" rel="noreferrer">Compartir</a>
      </div>
    </article>
  )
}
