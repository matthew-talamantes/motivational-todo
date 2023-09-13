import Link from 'next/link';
export default function NavItem({ title, link, active = false }: { title: string, link: string, active?: boolean }) {
    return (
        <li className="nav-item">
            <Link href={link} aria-current={active ? 'page' : false}><h4>{title}</h4></Link>
        </li>
    )
}