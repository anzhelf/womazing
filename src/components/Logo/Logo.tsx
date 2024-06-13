import styles from './Logo.module.scss'
import LogoImage from '../../images/dress.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<Link to='/' className={styles.logo}>
			<img className={styles.logo__image} src={LogoImage} alt='Logo dress' />
			<h1 className={styles.logo__name}>WOMAZING</h1>
		</Link>
	)
}

export default Logo
