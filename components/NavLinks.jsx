import Link from "next/link"


const links = [
    { href: "/chat", label: "chat" },
    { href: "/tours", label: "tours" },
    { href: "/tours/new-tour", label: "new tour" },
    { href: "/profile", label: "profile" }
]

function NavLinks() {
    return (
        <ul className="menu text-base-content">
            {links.map(link =>
                <li key={link.label}>
                    <Link href={link.href} className="capitalize">{link.label}</Link>
                </li>
            )}
        </ul>
    )
}

export default NavLinks
