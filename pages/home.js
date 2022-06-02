import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import NewTweet from "components/NewTweet.jsx"
import Tweets from "components/Tweets.jsx"
import prisma from "lib/prisma"
import { getTweets } from "lib/data"

export default function Home({ tweets }) {
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
            <Tweets tweets={tweets}/>
        </>
    )
}

export async function getServerSideProps() {
    let tweets = await getTweets(prisma)
    tweets = JSON.parse(JSON.stringify(tweets))

    return {
        props: {
            tweets,
        },
    }
}