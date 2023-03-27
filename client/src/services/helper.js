import axois from 'axios';
export const getAllblogs= async()=>{

    const res=await axois.get("/api/blog/");
    if(res.status!==200){
        return console.log("Some error occur");
    }
    const data=res.data;
    return data;
}

export const sendLoginRequest =async(signUp,data)=>{
    const res=await axois.post(`/api/user/${signUp?"signup":"login"}`,{
        name:data.name?data.name:"",
        email:data.email,
        password:data.password
    }).catch((err)=>console.log(err));

    if(res.status!==200&&res.status!==201){
        return console.log("unable to login");
    }
    const resData=await res.data;
    return resData;
}

export const addPost =async (data)=>{
   const res= await axois.post("/api/blog/add",{
        title :data.title,
        description :data.description,
        location :data.location,
        image :data.image,
        user:localStorage.getItem("userId"),
   })
   .catch((err)=>console.log(err));

   if(res.status!==201){
    return console.log("Error Occured");
   }

   const resData= await res.data;
   return resData;
}
