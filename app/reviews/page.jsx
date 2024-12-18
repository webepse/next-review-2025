import Link from "next/link";
import Heading from '@/components/Heading'

export default function ReviewsPage(){
    return (
        <>
            <Heading>Reviews</Heading>
            <p>Here we'll list all the reviews</p>
            <ul className="flex flex-col gap-3">
                <li className="border rounded shadow hover:shadow-xl w-80 bg-slate-50">
                    <Link href="/reviews/diablo">
                        <img src="/images/diablo.jpg" alt="Image de Diablo" className="rounded-t" />
                        <h2 className="font-orbitron font-semibold py-1 text-center">Diablo IV</h2>
                    </Link>
                </li>
                <li className="border rounded shadow hover:shadow-xl w-80 bg-slate-50">
                    <Link href="/reviews/spider-man">
                        <img src="/images/spiderman2.jpg" alt="Image de Diablo" className="rounded-t" />
                        <h2 className="font-orbitron font-semibold py-1 text-center">Spider-man 2</h2>
                    </Link>
                </li>
            </ul>
        </>
    )
}