import CardImage from '../../../../images/product-one.png'
import styles from './ProductItem.module.scss'

const ProductItem = () => {
	return (
		<li className={styles.item}>
			<img className={styles.item__image} src={CardImage} alt='' />
			<div className={styles.item__container}>
				<h3 className={styles.item__title}>Футболка USA</h3>
				<span className={styles.iyem__price}>$129</span>
			</div>
		</li>
	)
}

export default ProductItem
