import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container py-10">
        <section className="mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Catálogo de muebles</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">Diseño moderno y minimalista con precios claros. Elegí tu pieza favorita y compartila en redes.</p>
        </section>

        <section id="catalogo" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => <ProductCard key={(p as any).id} p={p as any} />)}
        </section>

        <section id="contacto" className="mt-16">
          <h2 className="text-xl font-medium">Contacto</h2>
          <p className="text-gray-600 mt-2">Escribinos por WhatsApp para cotizaciones personalizadas, tiempos de entrega y opciones de envío.</p>
          <a className="btn mt-4 inline-block" href="https://wa.me/5493620000000?text=Hola%20CTI%20Muebles%2C%20quiero%20consultar" target="_blank" rel="noreferrer">WhatsApp</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}
