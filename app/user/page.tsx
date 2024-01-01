'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Navigator from "../components/navigator"
import { IUser } from "../shared/models/User"
import axios from 'axios';
import { IResponse } from "../shared/models/Response"

const User = () => {
    const [users, setUsers] = useState([] as IUser[])

    useEffect(() => {
        getListUsers()
    }, []) // [] là tham số thứ 2 -> useEffect chạy 1 lần duy nhất

    const getListUsers = () => {
        axios.get('https://6400c7f83779a862624cdca2.mockapi.io/v1/api/users').then((res: IResponse<IUser[]>) => {
            setUsers(res.data)
        })
    }

    return (
        <>
            <Navigator />
            <ul>
                {users && users.length > 0 && users.map((t, i) =>
                    <li key={i}>{t.id} - {t.username} - {t.password} - {t.email}</li>
                )}
            </ul>
        </>
    )
}

export default User