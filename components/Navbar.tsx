import Link from "next/link"

export default function Navbar({links}) {
    return (
        <div className="sm:flex justify-between hidden">
            {links.map((link) => (
                <Link href={link.path} key={link.name} className="px-4">{link.name}</Link>
            ))}
        </div>
    )
}
