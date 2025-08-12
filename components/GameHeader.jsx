import { gameConfig } from "../config.js"

export default function GameHeader({ totalGuesses, lastGuessName }) {
  const styles = {
    backgroundColor: "black",
    color: "white",
  }
  
  // Replace placeholders in the description with actual values
  const description = gameConfig.description
    .replace("{totalGuesses}", totalGuesses)
    .replace("{lastGuessName}", lastGuessName)
  
  return (
    <header>
      <h1>{gameConfig.title}</h1>
      <p>
        {description}
      </p>
    </header>
  )
}
