import React from 'react'
import PersonalDetails from '../component/PersonalDetails'
import Skills from '../component/Skills'
import Interests from '../component/Interests'

const PartLeft = () => {
  return (
    <div className="leftRight">
            <div className="allLeft">
              {/*picture*/}
              <PersonalDetails/>
              <hr />
              {/*Enter Skills*/}
              <div className="partTwo">
                <Skills/>
                <br />
                <br />
                <Interests/>
              </div>
            </div>
          </div>
  )
}

export default PartLeft