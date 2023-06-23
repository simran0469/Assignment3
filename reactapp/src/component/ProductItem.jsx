import "./ProductItem.css"
import { useState } from "react"
function ProductItem({name,email,phone,website,id,handleDelete}){
    const[like,setlike]=useState(false)
    return(
        <div className="ProductItem" >
            <div className="image">
            <img  width="180px" height="180px" 
            src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy" 
            alt="avatar" />
            </div>
            <div className="text" >
            <h3>{name}</h3>
            <p><ion-icon name="mail-outline" style={{fontSize:"1.5rem",marginRight:"4px"}}></ion-icon>{email}</p>
            <p><ion-icon name="call-outline" style={{fontSize:"1.5rem",marginRight:"4px"}}></ion-icon>{phone}</p>
            <p><ion-icon name="globe-outline" style={{fontSize:"1.5rem",marginRight:"4px"}}></ion-icon>{website}</p>
            </div>
            <div className="btn">
                {
                like?<ion-icon name="heart" style={{fontSize:"1.5rem",color:"red",cursor:"pointer"}} onClick={()=>setlike(false)}></ion-icon>
                :<ion-icon name="heart-outline" style={{fontSize:"1.5rem",border:"red",cursor:"pointer"}} onClick={()=>setlike(true)}></ion-icon>
            }
            
            <ion-icon name="create-outline" style={{fontSize:"1.5rem",cursor:"pointer"}}></ion-icon>
            <ion-icon name="trash-outline" style={{fontSize:"1.5rem",cursor:"pointer"}}onClick={()=>handleDelete(id)}></ion-icon>
            </div>
        </div>
    )
}
export default ProductItem
