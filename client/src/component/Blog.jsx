import React, { useEffect, useState } from 'react'
import { getAllblogs } from '../services/helper'
import Card from './Card';

const Blog = () => {
  const [json,setJson]=useState();
  useEffect(()=>{
    
    getAllblogs().then((data)=> setJson(data?.blogs)).catch(err=>console.log(err));
    
    
  },[])
  return (
    <div>
    
     {json&&json.map((item) => (
       
       <Card key={item._id} title={item.title} des={item.description} />
 
   ))}
   
    </div>
  )
}

export default Blog
