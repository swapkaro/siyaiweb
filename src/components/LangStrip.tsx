const items: [string, string][] = [
  ['सुनो, नन्हे', 'Hindi'],
  ['విను, చిన్నారి', 'Telugu'],
  ['கேள், செல்லம்', 'Tamil'],
  ['শোনো, সোনা', 'Bengali'],
  ['ਸੁਣ, ਬੱਚਿਆ', 'Punjabi'],
  ['ऐक, बाळा', 'Marathi'],
]
const row = [...items, ...items]

export default function LangStrip() {
  return (
    <div className="lang-strip">
      <div className="lang-track">
        {row.map((it, i) => (
          <span className="lang-item" key={i}>
            <span className="leaf" />
            <span className="lang-native">{it[0]}</span>
            <span className="lang-en">{it[1]}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
