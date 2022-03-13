import "./productList.css";
import Product from "../Product/product";
import {products} from "../../Data";

const ProductList = () => {
    return (
        <div className="list">
            <div className="list-texts">
                <h1 className="list-title">Create & Inspire</h1>
                <p className="list-description">
                    texttexttexttexttexttexttexttext
                </p>
            </div>
            <div className="list-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
                
            </div>
        </div>
    )
}

export default ProductList;