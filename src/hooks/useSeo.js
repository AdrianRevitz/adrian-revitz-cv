import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoByRoute, SITE_URL } from '../data/seo.js'

function setMeta(attr, key, value) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', value)
}

export function useSeo(lang) {
  const location = useLocation()

  useEffect(() => {
    const table = seoByRoute[lang] || seoByRoute.en
    const meta = table[location.pathname] || table['/']
    const canonicalUrl = `${SITE_URL}${location.pathname}`

    document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    document.documentElement.setAttribute('lang', lang)
  }, [location.pathname, lang])
}
