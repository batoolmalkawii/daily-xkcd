import Link from 'next/link'

export default function ComicDetails(props) {
    return (
        <>
            <div className="details">
                <nav>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
                <h1>{props.singleComic.title}</h1>
                <img src={props.singleComic.img}></img>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.comic
    const res = await fetch(`http://xkcd.com/${id}/info.0.json`);
    const dataObj = await res.json();
    return { props: { singleComic: dataObj } };
}