import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { useCart } from './hooks/useCart';
function App() {
    var _a = useCart(), data = _a.data, cart = _a.cart, addToCart = _a.addToCart, removeFromCart = _a.removeFromCart, decreaseQuantity = _a.decreaseQuantity, increaseQuantity = _a.increaseQuantity, clearCart = _a.clearCart, isEmpty = _a.isEmpty, cartTotal = _a.cartTotal;
    return (_jsxs(_Fragment, { children: [_jsx(Header, { cart: cart, removeFromCart: removeFromCart, decreaseQuantity: decreaseQuantity, increaseQuantity: increaseQuantity, clearCart: clearCart, isEmpty: isEmpty, cartTotal: cartTotal }), _jsxs("main", { className: "container-xl mt-5", children: [_jsx("h2", { className: "text-center", children: "Nuestra Colecci\u00F3n" }), _jsx("div", { className: "row mt-5", children: data.map(function (guitar) { return (_jsx(Guitar, { guitar: guitar, addToCart: addToCart }, guitar.id)); }) })] }), _jsx("footer", { className: "bg-dark mt-5 py-5", children: _jsx("div", { className: "container-xl", children: _jsx("p", { className: "text-white text-center fs-4 mt-4 m-md-0", children: "GuitarLA - Todos los derechos Reservados" }) }) })] }));
}
export default App;
