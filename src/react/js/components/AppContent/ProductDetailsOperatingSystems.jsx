const ProductDetailsOperatingSystems = ({ operatingSystems }) => {
    return (
        <div className="product-details-operating-systems">
            <h2 className="product-details-title">OPERATING SYSTEM</h2>
            {operatingSystems.map((operatingSystem, index) => {
                return <img className="product-details-details" src={operatingSystem.image_link} alt={operatingSystem.name} key={index} />
            })}
        </div>
    )
}

export default ProductDetailsOperatingSystems