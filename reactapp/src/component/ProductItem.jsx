import "./ProductItem.css"
function ProductItem({name,email,phone,website,id,handleDelete}){
    return(
        <div className="ProductItem" >
            <div className="image">
            <img  width="180px" height="180px" 
            src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy" 
            alt="avatar" />
            </div>
            <div >
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <div className="btn">
            <button>click</button>
            <button>edit</button>
            <button onClick={()=>handleDelete(id)}>delete</button>
           </div>
            </div>
        </div>
    )
}
export default ProductItem
