import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',     /* Nombre del componente */
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=300;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string=''

  muestImg():void{
    this.muestraImg=!this.muestraImg;
  }
  //*ngIf= true o false
  
  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":" marzo 23 2023",
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.MEYuzZH191HKW04ukKLWBQHaFB?rs=1&pid=ImgDetMain"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Precio": 30000,
      "Year":"january 31 2022",
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://th.bing.com/th/id/R.66957a83f115e2c97259fe78482e789b?rik=8lmkuzoVMlYbZg&pid=ImgRaw&r=0"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 150000,
      "Year":"Junio 14 2020",
      "Marca":"BMW",
      "Color":"Rojo",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.L7Mj5gNDwuxoJaUg1-QFMgHaE8?rs=1&pid=ImgDetMain"
    }
  ]

}
