import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import  auth from "../../Services/Firebase/index.js";

class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            loading : false,
        }
   }


handleChangeInput = (event) => {
        const {value,name} = event.target;
        this.setState({
            [name] : value
        })
      
}

handleRegister = async (e) => {
         e.preventDefault();
         this.setState({loading:true});
         const {email,password} = this.state;
         try{
            await createUserWithEmailAndPassword(auth,email,password);
         }
         catch(error){
            console.log('error');
            
         }
         finally{
            this.setState({
                loading : false
            })
         }
  
}
 




 render(){  
        const {loading} = this.state;
        
        return( 
         
              <div>
               <fieldset>
                  <legend>Register</legend>
                  <form onSubmit={this.handleRegister}>
                    <label htmlFor="">
                    <p>First Name</p>
                    <input name="firstName" type="text" placeholder="First Name" onChange={this.handleChangeInput}/>
                    </label>
                    <label htmlFor="">
                    <p>Last Name</p>
                    <input name="lastName"  type="text" placeholder="Last Name" onChange={this.handleChangeInput}/>
                    </label>



                    <label htmlFor="">
                    <p>Email</p>
                    <input name="email" type="email" placeholder="Emal" onChange={this.handleChangeInput}/>
                    </label>

                    <label htmlFor="">
                    <p>Password</p>
                    <input name = "password" type="password" placeholder="Password" onChange={this.handleChangeInput}/>
                    </label><hr/>
                    <button>{loading ? 'Loading....' : 'Register'}</button>
                  </form>
               </fieldset>
        </div>

        )
    }
};


export default Register;