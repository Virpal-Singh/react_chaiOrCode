import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response)=>setdata(response[currency]))
        
    },[currency])
    console.log(data)
    return data
}
export default useCurrencyInfo