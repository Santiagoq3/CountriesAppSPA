import api from "../Helpers/api.js"
import {fetchData} from "../Helpers/fetch.js"
import { Country } from "./Country.js"
import { CountryCard } from "./CountryCard.js"



export function Router(){
    const main = document.querySelector(".main")
    const countryScreen = document.querySelector(".main__countriesscreen")
    const btnDarkmode = document.querySelector(".header__darkmode-toggle")

    countryScreen.innerHTML = null

    let {hash} = location
    if(!hash || hash === "#/"){
        fetchData({

            url: api.apiAllCountries,
            datos: (country)=>{
               let paises = Object.values(country);
                
                paises.forEach(pais=>{
                   countryScreen.appendChild(CountryCard(pais))
                   console.log(pais)
                })
            }
        })
    }else if(hash.includes("#/search")){
        let query = localStorage.getItem("searchCountry");

        if(!query) return false
    
        fetchData({
            url: `${api.apiNameCountry}${localStorage.getItem("searchCountry")}`,
            datos: (country)=>{
               let paises = Object.values(country);
                paises.forEach(pais=>{
                    countryScreen.appendChild(CountryCard(pais))
                })
            }
        })


    }else{

        main.innerHTML = null;
        

        fetchData({
            url: `${api.apiNameCountry}${localStorage.getItem("countryName")}`,
            datos: (country)=>{
               let paises = Object.values(country);
                console.log(country)
                paises.forEach(pais=>{
                   main.appendChild(Country(pais))
                   console.log(pais)
                })
            }
        })
    }

    btnDarkmode.addEventListener("click", (e)=>{
        let header = document.querySelector(".header");
        let main = document.querySelector(".main");
        let form = document.querySelector(".main__search-form")
        let input = document.querySelector(".main__search-form-input")
        let select = document.querySelector(".main__search-select")

        header.classList.toggle("bg-darkmode")
        main.classList.toggle("bg-darkmode-main")
        form.classList.toggle("styles-darkmode-form")
        input.classList.toggle("styles-darkmode-input")
        select.classList.toggle("styles-darkmode-select");
    })


}