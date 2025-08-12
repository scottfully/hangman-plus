import { clsx } from "clsx"

export default function OptionChips({ options, wrongGuessCount }) {
  const optionElements = options.map((lang, index) => {
    const isOptionLost = index < wrongGuessCount
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    }
    const className = clsx("chip", isOptionLost && "lost")
    return (
      <span className={className} style={styles} key={lang.name}>
        {lang.name}
      </span>
    )
  })

  return <section className="option-chips">{optionElements}</section>
}
