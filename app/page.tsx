'use client'

import { Button } from "react-bootstrap";
import Navigator from "./components/navigator";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const handleGoUserRoute = () => {
    if (confirm("Go to User route?")) {
      router.push('/user') // điều hướng đến route /user, thêm route /user vào history
      // router.replace('/user') // điều hướng đến route /user, replace route hiện tại
    }
  }

  return (
    <>
      <Navigator />
      <div>Home</div>
      <div className="text-gray-300">Text</div>
      <Button variant="primary">Button</Button>
      <Button variant="success">Button</Button>
      <div className="flex flex-row">
        <div className="basis-1/4">01</div>
        <div className="basis-1/4">02</div>
        <div className="basis-1/2">03</div>
      </div>

      <button onClick={() => handleGoUserRoute()}>go user</button>
    </>
  )
}
