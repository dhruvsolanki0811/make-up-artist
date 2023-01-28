import { addDoc,collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import "../Styling/Contact.css"
import {db} from "../firebaseConfig"
const Contact = () => {
	const [fname, setFname] = useState("")
	const [lname, setLname] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [message, setMessage] = useState("")
	const [showStatus,setShowStaus]=useState(false)
	const [showValidation,setShowValidation]=useState(false)
	const [falsefield,setFalsefield]=useState("")
	const userCollection=collection(db,"contactdata")
	const getCurrentTime=()=>{
		const date = new Date();
		const time=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()+"-"+date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds();
		return time
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(email===""){
			setFalsefield("email");
			setShowValidation(true)
			return 
		}
		if(message===""){
			setFalsefield("message");
			setShowValidation(true)
			return 
		}
		if(	phone===""){
			setFalsefield("phone number");
			setShowValidation(true)
			return 
		}
		if(fname===""){
			setFalsefield("first name");
			setShowValidation(true)
			return 
		}
		if(!email.match(mailformat)){
			setFalsefield("valid email!")
			setShowStaus(true)
			return
		}
		addDoc(userCollection, {
			firstname:fname,
			lastname:lname,
			email:email,
			phone:phone,
			message:message,
			answered:false,
			time:getCurrentTime()
		}).then(()=>{setShowStaus(true)
		setEmail("")
		setFname("")
		setMessage("")
		setLname("")
		setPhone("")
		setShowValidation(false)
		})
	}
  return (
    <>
  

  <div className="contact-form">
		<div className="innerwrap">
		
			<section className="section1 clearfix">
				<div className="textcenter">
					<h1 style={{fontFamily: 'Playfair Display, serif'}}>Drop Us a Mail</h1>
				</div>
				
			</section>
		
			<section className="section2 clearfix">
				<div className="col2 column1 first">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4019316106874!2d72.86889221482147!3d19.04605798710516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21727f6e19%3A0x473006136ad440dc!2sK.%20J.%20Somaiya%20Institute%20of%20Engineering%20and%20Information%20Technology!5e0!3m2!1sen!2sin!4v1673638805504!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<div className="col2 column2 last">
					<div className="sec2innercont">
						<div className="sec2addr">
							<p></p>
							<p  style={{fontFamily: 'Barlow condense, sans-serif'}} ><span className="collig">Phone :</span> +91 00000 00000</p>
							<p style={{fontFamily: 'Barlow condense, sans-serif'}}><span className="collig">Email :</span> dummy@email.com</p>
						</div>
					</div>
					<div className="sec2contactform">
						<h3 className="sec2frmtitle" style={{fontFamily: 'Playfair Display, serif'}}>Want to Know More?? Drop Us a Mail</h3>
						{showStatus && (<Alert key="danger" variant="danger">
					Successfully submitted.
	        </Alert>)}
			{showValidation && (<div style={{color:"red"}}>
					Please enter a {falsefield}!
	        </div>)}
						<form action="">
							<div className="clearfix">
								<input className="col2 first" type="text" required placeholder="FirstName" value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
								<input className="col2 last" type="text" placeholder="LastName" value={lname} onChange={(e)=>{setLname(e.target.value)}}/>
							</div>
							<div className="clearfix">
						
								<input  className="col2 first" type="Email" required placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
								<input className="col2 last" type="text" required placeholder="Contact Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
							</div>
							<div className="clearfix">
								<textarea name="textarea" id="" cols="30" rows="4" required placeholder='write your message here' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
							</div>
							<div className="clearfix"><input onClick={handleSubmit} type="submit" value="Send"/></div>
						</form>
					</div>

				</div>
			</section>
		
		</div>
	</div>


    </>
  )
}

export default Contact