
import '../css/component.css';

export const saludar = ( nombre )=>{

    console.log(`${nombre}`);
    const h1 = document.createElement("h1");
    h1.innerText=nombre;
    document.body.append(h1);
}