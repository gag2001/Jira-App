import { Avatar,Dropdown,Button,Typography,Flex,theme } from "antd";
import './index.css';
const {Text} = Typography;
const {useToken} = theme;

const AuthProfileDropDown = () => {
   const {token} = useToken();
   const items = [
      {
         label : 'Profile',
         key : 0,

      },

      {
         label : 'Cabinet',
         key : 1,
         
      },

      {
         label : 'Log Out',
         key : 2,
         
      }
   ]
 return (
    <div>
      <Dropdown 
        menu = {{items}}
        trigger={['click']}
        dropdownRender={(menu)=>{
             return <div style={{
                 borderRadius : token.borderRadius,
                 backgroundColor : token.colorBgElevated,
                 boxShadow : token.boxShadowSecondary,
             }}>

                      <div>
                        <Flex vertical align="center" style={{padding : token.sizeMS}}>
                         <Avatar src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"/>
                         <Text>John Smith</Text>
                         <Text>JohnSmith@gmail.com</Text>
                         </Flex>
                      </div>
                        {menu}
                     </div>
 
           }
      
         }
        
        >
          <Avatar size="large" className="user_profile_avatar">
            J S
          </Avatar>

          </Dropdown>
    </div>
 )
};

export default AuthProfileDropDown;