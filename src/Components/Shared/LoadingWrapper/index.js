import { Spin } from "antd";
import './index.css';

const LoadingWrapper = ({loading,children}) => {
  return (
    <>
      {
        loading ? <div className="main-loading-container"><Spin size="large"/></div> : children
      }
    </>
  )
};

export default LoadingWrapper;