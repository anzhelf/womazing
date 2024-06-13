import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Header />
				<main className='main'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/card' element={<Card />} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	)
}
export default App
