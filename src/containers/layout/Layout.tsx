import React, { ReactNode } from 'react'
import Header from '../../components/header/header'
// import Footer from '../../components/footer/footer'
import './Layout.scss'

interface Props {
  children: ReactNode
}

const Layout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <Header />
      <main role='main' className='Site'>
        <div className='Site-content'>
          <div className='main'>{props.children}</div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
