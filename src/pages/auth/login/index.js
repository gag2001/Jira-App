import { useState } from "react";
import { Form, Input, Button,notification} from "antd";
import { message, signInWithEmailAndPassword } from "firebase/auth";
import  { auth } from "../../../Services/Firebase/index.js";
import { ROUTE_CONSTANTS} from "../../../core/utils/constants.js";
import AuthWrapper from '../../../Components/Shared/AuthWrapper/index.js';
import { Link } from "react-router-dom";
import loginBanner from "../../../core/images/login-auth.jpg";


const Login = ({setIsAuth}) => {
  const [ form] = Form.useForm();
  const [loading,setLoading] = useState(false);


  const handleLogin = async (values) => {
        setLoading(true);
     try{
          const {email , password} = values;
          const response  =  await signInWithEmailAndPassword(auth,email,password);
          form.resetFields();
          setIsAuth(true);
           
     }
     catch(error){
      notification.error({
        message : 'Invalid Login Credentials',
      })
      
     }
     finally{
      setLoading(false);
     }
  };


  return (
    <AuthWrapper title= "Sign in" banner = {loginBanner}>
      <Form layout="vertical" form={form} onFinish={handleLogin}>
        <Form.Item label="Email" name="email" rules={[
          {
            required : true,
            message : 'Please Input your email'
          },
        ]}>
          <Input type="email" placeholder="Email"/>
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[
          {
            required : true,
            message : 'Please input your password',
           
          },

        ]}>
          <Input.Password placeholder="Password"/>
        </Form.Item>

        <Button type="primary" htmlType="submit" loading = {loading}>
          Sign in
        </Button>

        <Link to={ROUTE_CONSTANTS.REGISTER}>Create account</Link>
      </Form>
    </AuthWrapper>
  )
}


export default Login;