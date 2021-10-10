export function CountryCard(props){
    const div = document.createElement("div");
    div.classList.add("main__countriesscreen-countrycard");

    let {capital,region,population,flags,name} = props

    document.addEventListener("click", e=>{
        if(!e.target.matches(".countrycard-info__vermas")){
            return false
        }else{
            localStorage.setItem("countryName", e.target.dataset.name )
        }
    })

    div.innerHTML = `
        <img src=${flags.png} alt="flag country">
        <div class="countrycard-info" >
            <h2>${name.common}</h2>
            <div class="countrycard-secondary-info">
                <p><span>Population </span>${population}</p>
                <p><span>Region:</span> ${region}</p>
                <p><span>Capital:</span> ${capital}</p>
            </div>
            <a class="countrycard-info__vermas" data-name=${name.common} href="#/pais">Ver mas</a>

        </div>
    
    
    `


    return div




}