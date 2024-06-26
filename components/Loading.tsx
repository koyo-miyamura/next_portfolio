import React, { useEffect } from 'react'
import { useRecoilLoading } from '@/store/loading'
import { timer } from '@/lib/utils'
import MomiziIcon from '@/public/images/momizi_icon.png'

type Props = {
  children: React.ReactNode
}

const Loading = ({ children }: Props) => {
  const [isLoaded, setIsLoaded] = useRecoilLoading()

  useEffect(() => {
    const lazySetIsLoaded = async () => {
      await timer(2000)
      setIsLoaded(true)
    }
    lazySetIsLoaded()
  }, [])

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-back z-50">
        <img className="animate__animated animate__fadeInDown" src={MomiziIcon.src} alt="icon" />
      </div>
    )
  }

  return <>{children}</>
}

export default Loading
