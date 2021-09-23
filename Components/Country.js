export function Country(props){

    const div = document.createElement("div");
    let {capital,region,population,flag,name,subregion,nativeName,currencies,languages,topLevelDomain} = props

    function pageback(){
        history.back()
        console.log("hola xd")
    }

    div.classList.add("main__container");
    div.innerHTML = `
        <button onClick =${pageback}>Back</button>
        <div class="main__container-country">
            <img src=${flag} alt="flag">
            <div class="main__container-country-info">
                <h3>${name}</h3>
                <div class="container-info">
                    <div>
                        <p><span>Native Name :</span>${nativeName}</p>
                        <p><span>Population: </span>${population}</p>
                        <p><span>Region: </span>${region}}</p>
                        <p><span>Sub Region: </span>${subregion}</p>
                        <p><span>Capital: </span>${capital}</p>
                    </div>
                    <div>
                        <p><span>Top Level Domain: </span>${topLevelDomain[0]}</p>
                        <p><span>Currencies: </span>${currencies[0].name}</p>
                        <p><span>Languages: </span>${languages[0].name}</p>
                    </div>
                </div>
            </div>
        </div>
    
    `

    return div

}