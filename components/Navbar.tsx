import Link from "next/link"

export default function Navbar({links}) {
    return (
        <div className="sm:flex justify-between hidden text-xl gap-5 pr-10">
            {links.map((link) => (
                <Link href={link.path} key={link.name}>{link.name}</Link>
            ))}
        </div>
    )
}
