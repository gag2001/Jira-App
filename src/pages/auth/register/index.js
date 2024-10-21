import  React, { useState } from "react";
import  { createUserWithEmailAndPassword } from "firebase/auth";
import  { auth } from "../../../Services/Firebase/index.js";
import  { Form,Button,Input,Flex } from "antd";
import { regexValidation , ROUTE_CONSTANTS} from "../../../core/utils/constants.js";
import { Link, Route, useNavigate } from "react-router-dom";
import AuthWrapper from "../../../Components/Shared/AuthWrapper/index.js";
import registerBanner from "../../../core/images/register-auth.jpg";



const Register = () => {
   const [loading,setLoading] = useState(false);
   const [form] = Form.useForm();
   const navigate = useNavigate();

   const handleRegister = async (values) => {

       setLoading(true);
       const {email,password} = values;

       try{
        
         await createUserWithEmailAndPassword(auth,email,password);
         navigate(ROUTE_CONSTANTS.LOGIN);
       }

       catch(e){
            console.log(e);
            
       }

       finally{
        setLoading(false);
       }

   };

    return (
    <AuthWrapper title="Sign up" banner = {registerBanner}>
        <Form layout="vertical" form={form} onFinish={handleRegister}>

           <Form.Item label ="First Name" name = "firstName" rules={[
              {
                required : true,
                message : 'Please Input your email'
              },
                ]}>
                <Input type="text" placeholder="First Name" />
           </Form.Item>

           <Form.Item label = "Last Name" name = "lastName" rules={[
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

            <Form.Item label = "Password" name = "password"  tooltip = 'password must be min 6 max 16 char' rules={[
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
           
           <Form.Item label = "Config Password" name = "confirm" dependencies={['password']} rules={[
              {
                required : true,
                message : 'Please input your password',
              
              },

              ({getFieldValue}) => ({
                validator(_,value){
                  if(!value || getFieldValue('password') === value){
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The new password do not match'));
                }
                
               
              })
        ]}>
              <Input.Password placeholder="Config Password"/>
           </Form.Item>
           
           <Flex justify="flex-end" gap='10px'>

                <Button><Link to={ROUTE_CONSTANTS.LOGIN}>Sign In</Link></Button>
                <Button type = "primary" htmlType ="submit" loading = {loading}>Sign Up</Button>
                
           </Flex>
         </Form>
        </AuthWrapper>
   )
};



export default Register;
