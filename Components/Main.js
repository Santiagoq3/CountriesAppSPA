import { CountriesScreen } from "./CountriesScreen.js";
import { Search } from "./Search.js";

export function main(){
    const main = document.createElement("main");

    main.classList.add("main");
    main.appendChild(Search())
    main.appendChild(CountriesScreen())



    return main
}