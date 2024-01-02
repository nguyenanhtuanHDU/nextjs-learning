'use client'

// import Navigator from "./components/navigator"; // không cần import
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";
import { getCookies, setCookie } from "cookies-next";
import { Button, Input, notification } from "antd";
import { ToastContainer, toast } from 'react-toastify';

const Navigator = dynamic(() => import('./components/navigator'), { ssr: false }) // lazy loading
// ssr: false : chỉ load ở client

export default function Home() {
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')

  const router = useRouter()

  const handleGoUserRoute = () => {
    if (confirm("Go to User route?")) {
      router.push('/user') // điều hướng đến route /user, thêm route /user vào history
      // router.replace('/user') // điều hướng đến route /user, replace route hiện tại
    }
  }

  const handleSetCookie = () => {
    if (key && value) {
      setCookie(key, value)
      toast.success('Set cookie ok')
    } else {
      toast.error('Invalid value')
    }
  }

  const getAllCookie = () => {
    console.log('cookies: ', getCookies())
  }

  return (
    <>
      <Navigator />
      <div>Home</div>
      <div className="flex flex-row">
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
      </div>
      <button onClick={() => handleGoUserRoute()}>go user</button>
      <Input placeholder="key" onChange={(e) => setKey(e.target.value)} style={{ width: 200 }} />
      <Input placeholder="key" onChange={(e) => setValue(e.target.value)} style={{ width: 200 }} />
      <Button onClick={() => handleSetCookie()}>Set cookie</Button>
      <Button onClick={() => getAllCookie()}>Get all cookie</Button>
      <ToastContainer />
    </>
  )
}
