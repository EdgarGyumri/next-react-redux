import Head from "next/head";
import Link from 'next/link';

export default function MainLayout({children}) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      {children}
    </div>
  )
}