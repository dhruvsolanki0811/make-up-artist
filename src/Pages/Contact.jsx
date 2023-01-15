import React from 'react'
import "../Contact.css"
const Contact = () => {

  return (
    <>
  

  <div className="contact-form">
		<div className="innerwrap">
		
			<section className="section1 clearfix">
				<div className="textcenter">
					<h1>Drop Us a Mail</h1>
				</div>
			</section>
		
			<section className="section2 clearfix">
				<div className="col2 column1 first">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4019316106874!2d72.86889221482147!3d19.04605798710516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21727f6e19%3A0x473006136ad440dc!2sK.%20J.%20Somaiya%20Institute%20of%20Engineering%20and%20Information%20Technology!5e0!3m2!1sen!2sin!4v1673638805504!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<div className="col2 column2 last">
					<div className="sec2innercont">
						<div className="sec2addr">
							<p>45 BC, a Latin professor at Hampden-Sydney College in Virginia</p>
							<p><span className="collig">Phone :</span> +91 976885083</p>
							<p><span className="collig">Email :</span> vivek.mengu016@gmail.com</p>
							<p><span className="collig">Fax :</span> +91 9768850839</p>
						</div>
					</div>
					<div className="sec2contactform">
						<h3 className="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
						<form action="">
							<div className="clearfix">
								<input className="col2 first" type="text" placeholder="FirstName"/>
								<input className="col2 last" type="text" placeholder="LastName"/>
							</div>
							<div className="clearfix">
								<input  className="col2 first" type="Email" placeholder="Email"/>
								<input className="col2 last" type="text" placeholder="Contact Number"/>
							</div>
							<div className="clearfix">
								<textarea name="textarea" id="" cols="30" rows="4" placeholder='write your message here'></textarea>
							</div>
							<div className="clearfix"><input type="submit" value="Send"/></div>
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