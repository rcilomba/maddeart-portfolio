export type Project = {
  title: string;
  year: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    title: 'Baldrsdatter',
    year: '2024',
    image:
      'https://images.prismic.io/madeleinedalla/5ac5a31d-f00b-4360-8708-46956f60caf4_baldrsdatter_01.jpg?auto=compress,format&w=900',
    alt: 'Woman wearing a white coat and white-framed sunglasses',
  },
  {
    title: 'Q',
    year: '2024',
    image:
      'https://images.prismic.io/madeleinedalla/ZeeVIP_jD4D4xSOT_MadeleineDalla_Q.jpg?auto=compress,format&w=900',
    alt: 'Man standing with his back to the camera',
  },
  {
    title: 'Bas x MILK',
    year: '2023',
    image:
      'https://images.prismic.io/madeleinedalla/f070e39f-50a6-4cf1-a285-452aa8668240_bas_07.jpg?auto=compress,format&w=900',
    alt: 'Man facing the camera',
  },
];
