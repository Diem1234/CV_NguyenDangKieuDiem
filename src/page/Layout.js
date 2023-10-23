import React from 'react'
import Footer from './Footer'
import PartLeft from './PartLeft'
import PartRight from './PartRight'

const Layout = () => {
  return (
    <div>
        {/*page container*/}
        <div className="allContent">
          {/*part left*/}
          <PartLeft/>
          {/*part right*/}
          <PartRight/>
          {/*end container*/}
        </div>
        {/*footer*/}
        <Footer/>
      </div>
  )
}

export default Layout