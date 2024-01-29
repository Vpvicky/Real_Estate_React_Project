import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import './style.scss';
import clsx from "clsx";

interface ButtonWithIconsProps {
  type: "btn" | "link" | "withIcon"
  btnStyle?: 'primary' | 'content' | 'secondary' | 'link' | 'border'
  btnType: ButtonHTMLAttributes<HTMLButtonElement>['type']
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
  btnType
}) => {

    const ButtonVarients = () : JSX.Element =>{

switch(type) {
    case "btn":
      return (
                  <button className="" type={btnType} onClick={onClick}>
                    {LeftIcon && <LeftIcon />}
                    {children || value}
                    {RightIcon && <RightIcon />}
                  </button>
                );

     case 'withIcon':
            return (
                     <a className=""href={to}type={btnType} onClick={onClick}>
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
  <div className="d-flex gap-10 align-middle justify-center border-r-5 py-6 px-9 w-64 bg-red"  >
    {ButtonVarients()}
  </div>
)


};

export default ButtonComponent;
