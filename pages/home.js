import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import NewTweet from "components/NewTweet.jsx"
import Tweets from "components/Tweets.jsx"
export default function Home() {
    const { data: session, status } = useSession()
    const loading = status === 'loading'
    const router = useRouter()
    if (loading) {
        return <p>...</p>
    }

    if (!session) {
        router.push('/')
    }
    return (
        <>
            <NewTweet />
            <Tweets tweets={[{content: 'hiiiiiii'}, {content: 'yo mama'}]}/>
        </>
    )
}
