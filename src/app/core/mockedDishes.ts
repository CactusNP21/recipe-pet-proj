export interface MockedDishes {
  id: string
  title: string
  url: string
  description: string
  time: number
  price: number,
  topics: string[],
  ingredients: Ingredients[]
  steps: { title: string, description: string }[]
  servings: number
  added?: boolean
}

export interface Ingredients {
  name: string, count: number, unit: string
}

export const mocked: MockedDishes[] = [
  {
    id: '0',
    description: "салат з м'ясом або ковбасою...",
    title: "Олів'є",
    price: 60,
    time: 60,
    servings: 3,
    url: "https://i.imgur.com/I5vEgD5_d.webp?maxwidth=1520&fidelity=grand1",
    topics: ["м'ясо", "майонез", "горох"],
    ingredients: [
      {name: "Горох", count: 50, unit: "г"},
      {name: "Морква", count: 50, unit: "г"},
      {name: "Майонез", count: 100, unit: "г"},
      {name: "Філе куряче", count: 100, unit: "г"},
      {name: "Яйця", count: 1, unit: "шт"},
      {name: "Картошка", count: 100, unit: "г"},
      {name: "Огірки солоні/свіжі", count: 100, unit: "г"},
      {name: "Цибуля 'Марс' ", count: 15, unit: "г"},
    ],
    steps: [
      {title: "Підготуємо овочі", description: "Миємо моркву, картоплю..."},
      {title: "Підготуємо овочі", description: "Миємо моркву, картоплю..."},
      {title: "Підготуємо овочі", description: "Миємо моркву, картоплю..."},
      {title: "Підготуємо овочі", description: "Миємо моркву, картоплю..."},

    ]
  },
  {
    id: '1',
    title: "Крабові палички",
    description: "дуже смачний салат з краба (ні) та любові",
    price: 50,
    time: 40,
    servings: 3,
    url: "https://smachno.ua/wp-content/uploads/2018/11/26/salat-s-krabovymi-palochkami-i-kukuruzoj-1.png",
    topics: ["риба", "майонез", "кукурудза"],
    ingredients: [
      {name: "Крабові палички", count: 100, unit: "г"},
      {name: "Кукурудза", count: 100, unit: "г"},
      {name: "Огірки", count: 50, unit: "г"},
      {name: "Яйця", count: 1, unit: "шт"},
      {name: "Майонез", count: 100, unit: "г"},
      {name: "Цибуля 'Марс' ", count: 15, unit: "г"},
    ],
    steps: []
  },
  {
    id: '2',
    title: "Грецький салат",
    description: "салат з сиром фета та маслинами...",
    price: 100,
    time: 30,
    servings: 3,
    url: "https://i.imgur.com/I5vEgD5_d.webp?maxwidth=1520&fidelity=grand1",
    topics: ["фета", "маслини", "здорове харчування"],
    ingredients: [],
    steps: []
  },

]
