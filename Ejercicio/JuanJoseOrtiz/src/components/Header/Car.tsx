interface Props {
    totalProducts: number
}

const Car = ({totalProducts}:Props) => {
    return (
        <li className="nav-item">
        <button className="  position-relative btn btn-link nav-link active" >
            <i className="fas fa-shopping-cart">
            </i>
            {totalProducts > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"> {totalProducts}</span>
            )}
        </button>
      </li>
    )
}

export default Car
