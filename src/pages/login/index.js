import { useState } from "react";
import { Form, Input, Button } from "antd";
import { message, signInWithEmailAndPassword } from "firebase/auth";
import  { auth } from "../../Services/Firebase/index.js";
import { ROUTE_CONSTANTS} from "../../core/utils/constants.js";
import { Link } from "react-router-dom";


const Login = () => {
  const [ form] = Form.useForm();
  const [loading,setLoading] = useState(false);


  const handleLogin = async (values) => {
        setLoading(true);
     try{
          const {email , password} = values;
          const response  =  await signInWithEmailAndPassword(auth,email,password);
          form.resetFields();
           
     }
     catch(error){
      console.log(error);
      
     }
     finally{
      setLoading(false);
     }
  };


  return (
    <div>
      <Form layout="vertical" form={form} onFinish={handleLogin}>
        <Form.Item label="Email" name="email" rules={[
          {
            required : true,
            message : 'Please Input your email'
          },
        ]}>
          <Input type="email" placeholder="Email"/>
        </Form.Item>

        <Form.Item label="Password" name="password"  tooltip = 'password must be min 6 max 16 char' rules={[
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

        <Link to={ROUTE_CONSTANTS.REGISTER}>Sign Up</Link>
      </Form>
    </div>
  )
}


export default Login;