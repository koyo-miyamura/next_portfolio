import React, { useEffect } from 'react'
import { useRecoilLoading } from 'store/loading'
import { timer } from 'lib/utils'

type Props = {
  children: React.ReactNode
}

const Loading = ({ children }: Props) => {
  const [isLoaded, setIsLoaded] = useRecoilLoading()

  useEffect(() => {
    const f = async () => {
      await timer(2000)
      setIsLoaded(true)
    }
    f()
  }, [])

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white z-50">
        <img className="animate__animated animate__fadeInDown" src="/images/momizi_icon.png" alt="アイコン" />
      </div>
    )
  }

  return <>{children}</>
}

export default Loading
