import { words } from "./words"

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex]
}

export function getFarewellText(option) {
  const options = [
    `Farewell, ${option}`,
    `Adios, ${option}`,
    `R.I.P., ${option}`,
    `We'll miss you, ${option}`,
    `Oh no, not ${option}!`,
    `${option} bites the dust`,
    `Gone but not forgotten, ${option}`,
    `The end of ${option} as we know it`,
    `Off into the sunset, ${option}`,
    `${option}, it's been real`,
    `${option}, your watch has ended`,
    `${option} has left the building`,
  ]

  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}
