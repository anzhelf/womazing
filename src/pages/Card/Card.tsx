import CardImage from '../../images/product-one.png'
import styles from './Card.module.scss'

const Card = () => {
	return (
		<main className={styles.card}>
			<h1 className={styles.card__title}>Свитшот Sweet Shot</h1>
			<p className={styles.card__history}>
				Главная — Свитшоты — Свитшот Sweet Shot
			</p>

			<article className={styles.card__container}>
				<img className={styles.card__image} src={CardImage} alt='' />
				<ul className={styles.card__options}>
					<li className={styles.card__price}>$311</li>

					<li className={styles['card__size-container']}>
						<h3 className={styles.card__subtitle}>Выберите размер</h3>
						<ul className={styles['card__size-list']}>
							<li className={styles['card__size-item']}>XS</li>
							<li className={styles['card__size-item']}>S</li>
							<li className={styles['card__size-item']}>M</li>
							<li className={styles['card__size-item']}>L</li>
							<li className={styles['card__size-item']}>XL</li>
						</ul>
					</li>
					<li className={styles['card__size-container']}>
						<h3 className={styles.card__subtitle}>Выберите цвет</h3>
						<ul className={styles['card__size-list']}>
							<li className={styles['card__color-item']} />
							<li className={styles['card__color-item']} />
							<li className={styles['card__color-item']} />
							<li className={styles['card__color-item']} />
						</ul>
					</li>

					<li className={styles['card__add-container']}>
						<div className={styles.card__count}>1</div>
						<button className={styles.card__button}>Добавить в корзину</button>
					</li>
				</ul>
				{/* 

				{/* <li>
					<h3>Выберите цвет</h3>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
				</li>
				<li>
					<p>1</p>
					<button>Добавить в корзину</button>
					
				</li> */}
			</article>
		</main>
	)
}

export default Card
