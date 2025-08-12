import { clsx } from "clsx"
import { getFarewellText } from "../utils"

export default function GameStatus({
  isGameOver,
  isGameWon,
  isGameLost,
  options,
  wrongGuessCount,
  isLastGuessIncorrect,
}) {
  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(options[wrongGuessCount - 1].name)}
        </p>
      )
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done 🎉</p>
        </>
      )
    }
    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Only {options[options.length - 1].name} for you 😭</p>
        </>
      )
    }

    return null
  }

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  })

  return (
    <section aria-live="polite" role="status" className={gameStatusClass}>
      {renderGameStatus()}
    </section>
  )
}
