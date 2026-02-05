import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
    return(
        <div className="flex items-center justify-between p-4 py-5 px-4">
            <Link href="/">
                <Image src="logo.svg" alt="logo" width={50} height={50}/>
            </Link>
            <div className="flex gap-4">
                    <p>Guide</p>
                    <p>Links</p>
                    <p>Contact</p>
                </div>
        </div>
    )
}