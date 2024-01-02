'use client'

import Navigator from "@/app/components/navigator";
import { IResponse } from "@/app/shared/models/Response";
import { IUser } from "@/app/shared/models/User";
import { Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const UserDetail = ({ params: { id } }: { params: { id: string } }) => {
    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        await axios.get('https://6400c7f83779a862624cdca2.mockapi.io/v1/api/users/' + id).then(res => {
            setUser(res.data)
        })
    }

    return (
        <>
            <Navigator />
            <div>UserDetail</div>
            {!user?.id && <Skeleton.Input active />}
            <div>{user?.id}</div>

            {!user?.username && <Skeleton.Input active />}
            <div>{user?.username}</div>

            {!user?.username && <Skeleton.Input active />}
            <div>{user?.username}</div>
            
            {!user?.username && <Skeleton.Input active />}
            <div>{user?.username}</div>
        </>
    );
}

export default UserDetail;