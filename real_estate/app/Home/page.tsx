import React from 'react'
import HeaderTabs from '../Components/HeaderTabs'
import './style.scss'

type Props = {}

const Home = (props: Props) => {
  return (

    <section className='heroPage'>
     <div style={{marginTop:'68px' , margin:'auto' , width:'100%'}}>
        <div>
        </div>
        <div>
          <HeaderTabs />
        </div>
        <div>
        <div>
            Welcome to the home page!<br/>
          </div>
          <div>image div</div>
        </div>
          
      </div>
    </section>
  )
}

export default Home