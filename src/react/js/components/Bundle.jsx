
import ShoppingCartContext from "./ShoppingCartContext/ShoppingCartContext.mjs"
import { useContext } from "react"


const Bundle = () => {
const {bundleDisplay} = useContext(ShoppingCartContext)
    console.log('inside Bundle')
  return (
    <div id='Bundle-div' className="pop-ups" style={{zIndex: bundleDisplay ? 9999 : -1}}>
      <h2>Games</h2>
      <h2>Books</h2>
      <h2>Software</h2>
    </div>
  )
}

export default Bundle
