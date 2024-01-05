



const PurchaseMid = ({productData, setProductData}) => {

  const {
    title,
    price
  } = productData

  return (
    <div id='purchase-mid' >
      <div>
        <h1>Sub-Total:</h1>
        <h1>${productData.price}</h1>
      </div>
      <div>
        <h1>Sales Tax:</h1>
        <h1>$5.54</h1>
      </div>
      <div>
        <h1>Total:</h1>
        <h1>${productData.price + 5.54}</h1>
      </div>
    </div>
  )
}

export default PurchaseMid
