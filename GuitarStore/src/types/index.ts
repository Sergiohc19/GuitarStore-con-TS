export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}
//* Heredar un type
export type CartItem = Guitar & {
    quantity: number
}

//* Extender un type
// export interface CartItem extends Guitar {
//     quantity: number
// }