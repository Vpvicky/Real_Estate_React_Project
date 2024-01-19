
import { FaArrowAltCircleRight } from 'react-icons/fa'
import Page from './Home/Page'
import styles from './page.module.css'
import ButtonComponent from './Components/Button'

export default function Home() {
  return (
    <main className={styles.main}>
    <Page/>
<ButtonComponent  rightIcon={FaArrowAltCircleRight} type={'btn'} size={'small'}> this is link Button</ButtonComponent>
    </main>
  )
}
