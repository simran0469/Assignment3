import "./Product.css"
import { useState,useEffect } from "react";
// import axios from "axios"
import ProductItem from "./ProductItem";
const url="https://jsonplaceholder.typicode.com/users"
// const getdata=(url)=>{
//   return fetch(url).then((res)=>res.json())
// }
// const deleteTodo=(id)=>{
// return fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
//     method:"DELETE",
//     header:{
//         "Content-Type":"application/json",
//     },
// }).then((res)=>res.json())

// }

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
    // const getdata = () => {
    //     axios.get(url).then((res) => {
    //     // console.log(res.data) 
    //     setData(res.data)
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    //   }
    // const deleteTodo=(id)=>{
    //     return fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
    //         method:"DELETE",
    //         header:{
    //             "Content-Type":"application/json",
    //         },
    //     }).then((res)=>res.json())
        
    //     }
        
    const handleDelete=((id)=>{
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:"DELETE",
            header:{
                "Content-Type":"application/json",
            },
        }).then((res)=>res.json())
        .catch((error)=>{console.log(error)})
    })
      useEffect(() => {
        // getdata()
        fetheddata()
      }, [])
    //   console.log(data)
    return(
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
    )
}
export default Product