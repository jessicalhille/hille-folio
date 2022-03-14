import "./productList.css";
import Product from "../Product/product";
import {products} from "../../Data";

const ProductList = () => {
    return (
        <div className="list">
            <div className="list-texts">
                <h1 className="list-title">projects</h1>
                <p className="list-description">

                </p>
            </div>
            <div className="list-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} title={item.title} collab={item.collab} description={item.description} skills={item.skills} link={item.link} github={item.github} />
                ))}
                
            </div>
        </div>
    )
}

export default ProductList;