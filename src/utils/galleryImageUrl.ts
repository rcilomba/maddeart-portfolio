export function galleryImageUrl(src: string, width = 1600) {
  if (!src.startsWith('https://images.prismic.io/')) return src;

  const url = new URL(src);
  url.searchParams.delete('h');
  url.searchParams.set('w', String(width));

  return url.toString();
}
