import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function Header(_a) {
    var cart = _a.cart, removeFromCart = _a.removeFromCart, decreaseQuantity = _a.decreaseQuantity, increaseQuantity = _a.increaseQuantity, clearCart = _a.clearCart, isEmpty = _a.isEmpty, cartTotal = _a.cartTotal, message = _a.message;
    console.log("Prop `message` en Header:", message);
    return (_jsxs("header", { className: "py-5 header", children: [message && (_jsx("div", { style: {
                    position: "fixed",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#008440",
                    color: "white",
                    border: "1px solid #00A550",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    zIndex: 1000,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }, children: message })), _jsx("div", { className: "container-xl", children: _jsxs("div", { className: "row justify-content-center justify-content-md-between", children: [_jsx("div", { className: "col-8 col-md-3", children: _jsx("a", { href: "index.html", children: _jsx("img", { className: "img-fluid", src: "/img/logo.svg", alt: "imagen logo" }) }) }), _jsx("nav", { className: "col-md-6 a mt-5 d-flex align-items-start justify-content-end", children: _jsxs("div", { className: "carrito", children: [_jsx("img", { className: "img-fluid", src: "/img/carrito.png", alt: "imagen carrito" }), _jsxs("div", { id: "carrito", className: "bg-white p-3", children: [isEmpty ? (_jsx("p", { className: "text-center", children: "El carrito esta vacio" })) : (_jsxs(_Fragment, { children: [_jsxs("table", { className: "w-100 table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Imagen" }), _jsx("th", { children: "Nombre" }), _jsx("th", { children: "Precio" }), _jsx("th", { children: "Cantidad" }), _jsx("th", {})] }) }), _jsx("tbody", { children: cart.map(function (guitar) { return (_jsxs("tr", { children: [_jsx("td", { children: _jsx("img", { className: "img-fluid", src: "/img/".concat(guitar.image, ".jpg"), alt: "imagen guitarra" }) }), _jsx("td", { children: guitar.name }), _jsxs("td", { className: "fw-bold", children: ["$", guitar.price] }), _jsxs("td", { className: "flex align-items-start gap-4", children: [_jsx("button", { type: "button", className: "btn btn-dark", onClick: function () { return decreaseQuantity(guitar.id); }, children: "-" }), guitar.quantity, _jsx("button", { type: "button", className: "btn btn-dark", onClick: function () { return increaseQuantity(guitar.id); }, children: "+" })] }), _jsx("td", { children: _jsx("button", { className: "btn btn-danger", type: "button", onClick: function () { return removeFromCart(guitar.id); }, children: "X" }) })] }, guitar.id)); }) })] }), _jsxs("p", { className: "text-end", children: ["Total pagar: ", _jsxs("span", { className: "fw-bold", children: ["$", cartTotal] })] })] })), _jsx("button", { className: "btn btn-dark w-100 mt-3 p-2", onClick: clearCart, children: "Vaciar Carrito" })] })] }) })] }) })] }));
}
