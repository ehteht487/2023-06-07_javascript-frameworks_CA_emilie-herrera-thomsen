import { useParams } from "react-router-dom";

export default function Products() {
    let params = useParams();
    console.log(params)
    return (
        <h1>Product {params.id}</h1>
    );
};