export function Search(){
    const div = document.createElement("div");
    const form = document.createElement("form");
    const formSelect = document.createElement("form");
    const select = document.createElement("select")
    const input = document.createElement("input");
    const icon = document.createElement("i")

    div.classList.add("main__search");
    form.classList.add("main__search-form");
    formSelect.classList.add("main__search-select")
    select.classList.add("main__search-select");

    input.name = "search";
    input.type="search";
    input.placeholder="Search for a country";
    input.autocomplete ="off"
    input.classList.add("main__search-form-input")
    icon.classList.add("fas")
    icon.classList.add("fa-search")

    select.innerHTML = `
    
        <option value="Default">Filter By region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
    
    
    `

    form.appendChild(icon)
    form.appendChild(input)
    formSelect.appendChild(select)

    div.appendChild(form)
    div.appendChild(select)

    console.log(select.value)

    document.addEventListener("submit", e=>{
        if(!e.target.matches(".main__search-form")){
            return false
        }else{
            e.preventDefault()
            console.log(e.target.search.value)
            location.hash = `#/search/${e.target.search.value}`;
            localStorage.setItem("searchCountry", e.target.search.value)
            
        }
    })
    document.addEventListener("submit", e=>{
        if(!e.target.matches(".main__search-select")){
            return false
        }else{
            e.preventDefault()
           console.log("hola xd")
            
        }
    })


    return div

}