export const Showproduct = (props)=>{
const {productName , ProductImage , price, id } = props.data;
return(<React.Fragment>
    <img src={ProductImage}/>
    <h1>{productName}</h1>
    <h5>{price}</h5>

    <button>+</button>
    <span>0</span>
    <button>-</button>
</React.Fragment>)
}
