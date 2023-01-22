import React, { useContext, useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { udb,auth, db } from '../firebaseConfig'
import { collection, getDocs, query, where ,doc,updateDoc} from "firebase/firestore";
import "../message.css" 
import { Button, Table } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiOutlineCheck } from "react-icons/ai";

const Messages = () => {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");

    const navigate = useNavigate();
    const [info , setInfo] = useState([]);
    const title= {color: "rgb(252 151 172)",
  };
  const buttonStyle={
    width: "100px",
    height: "35px",
    borderRadius: "100px/100px", /* horizontal radius / vertical radius */
    backgroundColor: "rgb(252 151 172)",
    color: "white",
    textAlign: "center",
    lineHeight: "20px",
    border:"none"
  }
  const crossbutton={
    width: "40px",
    height: "35px",
    borderRadius: "100px/100px", /* horizontal radius / vertical radius */
    backgroundColor: "rgb(252 151 172)",
    color: "white",
    textAlign: "center",
    lineHeight: "20px",
    border:"none"
  }    
  useEffect(() => {
        if (currentUser) {
        Fetchdata().then((data)=>{ 
          setInfo(data)})
        }
      },[]);
    
      const clickLogin = () => {
        if (currentUser) {
          signOut(auth);
          // setInfo([])
          navigate("/login");

        } 
      };
    
      const  Fetchdata =async ()=>{
        const q = query(collection(db, "contactdata"), where("answered", "==", false));
        // const querySnapshot = await getDocs(collection(db, "contactdata"));
        const querySnapshot = await getDocs(q);

        let arr=[]
            querySnapshot.forEach((doc) => {
                // setInfo(arr => [...arr ,{...doc.data(),docid:doc.id}])
                // if(doc.data().answered===false){
                arr=[...arr , {...doc.data(),docid:doc.id}]
              // }
                          });
                        return arr;
                        }

	const getCurrentTime=()=>{
		const date = new Date();
		const time=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()+"-"+date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
		return time
	}
const updateStatus=async(data)=>{
  const taskDocRef = doc(db, 'contactdata', data.docid)
  // console.log(data)
  try{
    await updateDoc(taskDocRef, {
      firstname:data.firstname,
			lastname:data.lastname,
			email:data.email,
			phone:data.phone,
			message:data.message,
			answered:true,
			time:data.time,
      updatedTime:getCurrentTime()
    })
  } catch (err) {
  console.log(err)  }   
  Fetchdata().then((data)=>{ 
    setInfo(data)})
}
  return (

<>
<center>
<h2 style={title}>Messages</h2> 
<button style={buttonStyle} onClick={clickLogin}>{"Logout"}</button></center>

<ListGroup as="ol"  className='pt-3' style={{paddingLeft:"5vh",paddingRight:"5vh"}}>
{info.map((data,index) =>{return (<>
  <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        style={{}}
      >

        <div className="ms-2 me-auto">
          <div className="fw-bold">{data.firstname +" "+data.lastname}</div>
          <div>Email:  
  
  <span>
{/* <p> */}
{" "+data.email+"  | "}
{/* </p> */}
</span>
Phone: 
  <span>
{/* <p> */}
{" "+data.phone}
{/* </p> */}
</span>
</div>
<div>Message: 
  
  <span>
{/* <p> */}
{" "+data.message}
{/* </p> */}
</span>
</div>
<div className="text-muted small">{data.time}</div>
</div>
<button style={crossbutton}   onClick={()=>{updateStatus(data)}}><AiOutlineCheck/></button>
      </ListGroup.Item>
</>)})}
      

    
    </ListGroup>

</>
  
  )
}

      {/* {currentUser && info.map((data) =>{return (<>
        <p>{data.message}</p>
        <p>{data.email}</p>
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        <p>{data.phone}</p>
        <p>{data.time}</p>

        </>)})} */}



                  
export default Messages;