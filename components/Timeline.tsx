import React from 'react'

type Props = {}

const Timeline = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:grid md:grid-cols-9 p-2">
        {/* <!-- left --> */}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 p-4 my-4 shadow-md border-t-4 border-momizi">
            <span className="font-semibold text-xs text-momizi mb-1">2000 - 2010</span>
            <h3 className="font-semibold text-lg mb-1">タイトル</h3>
            <p className="leading-tight">
              今日はいい天気。 今日はいい天気今日はいい天気 今日はいい天気今日はいい天気今日はいい天気
            </p>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-sky-800 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-500 shadow" />
          </div>
        </div>
        {/* <!-- right --> */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-sky-800 pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-500 shadow" />
          </div>
          <div className="col-start-6 col-end-10 p-4 my-4 shadow-md border-t-4 border-momizi">
            <span className="font-semibold text-xs text-momizi mb-1">2000 - 2010</span>
            <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, facilis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Vitae, facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
