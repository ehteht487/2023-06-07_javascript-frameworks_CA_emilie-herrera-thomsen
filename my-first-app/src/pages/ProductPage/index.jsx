import { useParams, useNavigate, Link } from "react-router-dom";
import React, {useState, useEffect, useContext} from "react";
import { CartContext } from "../../utils/cartFunctionality";

export default function Product() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    let {id} = useParams();

    const {addToCart} = useContext(CartContext);
    const navigate = useNavigate()

    useEffect(() => {
        async function getData(url) {
            try{
                setIsLoading(true);
                setIsError(false);

                const response = await fetch(url)
                const json = await response.json()

                setData(json)
            } catch(error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        getData(`https://api.noroff.dev/api/v1/online-shop/${id}`)
    }, [id])

    const handleAdd = () => {
        setIsAdded(true)
    };

    if (isLoading || !data) {
        return <div>Loading</div>;
      }

    if ( isError) {
        return <div>Error</div>
    }
    console.log(data)

    const {title, imageUrl, description, reviews, price, discountedPrice} = data;
    const discount = price-discountedPrice

    return (
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            {discountedPrice && (
                <p>
                    Price: <strike>${price}</strike> ${discountedPrice} (Save {discount}%)
                </p>
            )}
            {!discountedPrice && <p>Price: ${price}</p>}
                <Link to="/cart">
                    <button onClick={handleAdd} disabled={isAdded} >
                        {isAdded ? "Added" : "Add"}
                    </button>
                </Link>                
            <img src={imageUrl} alt={title}/>
            {reviews.length > 0 && (
            <div>
               <h3>Reviews</h3>
               <ul>
                 {reviews.map((review) => (
                   <li key={review.id}>
                     <p>{review.description}</p>
                     <p>Rating: {review.rating}</p>
                   </li>
                 ))}
               </ul>
             </div> 
            )}
        </div>
    )       
        
};