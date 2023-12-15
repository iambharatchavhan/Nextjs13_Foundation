import { error } from "console"
import Link from "next/link"

export default function About() {
  
  // throw new Error("not Today")
  return (
    <div>
      <h1>This is about page</h1>
      <Link href='/'><button className={"p-4 border border-2 bg-green-500 text-white"}>Home</button></Link>
    </div>
  )
}
