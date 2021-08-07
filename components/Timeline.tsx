import React from 'react'

type Props = {
  timelines: {
    period: string
    title: string
    content: JSX.Element
  }[]
}

const Timeline = ({ timelines }: Props) => {
  const Period = ({ period }: { period: string }) => (
    <span className="font-semibold text-xs text-momizi mb-1">{period}</span>
  )
  const Title = ({ title }: { title: string }) => <h3 className="font-semibold text-lg mb-1">{title}</h3>
  const Content = ({ content }: { content: JSX.Element }) => <p className="leading-tight">{content}</p>

  const LineCircle = () => (
    <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-sky-600 pointer-events-none" />
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-400 shadow hover:animate-ping border-solid border-sky-200 border-2" />
    </div>
  )

  const LeftCard = () => (
    <div className="flex flex-row-reverse md:contents">
      <div className="col-start-1 col-end-5 p-4 my-4 shadow-md border-t-4 border-momizi">
        <Period period="2000-2010" />
        <Title title="title" />
        <Content content={<>今日もいい天気</>} />
      </div>
      <LineCircle />
    </div>
  )

  const RightCard = () => (
    <div className="flex md:contents">
      <LineCircle />
      <div className="col-start-6 col-end-10 p-4 my-4 shadow-md border-t-4 border-momizi">
        <Period period="2000-2010" />
        <Title title="title" />
        <Content content={<>今日もいい天気</>} />
      </div>
    </div>
  )
  return (
    <div className="container">
      <div className="flex flex-col md:grid md:grid-cols-9 p-2">
        {timelines.map(({ period, title, content }, i) => {
          console.log(period, title, content)
          if (i % 2 === 0) {
            return <LeftCard />
          }
          return <RightCard />
        })}
        <LeftCard />
        <RightCard />
      </div>
    </div>
  )
}

export default Timeline
