import { useParams } from "react-router-dom";
export function SingleProduct(){
    const {id} = useParams();
    return(<div>
        Termék id-je: {id}
    </div>)
}