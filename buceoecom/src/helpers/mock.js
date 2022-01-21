const products =[
    {id: "1", imagen:"/imagenes/mask1.png", titulo: "Visor", desc:"visor de buceo", precio:10, inicial:0, stock:5, minimo:0, categoria:"Visor" },
    {id: "2", imagen:"/imagenes/mask_and_snorkel.png", titulo: "Visor & Snorkel", desc:"combo visor mas snorquel", precio:11,inicial:0, stock:6, minimo:0, categoria:"Visor"},
    {id: "3", imagen:"/imagenes/fins1.png", titulo: "aletas", desc:"aletas abioertas", precio:12,inicial:0, stock:7, minimo:0, categoria:"Aletas"},
    {id: "4", imagen:"/imagenes/fins2.png", titulo: "aletas", desc:"aletas cerradas", precio:13, inicial:0, stock:8, minimo:0, categoria:"Aletas"},
    {id: "5", imagen:"/imagenes/pngegg.png", titulo: "chaleco", desc:"Chaleco Compensador", precio:14,inicial:0, stock:9, minimo:0, categoria:"Varios"},
    {id: "6", imagen:"/imagenes/smb1.png", titulo: "Boya Marcadora", desc:"Boya de superficie", precio:15,inicial:0, stock:4, minimo:0, categoria:"Varios"},
    {id: "7", imagen:"/imagenes/belt1.png", titulo: "cinturon", desc:"cinturon para lastre", precio:16,inicial:0, stock:3, minimo:0, categoria:"Varios"}
]



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

