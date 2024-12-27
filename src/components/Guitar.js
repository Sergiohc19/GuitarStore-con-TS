import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Type Separado
export default function Guitar(_a) {
    var guitar = _a.guitar, addToCart = _a.addToCart;
    var name = guitar.name, image = guitar.image, description = guitar.description, price = guitar.price;
    return (_jsxs("div", { className: "col-md-6 col-lg-4 my-4 row align-items-center", children: [_jsx("div", { className: "col-4", children: _jsx("img", { className: "img-fluid", src: "/img/".concat(image, ".jpg"), alt: "imagen guitarra" }) }), _jsxs("div", { className: "col-8", children: [_jsx("h3", { className: "text-black fs-4 fw-bold text-uppercase", children: name }), _jsx("p", { children: description }), _jsxs("p", { className: "fw-black text-primary fs-3", children: ["$", price] }), _jsx("button", { type: "button", className: "btn btn-dark w-100", onClick: function () { return addToCart(guitar); }, children: "Agregar al Carrito" })] })] }));
}
