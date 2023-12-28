import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '@/sanity/lib/api'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image | undefined) => {
  // Ensure that source image contains a valid reference
  if (!source?.asset?._ref) {
    return undefined
  }

  return imageBuilder?.image(source).auto('format').fit('max')
}

export function urlForOpenGraphImage(image: Image | undefined) {
  return urlForImage(image)?.width(1200).height(627).fit('crop').url()
}

export function resolveHref(documentType?: string, slug?: string): string {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'event':
      return slug ? `/events/${slug}` : undefined
    case 'position':
      return slug ? `/apply/${slug}` : undefined
    case 'team':
      return slug ? `/teams/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return '#'
  }
}
