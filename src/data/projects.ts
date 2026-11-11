export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  subtitle?: string;
  year: string;
  image: string;
  alt: string;
  description?: string;
  slug: string;
  images?: ProjectImage[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Baldrsdatter',
    subtitle: 'Baldrsdatter',
    year: '2018',
    image:
      'https://images.prismic.io/madeleinedalla/5ac5a31d-f00b-4360-8708-46956f60caf4_baldrsdatter_01.jpg?auto=compress,format&w=900',
    alt: 'Person in profile wearing white-framed sunglasses and a white fur collar against a rust-red background',
    slug: 'baldrsdatter',
    featured: true,
    images: [
      {        src: 'https://images.prismic.io/madeleinedalla/abc07960-4a14-4138-9fd9-04cf3855727f_baldrsdatter_02.jpg?auto=compress,format&rect=0,0,1999,2452&w=600&h=736',
        alt: 'Person seated in a white coat and white-framed sunglasses against an orange background',
      },
      {
        src: 'https://images.prismic.io/madeleinedalla/8b6e92f8-be60-496d-9aa3-7da62a4c10f5_baldrsdatter_04.jpg?auto=compress,format&rect=0,0,2000,2450&w=600&h=735',
        alt: 'Person in a white coat and white-framed sunglasses reaching both gloved hands toward the camera against an orange background',
      },
      {
        src: 'https://images.prismic.io/madeleinedalla/03d9600c-3919-414c-810a-9099f55fcd16_baldrsdatter_08.jpg?auto=compress,format&rect=0,0,2000,2452&w=1200&h=1471',
        alt: 'Person standing very close',
      },
    ],
  },
  {
    title: 'Q',
    subtitle: 'Milk',
    year: '2019',
    image:
      'https://images.prismic.io/madeleinedalla/ZeeVIP_jD4D4xSOT_MadeleineDalla_Q.jpg?auto=compress,format&w=900',
    alt: 'Person seen from behind with short blond hair and a chain necklace against a green background',
    slug: 'q-milk',
    featured: true,
  },
  {
    title: 'Bas x MILK',
    subtitle: 'Dreamville',
    year: '2019',
    image:
      'https://images.prismic.io/madeleinedalla/f070e39f-50a6-4cf1-a285-452aa8668240_bas_07.jpg?auto=compress,format&w=900',
    alt: 'Portrait of a bearded person looking toward the camera, lit in orange against a pale blue background',
    slug: 'bas-milk',
    featured: true,
  },
  {
    title: 'Lost in Anxiety',
    subtitle: 'Toxic Magazine',
    year: '2016',
    image:
      'https://images.prismic.io/madeleinedalla/de942e09-a4fe-4873-ae3a-108217cdd0a3_lost_in_anxiety_04.jpg?auto=compress,format&w=900',
    alt: 'Close-up of a person with their head lowered behind translucent material in blue lighting',
    slug: 'lost-in-anxiety',
    featured: true,
  },
  {
    title: 'Beneath the Surface',
    subtitle: 'Personal Indulgence of Tenderness',
    year: '2017',
    image:
      'https://images.prismic.io/madeleinedalla/2f9e9cca-408f-42b3-b26f-22866c3e9116_beneath_the_surface_06.jpg?auto=compress,format&w=900',
    alt: 'Person wearing orange patterned trousers, bending forward against a turquoise background',
    slug: 'beneath-the-surface',
    featured: true,
  },

  {
    title: 'Lucky Daye',
    subtitle: 'Sony Music',
    year: '2019',
    slug: 'lucky-daye',
    image:
      'https://images.prismic.io/madeleinedalla/Ze0x6XUurf2G3Omk_000048080008-Edit-MadeleineDalla_LuckyDaye-5.jpg?auto=format%2Ccompress&rect=0%2C0%2C1632%2C2000&w=1920&h=2353',
    alt: 'Person looking down, wearing an orange collared jacket against a pink background',
  },
  {
    title: 'The Silent Fairy Tale',
    subtitle: 'Personal',
    year: '2019',
    slug: 'the-silent-fairy-tale',
    image:
      'https://images.prismic.io/madeleinedalla/Ze0tWnUurf2G3OmU_000093440001-Edit-Edit-MadeleineDalla_Nyadhuor-8.jpg?auto=format%2Ccompress&rect=0%2C0%2C1632%2C2000&w=1920&h=2353',
    alt: 'Close-up portrait of a person with silver eye makeup and pearl hair accessories against a grey background',
  },
  {
    title: 'Sunni Colón',
    subtitle: 'Milk',
    year: '2019',
    slug: 'sunni-collon',
    image:
      'https://images.prismic.io/madeleinedalla/8931dac6-600d-404b-aa02-b72673b74fac_sunni_colon_01.jpg?auto=compress,format&rect=0,0,2000,2452&w=1920&h=2354',
    alt: 'Portrait of a person looking to the left, wearing layered necklaces and a translucent garment over one shoulder against a grey background',
  },
  {
    title: 'The Fader',
    subtitle: 'Tayla Parks',
    year: '2019',
    slug: 'the-fader',
    image:
      'https://images.prismic.io/madeleinedalla/b2a95b8f-ee6b-4f7c-b3c8-8654902c8ab4_the_fader_02.jpg?auto=compress,format&rect=0,0,979,1200&w=1920&h=2353',
    alt: 'Person with pink wavy hair and clear-framed glasses, wearing a multicoloured top among large pale leaves',
  },
  {
    title: 'Into the White',
    subtitle: 'Personal',
    year: '2016',
    slug: 'into-the-white',
    image:
      'https://images.prismic.io/madeleinedalla/ZeeQpv_jD4D4xSNX_10-Edit-MadeleineDalla_IntoTheWhite_Copy-7.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C2000&w=1920&h=2400',
    alt: 'Low-angle portrait of a person wearing a cropped pinstriped jacket and checked trousers against white walls',
  },
  {
    title: 'Longing',
    subtitle: 'Personal',
    year: '2016',
    slug: 'longing',
    image:
      'https://images.prismic.io/madeleinedalla/ZeeOdP_jD4D4xSM5_3E0A0460-Edit-2-Edit-MadeleineDalla_AltonMason_Copy-7.jpg?auto=format%2Ccompress&rect=0%2C0%2C1600%2C2000&w=1920&h=2400',
    alt: 'Black-and-white photograph of a shirtless man in wide-legged trousers, leaning back on a white plinth',
  },
  {
    title: 'Hodo ft Lil Nas X',
    subtitle: 'Milk',
    year: '2020',
    slug: 'hodo-ft-lil-nas-x',
    image:
      'https://images.prismic.io/madeleinedalla/33554df4-1a25-4197-99fb-4aa1e31d8156_01_Thumbnail.jpg?auto=compress,format&rect=0,0,816,1000&w=1920&h=2353',
    alt: 'Close-up portrait of a person wearing a cross earring, with a red-and-white patterned glove held against their cheek',
  },
  {
    title: 'Double Exposure',
    subtitle: 'The Forumist',
    year: '2022',
    slug: 'the-forumist-l',
    image:
      'https://images.prismic.io/madeleinedalla/b50610cd-85b8-4af3-b9ee-106d0acc0c26_70880002-Edit.jpg?auto=compress,format&rect=0,0,816,1000&w=1920&h=2353',
    alt: 'Two people posing against a pink background, one wearing a black-and-white patterned hood and the other a white furry hat',
  },
  {
    title: 'The Arrival',
    subtitle: 'Schon Magazine',
    year: '2020',
    slug: 'schon-magazine',
    image:
      'https://images.prismic.io/madeleinedalla/cdbc54db-97da-4a23-b82d-d6d159befdc5_MadeleineDalla_SchonMag8.jpg?auto=compress,format&rect=0,0,1596,2000&w=1920&h=2406',
    alt: 'Person wearing a sculptural blue garment with wide curved tiers against a textured blue background',
  },
];
