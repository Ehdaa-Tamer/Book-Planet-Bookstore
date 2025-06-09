import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  onClick,
  className = "",  
  to = "#",       
  style = {},      
}) => {
  const isLink = to && to !== "#";
  
  if (isLink) {
    return (
      <Link to={to} className={className} style={style} >
        <button onClick={onClick} className="w-full h-full ">
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={className} style={style}>
        {children}
      </button>
    );
  }
};

export default Button;
