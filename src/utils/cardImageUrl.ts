export function cardImageUrl(src: string) {
  if (!src.startsWith('https://images.prismic.io/')) return src;

  const url = new URL(src);
  url.searchParams.set('w', '900');
  url.searchParams.delete('h');

  return url.toString();
}
