'use client'

import Navigator from "@/app/components/navigator";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const UserDetail = () => {

    const path = usePathname() // get url hiện tại
    useEffect(() => {
        console.log("🚀 ~ path:", path)
    })

    return (
        <>
            <Navigator />
            <span>UserDetail</span>
        </>
    );
}

export default UserDetail;