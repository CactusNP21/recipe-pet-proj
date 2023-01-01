export interface MockedDishes {
  id: string
  title: string
  url: string
  description: string
  time: number
  price: number,
  topics: string[],
  ingredients: { name: string, count: string, unit: string }[]
  steps: { title: string, description: string }[]
}

export const mocked: MockedDishes[] = [
  {
    id: '0',
    description: "салат з м'ясом або ковбасою...",
    title: "Олів'є",
    price: 200,
    time: 60,
    url: "https://i.imgur.com/I5vEgD5_d.webp?maxwidth=1520&fidelity=grand1",
    topics: ["м'ясо", "майонез", "горох"],
    ingredients: [
      {name: "Горох", count: "50", unit: "г"},
      {name: "Горох", count: "50", unit: "г"},
      {name: "Горох", count: "50", unit: "г"}
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
    price: 150,
    time: 40,
    url: "https://smachno.ua/wp-content/uploads/2018/11/26/salat-s-krabovymi-palochkami-i-kukuruzoj-1.png",
    topics: ["риба", "майонез", "кукурудза"],
    ingredients: [],
    steps: []
  },
  {
    id: '2',
    title: "Грецький салат",
    description: "салат з сиром фета та маслинами...",
    price: 350,
    time: 30,
    url: "https://i.imgur.com/I5vEgD5_d.webp?maxwidth=1520&fidelity=grand1",
    topics: ["фета", "маслини", "здорове харчування"],
    ingredients: [],
    steps: []
  },

]
