import { clsx } from "clsx"
import { getFarewellText } from "../utils"

export default function GameStatus({isGameOver, isGameWon, isGameLost, languages, wrongGuessCount, isLastGuessIncorrect}) {

    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! Enjoy your tasty dishes 🎉</p>
                </>
            )
        }
        if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Only {languages[languages.length - 1].name} for you 😭</p>
                </>
            )
        }

        return null
    }

    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })
        
    return (
        <section
            aria-live="polite"
            role="status"
            className={gameStatusClass}
        >
            {renderGameStatus()}
        </section>
    )
}