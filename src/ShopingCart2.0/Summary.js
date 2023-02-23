import { addSummeryPrice, addSummeryCount } from './api'
import { useState, useEffect } from 'react'

function Summery(props) {
  const { product } = props
  const [summeryPrice, setSummeryPrice] = useState(0)
  const [summeryCount, setSummeryCount] = useState(0)
  useEffect(() => {
    setSummeryPrice(addSummeryPrice(product))
    setSummeryCount(addSummeryCount(product))
  }, [product])

  return (
    <div className="summery">
      <div>
        購買商品總數: <span>{summeryCount}</span>
      </div>
      <div>
        總價: <span>{summeryPrice}</span>$
      </div>
    </div>
  )
}

export default Summery
