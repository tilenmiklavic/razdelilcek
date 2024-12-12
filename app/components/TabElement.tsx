import Link from "next/link"

type Props = {
    icon: string
    route: string
    label: string
}

export default function TabElement({icon, route, label}: Props) {

    return (
        <Link href={route} className="tab-element-container flex flex-col grid">
            <div className="icon justify-self-center">
                <i className={`fa-solid fa-${icon}`}></i>
            </div>
            <div className="icon-label justify-self-center">{label}</div>
        </Link>
    )
}
