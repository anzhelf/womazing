// import { Link } from 'react-router-dom'
import styles from './Cart.module.scss'
// import CartBlack from '../images/cart-black.svg'
// import Trash from '../images/delete.svg'
// import Patch from '../images/path.svg'
// import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { clearItems, selectCart } from '../redux/slices/cartSlice';
// import CartItem from '../components/CartItem/CartItem';
// import CartEmpty from '../components/CartEmpty/CartEmpty';

const Cart = () => {
	// const [count, setCount] = useState<number>(0)
	// const dispatch = useDispatch();
	// const { items, totalPrice } = useSelector(selectCart);
	// const totalCount = items.reduce(
	//   (sum: number, item: any) => sum + item.count,
	//   0,
	// );

	// const onClickClear = () => {
	//   if (window.confirm('Ты действительно хочешь очистить корзину?'))
	//     dispatch(clearItems());
	// };

	//условный рендер
	// if (!totalPrice) {
	//   return <CartEmpty />;
	// }

	return (
		<main className={styles.cart}>
			<div className={styles.cart__header}>
				<div className={styles.cart__box}>
					{/* <img src={CartBlack} alt='Black shopping cart icon.' /> */}
					<h1>Корзина</h1>
				</div>

				{/* <button>
					<img src={Trash} alt='Trash can icon' />
					<p>Очистить корзину</p>
				</button> */}
			</div>
			{/* <ul>
        {items.map((item: any) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul> */}

			{/* <div className={styles.cart__total}>
				<p>Всего пицц: {count} шт.</p>
				<p>
					Сумма заказа: <span>{count} ₽</span>
				</p>
			</div> */}

			{/* <div className={styles.cart__button}>
				<Link to='/' className={styles.cart__back}>
					<img src={Patch} alt='Patch icon.' />
					<p>Вернуться назад</p>
				</Link>
				<button className='animation__button'>Оплатить сейчас</button>
			</div> */}
		</main>
	)
}

export default Cart
