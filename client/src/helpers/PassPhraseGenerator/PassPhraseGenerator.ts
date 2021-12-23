import { adjectivesList } from "./adjectives"
import { animalsList } from "./animals"
import { colorsList } from "./colors"
import { genresList } from "./genres"

/**
 * Returns a random element from a list
 * @param array Input list
 * @returns Element from list
 */
const getRandomElement = (list: string[]) => {
  return list[Math.floor(Math.random() * list.length)]
}

export const getRandomPassPhrase = () => {
  const lists = [colorsList, adjectivesList, genresList, animalsList]

  const randomElements = lists.map((list) => {
    return getRandomElement(list).toLowerCase()
  })
  const randomString = randomElements.join("-")
  return randomString
}
