export function fetchData(props){

    let {url,datos} = props;

    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{

        datos(data)
        
    })
    .catch((err)=>{
        console.log(err)
    })

}