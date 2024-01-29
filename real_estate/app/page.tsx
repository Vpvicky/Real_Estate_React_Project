
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import Page from './Home/Page'
import styles from './page.module.css'
import ButtonComponent from './Components/Button'
import { COLORS} from './Styles/color'

export default function Home() {
  return (
    <main className={styles.main}>
    <Page/>
<ButtonComponent btnStyle={'primary'} leftIcon={FaArrowAltCircleLeft} size={'small'} type={'btn'} btnType={'button'}> this is link Button</ButtonComponent>
    </main>
  )
}
