import useAPI from "../../hooks/hookApi";
import React, { useEffect, useState } from "react";
import Products from "../../components/ui/products";


export default function Home() {
    const url = "https://api.noroff.dev/api/v1/online-shop";
    const { data, isLoading, isError } = useAPI(url);
    const [inputTerm, setInputTerm] = useState("");
    const[filteredTerm, setFilteredTerm] = useState([]);

    useEffect(() => {
        const filtered = data.filter((product) => 
            product.title.toLowerCase().includes(inputTerm.toLocaleLowerCase())
        );
        setFilteredTerm(filtered)
        }, [data, inputTerm])
        
        const handleInputChange = (event) => {
            setInputTerm(event.target.value)
        };
    

    if (isLoading) {
        return <div>Loading</div>
    }
    if (isError) {
        return <div>Error</div>
    }
    return (
        <div>
            <div>
                <input type="text" value={inputTerm} onChange={handleInputChange} placeholder="Search here"/>
            </div>
            {filteredTerm.map((dat) => (
                <Products key={dat.id} products={dat}/>
            ))}
        </div>
    )
}