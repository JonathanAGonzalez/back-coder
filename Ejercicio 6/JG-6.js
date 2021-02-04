const { AsyncResource } = require('async_hooks')
const { Console } = require('console')
const fs = require ('fs')
const { runInNewContext } = require('vm')

class Producto{

    constructor(title,price,thumbnail,){
        this.title =title
        this.price = price  
        this.thumbnail= thumbnail
        
    }
}

class Archivo{

    //CONSTRUCTOR DEL ARCHIVO
    constructor(filename){
        this.Filename = filename
        this.ruta =`C:/Users/Jona/Desktop/coder-back/Ejercicio 6/${this.Filename}.txt`
        this.cod = 'utf-8'
        this.ban= true
        
      try{
        fs.promises.writeFile(this.ruta,'')
        console.log(`Archivo ${this.Filename}.txt creado con éxito!`)
      }    
      catch{
            console.log(`Error al crear archivo ${this.Filename}`)
                
      }          
        
    }

    async leer(){
        
        try{
            let data = await fs.promises.readFile(this.ruta,this.cod)                      
            console.log(data)
        }
        catch(error){
            console.log([])
        }
        
    }
  
    async guardar(producto){
        try{                 
                         
            if(this.ban === true){
                producto.id = 1
                const newArray=[]
                newArray.push(producto)
                await fs.promises.writeFile(this.ruta,JSON.stringify(newArray),this.cod)
                this.ban =false
                return
            }

            
            const data = await fs.promises.readFile(this.ruta,this.cod)

            
            let dataParse =JSON.parse(data)

            
            producto.id = dataParse.length +1
            
            dataParse.push(producto)
   
            await fs.promises.writeFile(this.ruta,JSON.stringify(dataParse),this.cod)      

        }catch(error){
            console.log(error)
        }
        
    }

    async borrar(){
        try{
            await fs.promises.unlink(this.ruta)

            console.log(`Archivo ${this.Filename} eliminado correctamente`)
        }
        catch{
            console.log(`Error al intentar eliminar el archivo ${this.Filename}`)
        }
    }
}




async function main( ){

    let archivo = new Archivo('Productos')
    let producto1=new Producto('Iphone X',150000,'url:example')
    await archivo.guardar(producto1)

    await archivo.leer()

    let producto2=new Producto('Iphone 7',120000,'url:example')
    await archivo.guardar(producto2)


    await archivo.leer()

    let producto3=new Producto('Macbook',500000,'url:example')
    await archivo.guardar(producto3)


    await archivo.leer()

    

}

main()






