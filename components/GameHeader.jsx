import { gameConfig } from "../config.js"

export default function GameHeader({ totalGuesses, lastGuessName }) {
  // Replace totalGuesses and lastGuessName placeholders in the description with actual values
  const description = gameConfig.description
    .replace("{totalGuesses}", totalGuesses)
    .replace("{lastGuessName}", lastGuessName)

  return (
    <header>
      <h1>{gameConfig.title}</h1>
      <p>{description}</p>
    </header>
  )
}
