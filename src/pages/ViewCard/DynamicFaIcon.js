import * as Icons from "react-icons/fa";
import React from "react";

const DynamicFaIcon = ({ name , themeColor}) => {
    const IconComponent = Icons[name];
  
    if (!IconComponent) { // Return a default one
      return <Icons.FaFacebook size="26px" color={themeColor} />;
    }
  
    return <IconComponent size="26px" color={themeColor}/>;
  };

  export default DynamicFaIcon