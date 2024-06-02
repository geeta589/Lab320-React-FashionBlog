import FashionListItem from "./FashionListItem"
import { Fashiondata } from "../data/Fashiondata"
function FashionList(){
    return(
      <div>
        <FashionListItem data={Fashiondata[0]}/>
        <FashionListItem data={Fashiondata[1]}/>
      </div>  
    )
}

export default FashionList