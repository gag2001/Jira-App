import  React, { useState } from "react";
import  { createUserWithEmailAndPassword } from "firebase/auth";
import  { auth } from "../../Services/Firebase/index.js";
import  "./index.css";
import  { Form,Button,Input } from "antd";
import { regexValidation , ROUTE_CONSTANTS} from "../../core/utils/constants.js";
import { Link } from "react-router-dom";

const Register = () => {
   const [loading,setLoading] = useState(false);
   const [form] = Form.useForm();

   const handleRegister = async (values) => {

       setLoading(true);
       const {email,password} = values;
       try{
        
         await createUserWithEmailAndPassword(auth,email,password);
       }

       catch(e){
            console.log(e);
            
       }

       finally{
        setLoading(false);
       }

   };

    return (
    <div className="container">
        <Form layout="vertical" form={form} onFinish={handleRegister}>

           <Form.Item label ="First Name" name = "firstName" rules={[
              {
                required : true,
                message : 'Please Input your email'
              },
                ]}>
                <Input type="text" placeholder="First Name" />
           </Form.Item>

           <Form.Item label = "Password" name = "lastName" rules={[
                {
                  required : true,
                  message : 'Please Input your email'
                },
                ]}> 
                <Input type="text" placeholder="Last Name" />
           </Form.Item>

           <Form.Item label = "Email" name = "email" rules={[
              {
                required : true,
                message : 'Please Input your email'
              },
        ]}>
                <Input type="text" placeholder="Last Name"/>
           </Form.Item>

            <Form.Item label = "Password" name = "password"  rules={[
              {
                required : true,
                message : 'Please input your password',
              
              },

              {
                pattern : regexValidation,
                message : 'Wrong password'
              }
        ]}>
                <Input.Password placeholder="Last Name"/>
           </Form.Item>

           <Button type = "primary" htmlType ="submit" loading = {loading}>Sign Up</Button>
           <Button><Link to={ROUTE_CONSTANTS.LOGIN}>Sign In</Link></Button>
        </Form>
    </div>
   )
};



export default Register;
