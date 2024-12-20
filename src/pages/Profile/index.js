import { useContext,useEffect } from 'react';
import { AuthContext } from '../../Context/authContext.js';
import { Form, Input, Button } from 'antd';
import './index.css';

const Profile = () => {
  const {userProfileInfo} = useContext(AuthContext);
  const [form] = Form.useForm();
  
  useEffect(()=>{
    
    const {uid, ...restData} = userProfileInfo;
    form.setFieldsValue(restData);
   console.log(restData);
   
   },[form,userProfileInfo]);

    return (
        <div>
          <Form layout='vertical' form={form}>
              <Form.Item label = 'First Name' name= 'firstName'>
                 <Input placeholder='First Name'/>
              </Form.Item>
            
              <Form.Item label = 'Last Name' name= 'lastName'>
                 <Input placeholder='Last Name'/>
              </Form.Item>

              <Form.Item label = 'Email' name= 'email'>
                 <Input readOnly placeholder='Email'/>
              </Form.Item>
              
              <Form.Item label = 'Phone Number' name= 'phoneNumber'>
                 <Input placeholder='Phone Number'/>
              </Form.Item>
               
              <Button type='primary' htmlType='submit'>Submit</Button>
            </Form>

           
        </div>
    )
};

export default Profile;