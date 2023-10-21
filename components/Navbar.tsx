import Link from "next/link"

export default function Navbar() {
    const links = [
        {
            "name": "Home",
            "path": "/"
        },
        {
            "name": "Portfolio",
            "path": "/portfolio"
        },
        {
            "name": "Skills",
            "path": "/skills"
        },
        {
            "name": "About",
            "path": "/about"
        },
        {
            "name": "Contact",
            "path": "/contact"
        },
    ]

    return (
        <div className="w-full h-full flex justify-between items-center">
            <div className="justify-self-start pl-4">
                J/U
            </div>
            <div className="flex justify-between">
                {links.map((link) => (
                    <Link href={link.path} key={link.name} className="px-4">{link.name}</Link>
                ))}
            </div>
        </div>
    )
}
