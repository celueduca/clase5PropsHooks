import React from 'react'
import Header from './Header'
import Footer from './Footer'

const add = (number: number): number => {
  return number + 1;
}


const yearNow = () => {
  const year = new Date();
  return year.getFullYear();
}

const Layout = ({ children }: any) => {
  return (
    <>
      <Header title="Mi tienda virtual" add={add} />
      <div className="container">
        <div className="sub-container">
          <div>
          {children}
          </div>
        </div>
      </div>
      <Footer text="Celuweb" year={yearNow()} />
    </>
  )
}

export default Layout;
