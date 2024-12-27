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

// Type para el ID de Guitarra, mejor forma que la posterior de hacerlo
// export type GuitarID = Guitar['id']

// Type para el ID de Guitarra
// export type GuitarID = Pick<Guitar, 'id'>












//* Extender un type
// export interface CartItem extends Guitar {
//     quantity: number
// }

//* Omit<Type, Keys>
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price'> & {
//     quantity: number
// }

//* Pick<Type, Keys>
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
//     quantity: number
// }