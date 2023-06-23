import "./Product.css"
import styled from 'styled-components';
import { useState,useEffect } from "react";
import ProductItem from "./ProductItem";
const url="https://jsonplaceholder.typicode.com/users"


function Product(){
    const[data,setData]=useState([])
    const fetheddata = () => {
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            setData(res);
           console.log(res);
          })
          .catch((error) => {
           console.log(error)
          });
      };
    
        
    const handleDelete=((id)=>{
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"DELETE",
            header:{
                "Content-Type":"application/json",
            },
        }).then((res)=>{res.json()
        const remainData=data.filter((el)=>el.id !==id)
    setData(remainData)
})
        .catch((error)=>{console.log(error)})
    })
      useEffect(() => {
        // getdata()
        fetheddata()
      }, [])
    //   console.log(data)
    return(
        <DIV>
        <div className="Product">
            {data.map((item)=>(
           <ProductItem 
           key={item.id}
           id={item.id}
           name={item.name}
           email={item.email}
           website={item.website}
           phone={item.phone}
           handleDelete={handleDelete}

           />
            ))}
        </div>
        </DIV>
    )
}
const DIV = styled.div`
@media (min-width:0px) and (max-width:400px){
    .Product{
        display:grid;
        grid-template-columns: repeat(1,1fr);
    }
}
@media (min-width:400px) and (max-width:700px){
    .Product{
        display:grid;
        grid-template-columns: repeat(2,1fr);
    }
}
@media (min-width:700px) and (max-width:900px){
    .Product{
        display:grid;
        grid-template-columns: repeat(3,1fr);
    }
}


`
export default Product