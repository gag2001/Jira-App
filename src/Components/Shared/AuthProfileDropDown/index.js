import { Avatar,Dropdown,Button,Typography,Flex,theme } from "antd";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Services/Firebase/index.js";
import { ROUTE_CONSTANTS } from "../../../core/utils/constants.js";
import './index.css';

const {Text} = Typography;
const {useToken} = theme;

const AuthProfileDropDown = () => {
   const navigate = useNavigate();
   const {token} = useToken();
   
   const handleSignOut = async () => {
      
      
      try{
         await signOut(auth);

      } 
      catch(e){
         console.log(e,'signout fail');
         
      }
   }

   const items = [
      {
         label : 'Profile',
         key : 0,
         onClick : () => navigate(ROUTE_CONSTANTS.PROFILE)
      },

      {
         label : 'Cabinet',
         key : 1,
         onClick : () => navigate(ROUTE_CONSTANTS.CABINET)
      },

      {
         onClick : handleSignOut,
         label : 'Log Out',
         key : 'Logout',
         
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