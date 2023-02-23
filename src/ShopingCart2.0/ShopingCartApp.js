import { useState } from 'react'
import './ShoppingCart.css'
import ShoppingList from './ShoppingList'
import Summery from './Summary'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
    max: 10,
    price: 80,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 3,
    max: 10,
    price: 100,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 7,
    max: 10,
    price: 120,
  },
]

function ShoppingCart() {
  const [product, serProduct] = useState(initialProducts)

  return (
    <div className="container">
      <h1>ShoppingCart 2.0</h1>
      <ShoppingList product={product} serProduct={serProduct} />
      <Summery product={product} />
    </div>
  )
}

export default ShoppingCart
