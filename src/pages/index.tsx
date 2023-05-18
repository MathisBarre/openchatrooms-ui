import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-8">
      <h1>Pages :</h1>
      <ul className="list-disc ml-6">
        <li className="underline">
          <Link href="/lo/lin">/login</Link>
        </li>
        <li className="underline">
          <Link href="/signup">/signup</Link>
        </li>
      </ul>
    </main>
  );
}
