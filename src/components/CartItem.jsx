import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../utils/cartSlice';

function CartItem({ item }) {
    const dispatch = useDispatch();

    // Handle quantity increase/decrease
    function handleQuantityChange(type) {
        if (type === "increase") {
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
        } else if (type === "decrease" && item.quantity > 1) {
            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
        }
    }

    // Handle remove item
    function handleRemove() {
        dispatch(removeFromCart(item.id));
    }

    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-sm border p-4 hover:shadow-md transition-all duration-200">
            {/* Product Image */}
            <img
                loading='lazy'
                src={item.thumbnail}
                alt={item.title}
                className="w-28 h-28 object-cover rounded-md mb-3 md:mb-0"
            />

            {/* Product Info */}
            <div className="flex-1 md:ml-4 text-center md:text-left">
                <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                <p className="text-gray-600 font-medium">${item.price}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded-md text-lg cursor-pointer"
                >
                    -
                </button>
                <span className="font-semibold text-blue-800">{item.quantity}</span>
                <button
                    onClick={() => handleQuantityChange("increase")}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded-md text-lg cursor-pointer"
                >
                    +
                </button>
            </div>

            {/* Remove Button */}
            <button
                onClick={handleRemove}
                className="text-red-600 hover:text-red-800 ml-4 mt-3 md:mt-0 cursor-pointer"
            >
                <FaTrash size={18} />
            </button>
        </div>
    )
}

export default CartItem