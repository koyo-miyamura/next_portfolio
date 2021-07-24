import React from 'react'

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t text-sm">
      © {new Date().getFullYear()} Koyo Miyamura
    </footer>
  )
}

export default Footer
