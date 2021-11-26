//rafce
import { Product } from '../interfaces/IProduct'
import SubHeader from './SubHeader'

interface Props {
    title: string,
    add?:(n: number) => number
    products: Product[]
}

const Header = ({products ,title ,add }:Props ) => {
    return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark pt-3">
        <div className="container d-flex justify-space-between">
            <p className="navbar-brand align-middle">
                    {title +  '  ' + (add ?  + '' + add(5) : '')}
            </p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className=" align-end collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <SubHeader products={products}/>
                    </ul>
                </div>
        </div>
    </nav>
      
    )
}

export default Header
