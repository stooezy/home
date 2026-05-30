type SeoInput = {
  title: string
  description?: string
  image?: string
  keywords?: string
  twitter?: string
  siteName?: string
}

export const seo = ({
  title,
  description,
  keywords,
  image,
  twitter,
  siteName = 'Yoga Permana',
}: SeoInput) => {
  const tags: Array<{ title?: string; name?: string; content?: string }> = [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: siteName },
    ...(twitter
      ? [
          { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:creator', content: twitter },
          { name: 'twitter:site', content: twitter },
          ...(image ? [{ name: 'twitter:image', content: image }] : []),
        ]
      : []),
    ...(image ? [{ name: 'og:image', content: image }] : []),
  ]

  return tags.filter((tag) => {
    const value = 'title' in tag ? tag.title : tag.content
    return value !== undefined && value !== null && value !== ''
  })
}
