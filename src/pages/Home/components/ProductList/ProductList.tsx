import { Link } from 'react-router-dom'
import ProductItem from '../ProductItem/ProductItem'
import styles from './ProductList.module.scss'

const ProductList = () => {
	return (
		<Link to='/card'>
			<ul className={styles.list}>
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</ul>
		</Link>
	)
}

export default ProductList
