import React from 'react'

import Head from 'next/head'
import { Footer, Navbar } from '.'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Head>
          <title>Mahmoud Store</title>
        </Head>
        <header>
          <Navbar/>
        </header>
         <main className='main-container'>
              {children}
        </main>

        <Footer>

        </Footer>
    </div>
  )
}

export default Layout