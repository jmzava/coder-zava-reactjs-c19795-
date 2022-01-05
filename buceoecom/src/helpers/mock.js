const products =[
    {id: 1, imagen:"/imagenes/mask1.png", titulo: "Visor", desc:"visor de buceo", precio:"10", inicial:0, stock:5, minimo:0 },
    {id: 2, imagen:"/imagenes/mask_and_snorkel.png", titulo: "Visor & Snorkel", desc:"combo visor mas snorquel", precio:"10",inicial:0, stock:6, minimo:0},
    {id: 3, imagen:"/imagenes/fins1.png", titulo: "aletas", desc:"aletas abioertas", precio:"10",inicial:0, stock:7, minimo:0},
    {id: 4, imagen:"/imagenes/fins2.png", titulo: "aletas", desc:"aletas cerradas", precio:"10", inicial:0, stock:8, minimo:0},
]
//  {id: 5, imagen:"/imagenes/pngegg.png", titulo: "chaleco", desc:"Chaleco Compensador", inicial:0, stock:9, minimo:0},
//     {id: 6, imagen:"/imagenes/smb1.png", titulo: "Boya Marcadora", desc:"Boya de superficie", inicial:0, stock:4, minimo:0},
//     {id: 7, imagen:"/imagenes/belt1.png", titulo: "cinturon", desc:"cinturon para lastre", inicial:0, stock:3, minimo:0},
//     {id: 8, imagen:"/imagenes/mask1.png", titulo: "luneta", desc:"visor 2", inicial:0, stock:3, minimo:0},
//     {id: 9, imagen:"/imagenes/smb1.png", titulo: "Boya Marcadora", desc:"Boya de superficie", inicial:0, stock:4, minimo:0},
//     {id: 10, imagen:"/imagenes/belt1.png", titulo: "cinturon", desc:"cinturon para lastre", inicial:0, stock:3, minimo:0},
//     {id: 11, imagen:"/imagenes/mask1.png", titulo: "luneta", desc:"visor 2", inicial:0, stock:3, minimo:0}



export const cargaPromesa = new Promise ((resolve, reject)=>{
    let statusCarga = true
    if (statusCarga){
        setTimeout(()=>{
            resolve(products)
        },3000, )
    } else{
        reject('error')
    }
})