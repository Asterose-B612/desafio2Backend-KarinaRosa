/*DESAFÍO 2/ CONSIGNA:
Basado en el desafío 1 el ProductManager, agregar cada un ode los metodos para poder trabajar con lo que sería fs. Poder almacenarlo en lo que sería un archivo Json.
Se agregará la variable this.path para poder recibir como parámetro el path de lo que sería mi proyecto y contar con los elementos para generar un nuevo objeto( id autoincrementable, title, description, price, thumbnail, code, stock)
Dentro del Product Manager tener:
addPorduct, getProducts, getProductsById
updateProduct, deleteProduct.

VOY A USAR PROMESAS DE FS
*/

//genero 1 clase con 1 constructor que me pide path como paramentro para poderlo almacenar

import { promises as fs } from 'fs'

export class ProductManager {
    constructor(path) {
        this.path = path
    }//path:seria la ruta donde van a estar alojados nuestros elementos. YA NO VA EL ARRAY VACIO



    //MÉTODOS:
    //f asincrona xq uso promesas fs., q me pide como parametro 1 nuevo producto
    async addProduct(newProduct) {
        //voy a consultar mis elementos, donde esta alojado mi array de productos en la ruta que me de this.path, lo voy a tomar como utf-8
        const PRODS = JSON.parse(await fs.readFile(this.path, 'utf-8'))

        // Verificar campos obligatorios
        const REQUIREDFIELDS = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];
        let hasError = false;
        for (const field of REQUIREDFIELDS) {
            if (!(field in newProduct) || newProduct[field] === undefined || newProduct[field] === '') {
                console.log("Error: El campo '" + field + "' es obligatorio.");
                hasError = true;
            }
        }
        if (hasError) {
            return // Salir de la función si hay un error
        }
        //1 vez q tengo el producto corroboro si existe VOY A VALIDAR
        //buscame 1 prod cuyo code sea igual al code del nuevo producto
        const INDICE = PRODS.findIndex(prod => prod.code === newProduct.code)
        //si el indice es distinto de -1(-1 significa que el elemento no existe)OJO CON PONER  !=-1
        console.log(INDICE)
        if (INDICE === -1) {
            //si no existe lo agrego al array
            PRODS.push(newProduct)
            //vuelvo a escribir este archivo.De lo que seria este nuevo array con este nuevo producto (DE ESTA LOCACION, ENVIAME ESTE ARRAY)
            await fs.writeFile(this.path, JSON.stringify(PRODS))
            //Y RETORNAME LO QUE SERIA EL MENSAJE
            console.log("Creado con éxito")
        } else {
            console.log("Producto existente")
        }
    }



    async getProducts() {
        const PRODS = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        //misma linea de codigo q al inicio
        console.log(PRODS)
    }



    //misma logica de la funcion anterior, le pido un id por parametro
    async getProductById(id) {
        const PRODS = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        //pregunto x el array de productos.Buscame el elemento cuyo id sea el id ingresado
        const PROD = PRODS.find(e => e.id === id)

        if (PROD) {
            console.log(PROD)
        } else {
            console.log("El producto no existe")
        }
    }



    //aca me va a pedir un id y un objeto
    async updateProduct(id, nuevoProducto) {
        const PRODS = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        //misma linea de codigo q al inicio
        //CONSULTO POR INDICE
        const INDICE = PRODS.findIndex(e => e.id === id)
        //si el producto existe
        if (INDICE != -1) {
            //PRODS[INDICE].stock = nuevoProducto.stock  SE AGREGA POR CADA UNA DE LAS PROPIEDADES
            PRODS[INDICE].title = nuevoProducto.title
            PRODS[INDICE].description = nuevoProducto.description
            PRODS[INDICE].price = nuevoProducto.price
            PRODS[INDICE].thumbnail = nuevoProducto.thumbnail
            PRODS[INDICE].code = nuevoProducto.code
            PRODS[INDICE].stock = nuevoProducto.stock
            //una vez que tengo este array editado, lo voy a pisar con el writeFile
            await fs.writeFile(this.path, JSON.stringify(PRODS))
            console.log('Actualización satisfactoria')
        } else {
            console.log('Producto inexistente')
        }
    }



    async deleteProduct(id) {
        const PRODS = JSON.parse(await fs.readFile(this.path, 'utf-8'))
        //CONSULTO POR INDICE
        const INDICE = PRODS.findIndex(e => e.id === id)
        //si el producto existe
        if (INDICE != -1) {
            //para editar un delete utilizo un filter: (filtrame todos los productos => cuyo id !=sea distinto al id ingresado)
            const PRODSFILTRADOS = PRODS.filter(e => e.id != id)
            //una vez que tengo este array editado, lo voy a pisar con el writeFile
            await fs.writeFile(this.path, JSON.stringify(PRODSFILTRADOS))
            console.log('Producto Eliminado')
        } else {
            console.log('Producto no encontrado')
        }
    }
}