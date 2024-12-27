import { useState, useEffect, useMemo } from 'react'
import { db } from '../data/db'
import type { Guitar, CartItem } from '../types'

export const useCart = () => {
    const initialCart = (): CartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)
    const [message, setMessage] = useState("");

    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    // Función para añadir productos al carrito
    function addToCart(item: Guitar) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if (itemExists >= 0) { // Existe en el carrito
            if (cart[itemExists].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        } else {
            const newItem: CartItem = { ...item, quantity: 1 }
            setCart([...cart, newItem])
            setMessage(`El producto ${item.name} se añadió al carrito`);
            clearMessage(); // Limpiar el mensaje después de 3 segundos
        }
    }

    // Función para eliminar productos del carrito
    function removeFromCart(id: Guitar['id']) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    // Función para disminuir la cantidad de un producto
    function decreaseQuantity(id: Guitar['id']) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
    }

    // Función para aumentar la cantidad de un producto
    function increaseQuantity(id: Guitar['id']) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            } else if (item.id === id && item.quantity === MAX_ITEMS) {
                setMessage(`No puedes añadir más de ${MAX_ITEMS} unidades de ${item.name}`);
                clearMessage(); // Limpiar el mensaje después de 3 segundos
            }
            return item;
        });

        setCart(updatedCart); // Actualizar el carrito con la nueva cantidad
    }

    // Función para limpiar el mensaje
    const clearMessage = () => {
        setTimeout(() => {
            console.log("Limpiando mensaje..."); // Asegúrate de que esta línea se ejecuta
            setMessage("");
        }, 3000);
    };
    

    // Función para vaciar el carrito
    function clearCart() {
        setCart([])
    }

    // State Derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal,
        message // Asegúrate de devolver el mensaje
    }
}
