import { INavigatorProps } from "@/app/shared/models/Navigator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./navigator.scss";

const navigatorData: INavigatorProps[] = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'User',
        path: '/user'
    },
    {
        name: 'User Detail',
        path: '/user/user-detail'
    }
]

const Navigator = ({ props = navigatorData }: { props?: INavigatorProps[] }) => {
    const currentPath = usePathname()
    return (
        <ul>
            {props && props.length > 0 && props.map((t, i) =>
                <li key={i} className={currentPath === t.path ? 'active' : ''}>
                    - <Link href={t.path}>{t.name}</Link>
                </li>
            )}
        </ul>
    );
}

export default Navigator;