//aquí genero mis productos

import { Product } from "./Product.js";
import { ProductManager } from "./ProductManager.js";



const producto1 = new Product("Dell XPS 13 Plus", "Notebook Intel Core i7-1260P, 16GB RAM, 512 GB SSD, SD card, Fingerprint W11", 1558000, "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320nt-xnb-shot-5-1-sl.psd?fmt=pjpg&pscan=auto&scl=1&wid=3782&hei=2988&qlt=100,1&resMode=sharp2&size=3782,2988&chrss=full&imwidth=5000", "DELLXPS139320", 25);

//falta el campo descripcion → chequeo el error
const producto2 = new Product("Apple iPhone 14 Pro Max", "", 680999, "https://www.yourmacstore.nl/media/catalog/product/cache/19a47ab23187a681c0d6786a313b33f5/7/3/7376101810974_1991754528.jpg", "A2650", 8);

const producto3 = new Product("Apple MacBook Pro 13", "Notebook macOS 8GB RAM, 256 GB SSD, color espacial", 2000000, "https://th.bing.com/th/id/R.dd8770ef96efbf3725cc82d3c00161bf?rik=ejg3K7qbx2D%2bmA&pid=ImgRaw&r=0", "A2338", 15);

const producto4 = new Product("Huawei MatePad Pro 11", "Tablet Kirin 9000 7nm, 512 SSD", 570000, "https://d500.epimg.net/cincodias/imagenes/2023/11/29/tablets/1701260925_565844_1701261040_sumario_normal.jpg", "H34337", 11);

//falta el campo codigo →  A2759
const producto5 = new Product("Apple iPad Pro 11", "Tablet 4th generation 2022 128gb color plata y 8gb RAM", 1499000, "https://th.bing.com/th/id/R.b0f1de5b30bd996f259b8a9c2b8d5ef1?rik=2DbnJzce%2fRfl7w&pid=ImgRaw&r=0", "", 23);

//falta el campo stock
const producto6 = new Product("Xiaomi Redmi Pad SE 11", "Tablet 128GB color graphite gray, 6gb RAM", 750000, "https://th.bing.com/th/id/R.336e8d9b20537ff7f8e6328b4f09dab6?rik=KzVlyza9dRBifA&pid=ImgRaw&r=0", "XI114355");

//VERSION DOS PARA PRUEBA DE ACTUALIZACION
const producto1Version2 = new Product("Dell XPS 13 Plus", "Notebook Intel Core i7-1260P, 16GB RAM, 512 GB SSD, SD card, Fingerprint W11", 2000000, "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320nt-xnb-shot-5-1-sl.psd?fmt=pjpg&pscan=auto&scl=1&wid=3782&hei=2988&qlt=100,1&resMode=sharp2&size=3782,2988&chrss=full&imwidth=5000", "DELLXPS139320", 25);

//este nuevo producto lo vamos a ir agregando al ProductManager. La ruta va a json
const productManager = new ProductManager('./products.json')
//voy agregando nuevos productos


//PRUEBO LOS METODOS

await productManager.addProduct(producto1)
await productManager.addProduct(producto2)
await productManager.addProduct(producto3)
await productManager.addProduct(producto4)
await productManager.addProduct(producto5)
await productManager.addProduct(producto6)


await productManager.getProducts()

await productManager.getProductById("7652796560c9afa7")

await productManager.updateProduct("e92bb9564ea4f563c914", producto1Version2)

await productManager.deleteProduct("e92bb9564ea4f563c914")