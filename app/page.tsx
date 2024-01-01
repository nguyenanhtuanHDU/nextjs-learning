'use client'

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
      <button onClick={() => handleGoUserRoute()}>go user</button>
    </>
  )
}
