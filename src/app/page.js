import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/about">About</Link>
      <Link href="/contact-us">Contact Us</Link>
      <Link href="/frame1">Frame 1</Link>
      <Link href="/secondframe">Frame 2</Link>
    </div>
  )
}
