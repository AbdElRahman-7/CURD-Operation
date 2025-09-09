import { environment } from "../Envirroment";

// Example: Create product URL
const createProductUrl = environment.BASE_URL + environment.PRODUCTS.CREATE;

// Example: Get product by ID
const productId = 5;
const getProductUrl = environment.BASE_URL + environment.PRODUCTS.GET_BY_ID(productId);

const products = () => {
  return (
    <div>products</div>
    /**
     * to create product 
     */
  )
}

export default products