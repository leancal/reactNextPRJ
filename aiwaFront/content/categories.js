

export const lvOneCat = [
  {
    name: 'Audio',
    id: 1,
    route: '/categorias/audio'
  },
  {
    name: 'Headsets',
    id: 5,
    route: '/categorias/headsets'
  },
  {
    name: 'Informática',
    id: 2,
    route: '/categorias/informatica'
  },
  {
    name: 'Cooks',
    desc: '',
    id: 6,
    route: '/categorias/cook',
    cover: '/images/categories/cover/yogurtera.png',
    img: '/images/categories/banner/BANNER_AIWA-COOK.png',
  },
  {
    name: 'Discontinuos',
    id: 4,
    hidden: true,
    route: '/categorias/discontinuos'
  }
]
/* Los ID de las categorías de 2º nivel comienzan en 101 */
export const lvTwoCat = [
  {
    name: 'Parlantes',
    desc: 'Productos preparados para los más variados usos, pero todos con la misma calidad.',
    id: 101,
    parent: 1,
    parentCategoryId: 1,
    route: '/categorias/parlantes',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Torres de sonido',
    desc: 'Productos portátiles, potentes y de diseño cómodo',
    id: 102,
    parent: 1,
    parentCategoryId: 1,
    route: '/categorias/torres-de-sonido',
    hidden: false,
    cover: '/images/categories/cover/torres.png',
    img: '/images/categories/banner/torres.jpg',
    categoryBannerTextPos: ['top', 'left'],
  },
  {
    name: 'Auriculares In‑ear',
    desc: 'Cancelación de ruido y la mejor calidad de sonido.',
    id: 103,
    parent: 5,
    parentCategoryId: 5,
    route: '/categorias/in-ear',
    hidden: false,
    cover: '/images/categories/cover/inear.png',
    img: '/images/categories/banner/inear.jpg',
    noTextOnCategoryBanner: true,
  },
  {
    name: 'Auriculares On‑ear',
    desc: 'Diseño clásico. Disfrutá tu música donde sea y como sea.',
    id: 104,
    parent: 5,
    parentCategoryId: 5,
    route: '/categorias/on-ear',
    hidden: false,
    cover: '/images/categories/cover/onear.png',
    img: '/images/categories/banner/onear.jpg',
    categoryBannerTextPos: ['center', 'right'],
  },
  {
    name: 'Tablets',
    desc: 'Películas, libros, series, música y más en un sólo dispositivo.',
    id: 106,
    parent: 2,
    parentCategoryId: 2,
    route: '/categorias/tablets',
    hidden: false,
    cover: '/images/categories/cover/tablets.png',
    img: '/images/categories/banner/tablets.jpg',
  },
  {
    name: 'Notebooks',
    desc: "Trabajar desde cualquier sitio ahora es más fácil.",
    id: 107,
    parent: 2,
    parentCategoryId: 2,
    route: '/categorias/notebooks',
    hidden: false,
    cover: '/images/categories/cover/notebooks.png',
    img: '/images/categories/banner/notebooks.jpg',
  },
  {
    name: 'Discontinuos',
    desc: 'Productos que ya no se distribuyen comercialmente',
    id: 110,
    parent: 4,
    parentCategoryId: 4,
    route: '/categorias/discontinuos',
    hidden: true,
    cover: '',
    img: '/images/categories/banner/torres.jpg',
  },
  {
    name: 'Barras de Sonido',
    desc: "Sonido sin igual para tu TV.",
    id: 111,
    parent: 3,
    parentCategoryId: 3,
    route: '/categorias/sound-bars',
    hidden: true,
    cover: '/images/categories/cover/tv.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Desayuno',
    subName: 'Yogurteras',
    desc: "Desayunar es importante",
    id: 112,
    parent: 6,
    parentCategoryId: 6,
    route: '/categorias/cook',
    hidden: false,
    cover: '/images/categories/cover/AW-YG816_03.webp',
    img: '/images/categories/banner/BANNER_AIWA-COOK.png',
    background: '/background/5.png',
  },
  {
    name: 'Coccion',
    subName: 'Freidoras',
    desc: "",
    id: 113,
    parent: 6,
    parentCategoryId: 6,
    route: '/categorias/coccion',
    hidden: true,
    cover: '/images/categories/cover/tv.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  // {
  //   name: 'Candy shop',
  //   desc: "",
  //   id: 114,
  //   parent: 6,
  //   parentCategoryId: 6,
  //   route: '/categorias/candy',
  //   hidden: true,
  //   cover: '/images/categories/cover/tv.png',
  //   img: '/images/categories/banner/parlantes.jpg',
  // },
  {
    name: 'Ayudante de cocina',
    subName: 'Batidoras',
    desc: "",
    id: 115,
    parent: 6,
    parentCategoryId: 6,
    route: '/categorias/ayudante-de-cocina',
    hidden: true,
    cover: '/images/categories/cover/tv.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  // {
  //   name: 'Cooks',
  //   desc: 'Explota al maximo tu cocina.',
  //   id: 1000,
  //   parent: 6,
  //   parentCategoryId: 6,
  //   route: '/categorias/cook',
  //   hidden: false,
  //   cover: '/images/categories/cover/yogurtera.png',
  //   img: '/images/categories/banner/yogurtera.png',
  //   noTextOnCategoryBanner: true,
  // }
]



export const lvThreeCat = [
  {
    name: 'Yogurteras',
    desc: 'Yogures',
    id: 201,
    parent: 112,
    parentCategoryId: 112,
    route: '/categorias/yogurteras',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Cafeteras',
    desc: 'Empeza bien el dia',
    id: 202,
    parent: 112,
    parentCategoryId: 112,
    route: '/categorias/cafeteras',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Tostadoras',
    desc: 'Empeza bien el dia',
    id: 203,
    parent: 112,
    parentCategoryId: 112,
    route: '/categorias/tostadoras',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Espumadores de leche',
    desc: 'Empeza bien el dia',
    id: 204,
    parent: 112,
    parentCategoryId: 112,
    route: '/categorias/espumadores',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Exprimidores',
    desc: 'Empeza bien el dia',
    id: 205,
    parent: 112,
    parentCategoryId: 112,
    route: '/categorias/exprimidores',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Jugueras',
    desc: 'Empeza bien el dia',
    id: 206,
    parent: 112,
    parentCategoryId: 112,
    route: '/categorias/jugueras',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Pava electrica',
    desc: 'Empeza bien el dia',
    id: 207,
    parent: 112,
    parentCategoryId: 112,
    route: '/categorias/pavas',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Freidoras',
    desc: 'Empeza bien el dia',
    id: 208,
    parent: 113,
    parentCategoryId: 113,
    route: '/categorias/freidoras',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Sandwicheras',
    desc: 'Empeza bien el dia',
    id: 209,
    parent: 113,
    parentCategoryId: 113,
    route: '/categorias/pavas',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Cascada de chocolate',
    desc: 'Fiesta de chocolate',
    id: 210,
    parent: 114,
    parentCategoryId: 114,
    route: '/categorias/cascadas',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Pochocleras',
    desc: 'El cine en casa',
    id: 211,
    parent: 114,
    parentCategoryId: 114,
    route: '/categorias/pochocleras',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Fabrica de Algodon de azucar',
    desc: 'El cine en casa',
    id: 212,
    parent: 114,
    parentCategoryId: 114,
    route: '/categorias/fabrica-algodon',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
  {
    name: 'Batidoras',
    desc: '',
    id: 213,
    parent: 115,
    parentCategoryId: 115,
    route: '/categorias/batidoras',
    hidden: false,
    cover: '/images/categories/cover/parlantes.png',
    img: '/images/categories/banner/parlantes.jpg',
  },
]