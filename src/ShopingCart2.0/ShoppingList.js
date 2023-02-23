import { addCount, delCount, deleteProduct } from './api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import 'animate.css'

function ShoppingList(props) {
  const { product, serProduct } = props

  return (
    <table>
      <tbody>
        {product.map((v, i) => (
          <tr key={v.id}>
            <td>
              <button
                className="trashCan"
                onClick={() => {
                  serProduct(deleteProduct(product, v.id))
                }}
              >
                <FontAwesomeIcon icon={faTrash} color={'rosybrown'} />
              </button>
            </td>
            <th>{v.name}</th>

            <td>
              <span>數量: {v.count}</span>
            </td>
            <td>
              <span> 單價: {v.price} $</span>
            </td>
            <td>
              <span> 總價: {v.price * v.count} $</span>
            </td>
            <td>
              <button
                onClick={() => {
                  serProduct(addCount(product, v.id))
                }}
              >
                +
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  if (v.count === 1) {
                    serProduct(deleteProduct(product, v.id))
                  } else {
                    serProduct(delCount(product, v.id))
                  }
                }}
              >
                –
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ShoppingList
