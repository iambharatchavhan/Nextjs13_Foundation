import Link from "next/link"


export default function Home() {


  return (
    <main>
      <h1>I am building Next js app</h1>
      <Link href='/about'><button className={"p-4 border border-2 bg-red text-white"}>About</button></Link>
    </main>
  )
}
