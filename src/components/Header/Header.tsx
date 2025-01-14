import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Logo from '../Logo/Logo'

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Link className={styles.header__button} to='/cart'>
				<ShoppingCart />
			</Link>
		</header>
	)
}
export default Header
