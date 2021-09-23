export function Header(){
    const header = document.createElement("header")

    header.classList.add("header")

   

    header.innerHTML =`
        <h1><a href="#/">Where in the world?</a></h1>
        <div class="header__darkmode-toggle">
           <p><i class="fas fa-moon"></i> Dark mode</p> 
        
        </div>
    
    `

    


    return header


}