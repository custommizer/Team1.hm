import "./store.css"
import store from "./store-comp.json"

function Store() {
    return( 
        <div className="store">
            <div className="store-inner">
                <div className="container">
                    <div className="store-items">
                        <div className="store-filter">

                        </div>
                        <div className="store-products">
                            {
                                store.map((elem) => {
                                    return(
                                        <div className="store-product">
                                            <img src={elem.image} />
                                            <h1>{elem.title}</h1>
                                            <h3>{elem.description}</h3>
                                            <h2>{elem.price}</h2>
                                            <button>В корзину</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Store