// Serves a markdown counterpart of a page when the request's Accept header
// asks for text/markdown, so agents that prefer markdown over scraped HTML
// get clean structured content. Markdown files are generated at build time
// by scripts/generate-markdown.mjs.
const ROUTE_TO_MARKDOWN_FILE = {
  '/': '/index.md',
  '/experience': '/experience.md',
  '/education': '/education.md',
  '/photography': '/photography.md',
  '/music': '/music.md',
  '/contact': '/contact.md',
}

export default async (request, context) => {
  const accept = request.headers.get('accept') || ''
  if (!accept.includes('text/markdown')) {
    return context.next()
  }

  const url = new URL(request.url)
  const markdownFile = ROUTE_TO_MARKDOWN_FILE[url.pathname]
  if (!markdownFile) {
    return context.next()
  }

  const markdownUrl = new URL(markdownFile, url.origin)
  const response = await fetch(markdownUrl)
  if (!response.ok) {
    return context.next()
  }

  const body = await response.text()
  return new Response(body, {
    status: 200,
    headers: { 'content-type': 'text/markdown; charset=utf-8' },
  })
}

export const config = {
  path: ['/', '/experience', '/education', '/photography', '/music', '/contact'],
}
