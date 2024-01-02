'use client'

import { Button } from "react-bootstrap";
// import Navigator from "./components/navigator"; // không cần import
import { useRouter } from "next/navigation";
import Image from "next/image";
import image from '../public/1.jpg'
import dynamic from "next/dynamic";
import { useReportWebVitals } from 'next/web-vitals'

const Navigator = dynamic(() => import('./components/navigator'), { ssr: false }) // lazy loading
// ssr: false : chỉ load ở client

export default function Home() {
  const router = useRouter()

  useReportWebVitals((metric) => {
    console.log("🚀 ~ metric:", metric)
    // các thuộc tính của metric:
    // name: Tên của metric (vd: FP, FID, CLS)
    // value: Giá trị của metric đo được
    // delta: Thay đổi so với lần đo trước
    // id: ID của lần đo metric
    // startTime: Thời gian bắt đầu đo
    // duration: Tổng thời gian diễn ra sự kiện đo metric
  })

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

      <Image src={image} alt='image' />
      {/* tự co giãn với kích cỡ màn hình */}
    </>
  )
}
