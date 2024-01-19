import React from "react";
import { IconType } from "react-icons";
import './style.scss';
import clsx from "clsx";

interface ButtonWithIconsProps {
  type: "btn" | "link" 
  btnStyle?: 'text' | 'filled' | 'text-underline'
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  color?: string;
  value?: string;
  size: 'small' | 'medium' | 'large'
}

const ButtonComponent : React.FC<ButtonWithIconsProps> = ({
  type,
  children,
  onClick,
  to,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  color,
  btnStyle,
  value,
  size,
}) => {

    const ButtonVarients = () : JSX.Element =>{

switch(type) {
    case "btn":
      return (
                  <button className={clsx(`btn ${btnStyle}`,{color: color})} type="submit" onClick={onClick}>
                    {LeftIcon && <LeftIcon />}
                    {children || value}
                    {RightIcon && <RightIcon />}
                  </button>
                );
    case 'link':
        return (
                  <a className={clsx(`btn ${btnStyle}` , 'link' , {color: color})} href={to} onClick={onClick}>
                    {LeftIcon && <LeftIcon />}
                    {children || value}
                    {RightIcon && <RightIcon />}
                  </a>
                );
                   
    default:
        return <></> ;          
}
    }

return(
  <div className={clsx('btn_wrapper', size,{btn_wrapper_icon : RightIcon || LeftIcon} )}>
    {ButtonVarients()}
  </div>
)


};

export default ButtonComponent;
