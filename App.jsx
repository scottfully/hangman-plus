import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "./languages"
import { getRandomWord } from "./utils"
import Confetti from "react-confetti"
import LanguageChips from "./components/LanguageChips"
import GameHeader from "./components/GameHeader"
import GameStatus from "./components/GameStatus"
import LetterGuesses from "./components/LetterGuesses"
import Keyboard from "./components/Keyboard"

export default function AssemblyEndgame() {
  // State values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  // Derived values
  const numGuessesLeft = languages.length - 1
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= numGuessesLeft
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
  const totalGuesses = languages.length - 1
  const lastGuessName = languages[languages.length - 1].name

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    )
  }

  function startNewGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <GameHeader totalGuesses={totalGuesses} lastGuessName={lastGuessName} />
      <GameStatus
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        languages={languages}
        wrongGuessCount={wrongGuessCount}
        isLastGuessIncorrect={isLastGuessIncorrect}
      />
      <LanguageChips languages={languages} wrongGuessCount={wrongGuessCount} />
      <LetterGuesses
        isGameLost={isGameLost}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
      />
      <Keyboard
        lastGuessedLetter={lastGuessedLetter}
        numGuessesLeft={numGuessesLeft}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
        addGuessedLetter={addGuessedLetter}
      />
      {isGameOver && (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </main>
  )
}
