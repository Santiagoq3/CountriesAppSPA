import { Header } from "./Components/Header.js"
import { main } from "./Components/Main.js"
import { Router } from "./Components/Router.js"

export function App(){

    const root = document.getElementById("root")
    
    root.innerHTML = null;
    root.appendChild(Header())
    root.appendChild(main())



    Router()

    

    




}