import React from 'react';

function Team() {
    return ( 
        <div className="container ">
        <div className="row p-5 mt-5border-top">
          <h1 className=" mt-5 text-center">
         Summary
          </h1>
        </div>
        <div className="row p-5 text-muted"style={{lineHeight:"1.8",fontSize:"1.2em"}}>
          <div className="col-6 p-5 text-center">
           <img src="media/images/ss.jpeg"style={{borderRadius:"100%",width:"60%"}}/>
           <h4 className='mt-5'> Chandan K N </h4>
           <h6> Student</h6>
          </div>
          <div className="col-6 p-5">
            <p>To develop a strong impact to the company,
where I can put My knowledge and skills with
consistency and to continually maintain the
good progress of the company that offers
better challenges and opportunities for me to
grow professionally..</p>
<p >Connect on <a href="https://www.linkedin.com/in/chandan-k-n-47b130327"style={{textDecoration:"none"}}>linkdin</a>/ <a href="https://www.instagram.com/ig__chandu__"style={{textDecoration:"none"}}>Instagram</a>/<a href="https://github.com/chandankn9353"style={{textDecoration:"none"}}>Git Hub</a></p>
          </div>
        </div>
      </div>
    );
    
}

export default Team;