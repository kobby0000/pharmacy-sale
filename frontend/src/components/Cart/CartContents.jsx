import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContents = () => {
  const cartProducts = [
    {
      producuId: 1,
      name: "T-shirt",
      size: "M",
      color: "red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=2",
    },
    {
      producuId: 2,
      name: "T-shirt",
      size: "M",
      color: "red",
      quantity: 2,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    }
  ]
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b">
          <div className="flex items-start">
            <img src={product.image} alt={product.name} className="w-13 h-13 object-cover mr-4 rounded" />
            <div>
              <h3>{product.name}</h3>
              <small className="size-10 text-gray-500 ">
                size: {product.size} | color: {product.color}
              </small>
              <div className="flex items-center mt-2 ">
                <button className="border rounded px-2 py-1 text-m font-medium">-</button>
                <span className='px-2'>{product.quantity}</span>
              <button className="border rounded px-2 py-1 text-m font-light">+</button>
              </div>
            </div>
          </div>
          <div>
            <p>{product.price.toLocaleString()}</p>
            <button><RiDeleteBin3Line /></button>

          </div>
        </div>
      ))}
    </div>
  )
}

export default CartContents