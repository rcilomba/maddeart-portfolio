export function cardImageUrl(src: string, width = 900) {
  if (!src.startsWith('https://images.prismic.io/')) return src;

  const url = new URL(src);
  url.searchParams.set('w', String(width));
  url.searchParams.delete('h');

  return url.toString();
}
