import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-xl">CTI Muebles</Link>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <Link href="/#catalogo" className="hover:text-black">Catálogo</Link>
          <Link href="/#contacto" className="hover:text-black">Contacto</Link>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-black">Instagram</a>
        </nav>
      </div>
    </header>
  )
}
