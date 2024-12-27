var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState, useEffect, useMemo } from 'react';
import { db } from '../data/db';
export var useCart = function () {
    var initialCart = function () {
        var localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    };
    var data = useState(db)[0];
    var _a = useState(initialCart), cart = _a[0], setCart = _a[1];
    var _b = useState(""), message = _b[0], setMessage = _b[1];
    var MIN_ITEMS = 1;
    var MAX_ITEMS = 5;
    useEffect(function () {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    // Función para añadir productos al carrito
    function addToCart(item) {
        var itemExists = cart.findIndex(function (guitar) { return guitar.id === item.id; });
        if (itemExists >= 0) { // Existe en el carrito
            if (cart[itemExists].quantity >= MAX_ITEMS)
                return;
            var updatedCart = __spreadArray([], cart, true);
            updatedCart[itemExists].quantity++;
            setCart(updatedCart);
        }
        else {
            var newItem = __assign(__assign({}, item), { quantity: 1 });
            setCart(__spreadArray(__spreadArray([], cart, true), [newItem], false));
            setMessage("El producto ".concat(item.name, " se a\u00F1adi\u00F3 al carrito"));
            clearMessage(); // Limpiar el mensaje después de 3 segundos
        }
    }
    // Función para eliminar productos del carrito
    function removeFromCart(id) {
        setCart(function (prevCart) { return prevCart.filter(function (guitar) { return guitar.id !== id; }); });
    }
    // Función para disminuir la cantidad de un producto
    function decreaseQuantity(id) {
        var updatedCart = cart.map(function (item) {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return __assign(__assign({}, item), { quantity: item.quantity - 1 });
            }
            return item;
        });
        setCart(updatedCart);
    }
    // Función para aumentar la cantidad de un producto
    function increaseQuantity(id) {
        var updatedCart = cart.map(function (item) {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return __assign(__assign({}, item), { quantity: item.quantity + 1 });
            }
            else if (item.id === id && item.quantity === MAX_ITEMS) {
                setMessage("No puedes a\u00F1adir m\u00E1s de ".concat(MAX_ITEMS, " unidades de ").concat(item.name));
                clearMessage(); // Limpiar el mensaje después de 3 segundos
            }
            return item;
        });
        setCart(updatedCart); // Actualizar el carrito con la nueva cantidad
    }
    // Función para limpiar el mensaje
    var clearMessage = function () {
        setTimeout(function () {
            console.log("Limpiando mensaje..."); // Asegúrate de que esta línea se ejecuta
            setMessage("");
        }, 3000);
    };
    // Función para vaciar el carrito
    function clearCart() {
        setCart([]);
    }
    // State Derivado
    var isEmpty = useMemo(function () { return cart.length === 0; }, [cart]);
    var cartTotal = useMemo(function () { return cart.reduce(function (total, item) { return total + (item.quantity * item.price); }, 0); }, [cart]);
    return {
        data: data,
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        decreaseQuantity: decreaseQuantity,
        increaseQuantity: increaseQuantity,
        clearCart: clearCart,
        isEmpty: isEmpty,
        cartTotal: cartTotal,
        message: message // Asegúrate de devolver el mensaje
    };
};
