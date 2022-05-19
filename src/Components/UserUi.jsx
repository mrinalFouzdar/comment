import React, { useState } from 'react'
export default function UserUi({userData}) {
  //  console.log(userData);
   const [show,setShow]= useState(false)
  return (
      userData.isFolder ?
    <div  key={userData.id}>
      <div>
    <span onClick={()=>setShow(!show ) }>+</span>
        <span> {userData.body}</span>
        <br />
        <span> {userData.author} {userData.points} points {new Date(userData.timestamp).getHours() } h ago </span>
        </div>
        <div style={{display: show ? "block" : "none"}}>


        {
            userData.replies.map((item)=> <UserUi userData={item}/>)
        }
        </div>

    </div>
    : 
   ""
  )
}

