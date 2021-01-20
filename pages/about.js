import Link from 'next/link'

export default function About() {
    return (
        <>
            <div className="about">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>

                <h1>About Page</h1>
            </div>
            <style jsx>{`
            `}
            </style>
        </>
    )

}