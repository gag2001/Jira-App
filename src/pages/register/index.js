import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import  { auth } from "../../Services/Firebase/index.js";
import "./index.css";
import { Form,Button,Input,notification } from "antd";



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
         
              <div className="auto-container">
              
                 
                  <Form layout="vertical">
                    <Form.Item label ='First Name'>
                    <Input name="firstName" type="text" placeholder="First Name" onChange={this.handleChangeInput}/>
                    </Form.Item>

                    <Form.Item label ='Last Name'>
                    
                    <Input name="lastName"  type="text" placeholder="Last Name" onChange={this.handleChangeInput}/>
                    </Form.Item>



                    <Form.Item label ='Email'>
                     <Input name="email" type="email" placeholder="Emal" onChange={this.handleChangeInput}/>
                    </Form.Item>

                    <Form.Item label ='Password'>
                     <Input.Password name = "password" type="password" placeholder="Password" onChange={this.handleChangeInput}/>
                    </Form.Item><hr/>

                    <Button type="primary" onClick={this.handleRegister} loading={loading}>Register</Button>
                  </Form>
               
        </div>

        )
    }
};


export default Register;