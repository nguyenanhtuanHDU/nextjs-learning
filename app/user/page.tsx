'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Navigator from "../components/navigator"

const User = () => {

    const path = usePathname() // get url hiện tại
    useEffect(() => {
        console.log("🚀 ~ path:", path)
    })

    return (
        <>
            <Navigator />
            <div>User</div>
        </>
    )
}

export default User