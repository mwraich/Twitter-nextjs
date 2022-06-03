import Tweet from "components/Tweet"

export default function Tweets({ tweets }) {
    if (!tweets) return null
  return (
    <div>
        {tweets.map((tweet, index) => (
            <Tweet key={index} tweet={tweet} />
        ))}
    </div>
  )
}
