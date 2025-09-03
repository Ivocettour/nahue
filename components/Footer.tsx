export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container py-8 text-sm text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} CTI Muebles</p>
        <div className="flex gap-3">
          <a className="underline" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="underline" href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          <a className="underline" href="https://wa.me/?text=Quiero%20consultar%20por%20muebles%20de%20CTI" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
