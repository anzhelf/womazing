import styles from './Home.module.scss'
import ProductList from './components/ProductList/ProductList'

const Home = () => {
	return (
		<div className={styles.home}>
			<p className={styles.home__history}>Главная — Магазин</p>
			<main>
				<ProductList />
			</main>
		</div>
	)
}

export default Home
