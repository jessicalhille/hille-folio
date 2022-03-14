import "./product.css";

const Product = ({img, title, collab, description, skills, link, github}) => {
    return (
        <div className="product">
            <div className="product-browser">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
            <img src={img} alt="" className="product-img" />
            <div className="project-info">
                <div className="project-title">
                    <h1>{title}</h1>
                </div>
                <div className="project-collab">
                    <p>{collab}</p>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="skills-used">
                    <p>{skills}</p>
                </div>
                <div className="project-links">
                    <a className="live-btn" href={link} target="_blank" rel="noreferrer">
                        live site
                    </a>
                    <a className="git-btn" href={github} target="_blank" rel="noreferrer">
                        github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Product;