export interface Producto {
    desc: string;
    precio: number;
}

//producto 1
const telefono: Producto = {
    desc: "Nokia A1",
    precio: 140
}

//producto2
const tablet: Producto = {
    desc: "iPad Air",
    precio: 350
}

//funcion calcular impuesto
export function calculaISV(productos: Producto[]):[number, number] {
    let total = 0;

    productos.forEach(({precio})=>{
        total += precio
    })

    return [total, total * 0.15];
}

// const articulos = [telefono, tablet];

// const isv = calculaISV(articulos);

// console.log('IVA: ', isv);