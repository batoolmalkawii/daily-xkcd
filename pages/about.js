import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <div className={styles.hello}>
                <Header />
                <h1>My name is Batool and this is my comic book 💬📚</h1>
            </div>
        </>
    )

}