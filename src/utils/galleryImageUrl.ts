export function galleryImageUrl(src: string) {
  if (!src.startsWith('https://images.prismic.io/')) return src;

  const url = new URL(src);
  url.searchParams.set('w', '1600');
  url.searchParams.delete('h');

  return url.toString();
}
