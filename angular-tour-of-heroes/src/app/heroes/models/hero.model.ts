// export interface Hero {
//     id: number;
//     name: string;
//     typeId?: number;
//   }

  export class Hero {
    id: number;
    name: string;
    typeId?: number;
  }

  //interfaz validaciones de tipos no se compila y ocupa menos espacio
  //clase  para poder hacer new. todas las clases tienen un constructo vacio por defecto, 
  //de ahi q se pueda poner new hero ()