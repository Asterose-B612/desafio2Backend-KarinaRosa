//aquí genero mis productos

import { Product } from "./Product.js";
import { ProductManager } from "./ProductManager.js";



const producto1 = new Product("Dell XPS 13 Plus", "Notebook Intel Core i7-1260P, 16GB RAM, 512 GB SSD, SD card, Fingerprint W11", 1558000, "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320nt-xnb-shot-5-1-sl.psd?fmt=pjpg&pscan=auto&scl=1&wid=3782&hei=2988&qlt=100,1&resMode=sharp2&size=3782,2988&chrss=full&imwidth=5000", "DELLXPS139320", 25);
//falta el campo descripcion → chequeo el error
const producto2 = new Product("Apple iPhone 14 Pro Max", "", 680999, "https://www.yourmacstore.nl/media/catalog/product/cache/19a47ab23187a681c0d6786a313b33f5/7/3/7376101810974_1991754528.jpg", "A2650", 8);

const producto3 = new Product("Apple MacBook Pro 13", "Notebook macOS 8GB RAM, 256 GB SSD, color espacial", 2000000, "https://th.bing.com/th/id/R.dd8770ef96efbf3725cc82d3c00161bf?rik=ejg3K7qbx2D%2bmA&pid=ImgRaw&r=0", "A2338", 15);

const producto4 = new Product("Huawei MatePad Pro 11", "Tablet Kirin 9000 7nm, 512 SSD", 570000, "https://d500.epimg.net/cincodias/imagenes/2023/11/29/tablets/1701260925_565844_1701261040_sumario_normal.jpg", "H34337", 11);

const producto5 = new Product("Apple iPad Pro 11", "Tablet 4th generation 2022 128gb color plata y 8gb RAM", 1499000, "https://th.bing.com/th/id/R.b0f1de5b30bd996f259b8a9c2b8d5ef1?rik=2DbnJzce%2fRfl7w&pid=ImgRaw&r=0", "A2759", 23);

//falta el campo stock
const producto6 = new Product("Xiaomi Redmi Pad SE 11", "Tablet 128GB color graphite gray, 6gb RAM", 750000, "https://th.bing.com/th/id/R.336e8d9b20537ff7f8e6328b4f09dab6?rik=KzVlyza9dRBifA&pid=ImgRaw&r=0", "XI114355");

const producto7 = new Product("Lenovo Tab P12 Pro", "Tablet 256gb 8gb RAM color storm gray", 1699999, "https://fdn.gsmarena.com/imgroot/news/22/01/lenovo-tab-p12-pro-android-12l-beta-2/inline/-1200/gsmarena_001.jpg", "TB-Q706F", 22);

const producto8 = new Product("iPhone Pro 15 Max", "Smartphone Apple A17 Pro 1Tb 8gb RAM Titanio Blanco", 2859999, "https://i5.walmartimages.com/asr/4b82505c-9988-4bde-b2fb-e899a8aa345a.115ed912d260407419bccf8f859442b0.jpeg", "A2849", 18);

//falta campo codigo  8VA-00001
const producto9 = new Product("Surface Go 3", "Notebook Microsoft Multi Touch Intel Pentium Gold 6500Y de 1,1 GHz 128GB SSD 8gb RAM W11",
    2043166, "https://th.bing.com/th/id/OIP.zi801rYOccfivC3VRbf2WgHaDn?pid=ImgDet&rs=1", "", 30);

const producto10 = new Product("Lenovo LOQ 15", "Notebook Intel Core i5 8gb RAM 512gb W11", 1195695, "https://p2-ofp.static.pub/ShareResource/na/products/lenovo-laptops/560x450/lenovo-loq-15-inch-01.png", "82XV00N1AR", 24);

const producto11 = new Product("Galaxy Tab S8 Ultra", "Tablet Samsung 14,6 Graphite 256gb", 1392300, "https://th.bing.com/th/id/OIP.1Js7VtZgQQXMsOU5bQVagwHaE8?pid=ImgDet&rs=1", "SM-X900", 32);

//falta campo link: https://th.bing.com/th/id/R.34410c6e45a32d7cf37e01d7a6210712?rik=DskSXDY5mNLVKA&pid=ImgRaw&r=0
const producto12 = new Product("iPhone 14", "Smartphone Apple 4gb RAM 256gb Blanco estelar", 3287931, "", "A78994", 10);

const producto13 = new Product("HP Envy x360 15", "Tablet 16gb Ram 512gb Touchscreen Negro", 1750000, "https://th.bing.com/th/id/OIP.wIh29PZ_yFHWwdEsFExXDQHaFj?pid=ImgDet&rs=1", "15-fh0023dx", 10);
//falta campo title: "Dere T30 Pro 13"
const producto14 = new Product("", "Tablet Intel Celeron N5095 16GB RAM 1TB SSD W11 Silver", 680000, "https://www.geekbuying.pl/28432-large_default/dere-t30-pro-2-in-1-laptop-13-inch-2k-ips-touch-screen-tablet-pc-magic-keyboard-stylus-pen-16gb-ddr4-1tb-ssd-green.jpg", "Tabde1330", 25);

const producto15 = new Product("Apple iPhone 13 Pro", "Smartphone apple 256gb 6 GB Ram Grafito", 3000000, "https://celutronic.com/wp-content/uploads/2021/04/iphone-12-pro-max-6.jpg", "A78995", 11);

const producto15Actualizar = new Product("Apple iPhone 13 Pro", "Smartphone apple 256gb 6 GB Ram Grafito", 3200000, "https://celutronic.com/wp-content/uploads/2021/04/iphone-12-pro-max-6.jpg", "A78995", 11);

//este nuevo producto lo vamos a ir agregando al ProductManager. La ruta va a json
const productManager = new ProductManager('./products.json')
//voy agregando nuevos productos

await productManager.addProduct(producto1)
await productManager.addProduct(producto2)
await productManager.addProduct(producto3)
await productManager.addProduct(producto4)
await productManager.addProduct(producto5)
await productManager.addProduct(producto6)
await productManager.addProduct(producto7)
await productManager.addProduct(producto8)
await productManager.addProduct(producto9)
await productManager.addProduct(producto10)
await productManager.addProduct(producto11)
await productManager.addProduct(producto12)
await productManager.addProduct(producto13)
await productManager.addProduct(producto14)
await productManager.addProduct(producto15)


await productManager.getProducts()

await productManager.getProductById("31d5ad9b57a5f1215be8")

await productManager.updateProduct()
//await productManager.deleteProduct()