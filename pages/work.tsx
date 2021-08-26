import React from 'react'
import Layout from 'components/Layout'
import { WorkCardContent, HobbyCardContent } from 'components/WorkCard'

const WorkPage = () => {
  const Title = ({ children }: { children: React.ReactNode }) => {
    return <h1 className="text-4xl font-bold text-center">{children}</h1>
  }

  return (
    <Layout title="Work">
      <div className="container px-8">
        <div className="mb-16">
          <Title>Work</Title>
          <div className="lg:flex items-start container flex-wrap justify-evenly">
            <WorkCardContent />
          </div>
        </div>
        <div className="mb-16">
          <Title>Hobby</Title>
          <div className="lg:flex items-start container flex-wrap justify-evenly">
            <HobbyCardContent />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WorkPage
