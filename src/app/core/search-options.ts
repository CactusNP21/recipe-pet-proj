export interface SearchOptions {
  minPrice : number
  maxPrice : number
  minMinutes : number
  maxMinutes: number
}

export const defaultSearchOption: SearchOptions = {
  maxPrice: 1000,
  minPrice: 100,
  minMinutes: 15,
  maxMinutes: 240
}
