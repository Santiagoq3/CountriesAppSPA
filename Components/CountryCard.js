export function CountryCard(props){
    const div = document.createElement("div");
    div.classList.add("main__countriesscreen-countrycard");

    let {capital,region,population,flag,name} = props

    document.addEventListener("click", e=>{
        if(!e.target.matches(".countrycard-info__vermas")){
            return false
        }else{
            localStorage.setItem("countryName", e.target.dataset.name )
        }
    })

    div.innerHTML = `
        <img src=${flag} alt="flag country">
        <div class="countrycard-info" >
            <h2>${name}</h2>
            <div class="countrycard-secondary-info">
                <p><span>Population </span>${population}</p>
                <p><span>Region:</span> ${region}</p>
                <p><span>Capital:</span> ${capital}</p>
            </div>
            <a class="countrycard-info__vermas" data-name=${name} href="#/pais">Ver mas</a>

        </div>
    
    
    `


    return div




}