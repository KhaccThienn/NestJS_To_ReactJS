import React from 'react'
import Header from './Header/Header'

function MainLayout({
    child
}) {
  return (
    <>
        <Header />
        {child}
    </>
  )
}

export default MainLayout