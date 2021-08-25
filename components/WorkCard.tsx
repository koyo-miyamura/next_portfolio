import React from 'react'

type Props = {
  title?: string
  content?: string
  imageUrl?: string
  href?: string
}

const WorkCard = ({ title = '', content = '', imageUrl = '', href = '' }: Props) => (
  <div className="lg:m-4 lg:w-80 shadow-md hover:sdow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-0 md:mx-8">
    <a href={href}>
      <img src={imageUrl} alt="" className="overflow-hidden" />
      <div className="p-4">
        <h3 className="font-medium text-gray-600 text-lg my-2">{title}</h3>
        <p className="text-justify">{content}</p>
      </div>
    </a>
  </div>
)

export default WorkCard
