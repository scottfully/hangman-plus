export default function GameHeader({ totalGuesses, lastGuessName }) {
    const styles = {
        backgroundColor: "black",
        color: "white"
    }
    return (
        <header>
            <h1>Save the tasty dishes</h1>
            <p>Guess the word within {totalGuesses} attempts to keep the
            tasty malaysian dishes safe, guess them wrong and you are left with only {lastGuessName} 🍚</p>
        </header>
    )
}