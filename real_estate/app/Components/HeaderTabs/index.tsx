import React from 'react'
import ButtonComponent from '../Button'
import Link from 'next/link'
import './HeaderTabs.scss'
import HomeLogo from '../../../Assets/Icons/Logo'

type Props = {

}

const HeaderTabs = (props: Props) => {
  return (
    <>
        <div className='tabs'>
          
            <div className='tabs_logo'>
              <div style={{display:'flex' , gap:'15px' , alignItems: 'baseline'}}>
              <HomeLogo />
              <p style={{fontSize: '35px', fontWeight: 700}} >ProperLand</p>
              </div>
            </div>
            <div className='tabs_links'>
              <Link href={'/Home'}>Home</Link>
              <Link href={'/AboutUs'}>About</Link>
              <Link href={'/Property'}> Property</Link>
              <Link href={'/Agent'}> Agent</Link>
              <Link href={'/Blog'}> Blog</Link>
            </div>
           
              <ButtonComponent btnType='submit' size='medium' type='btn' btnStyle='primary' > Contact</ButtonComponent>

        </div>
    
    </>
  )
}

export default HeaderTabs