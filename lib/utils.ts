export function currencyARS(n: number) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n)
}

export function shareLinks({ url, title, text }: { url: string, title?: string, text?: string }) {
  const u = encodeURIComponent(url)
  const t = encodeURIComponent(text || title || 'Mirá esto')
  return {
    whatsapp: `https://wa.me/?text=${t}%20${u}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    x: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
  }
}
