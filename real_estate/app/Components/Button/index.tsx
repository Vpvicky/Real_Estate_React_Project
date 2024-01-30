import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import style from'./Btn.module.scss';

interface ButtonWithIconsProps {
  type: "btn" | "withIcon"
  btnStyle?: 'primary' | 'secondary' 
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

    const buttonStyle = btnStyle ? style[btnStyle] : '' ;
    const btnSize = size === 'small'? style.small : size === 'medium'? style.medium : size === 'large'? style.large : '' ;

switch(type) {
    case "btn":
      return (
                  <button className={`${style.btn } ${btnSize} ${buttonStyle}` } type={btnType} onClick={onClick}>
                    {LeftIcon && <LeftIcon />}
                    {children || value}
                    {RightIcon && <RightIcon />}
                  </button>
                );

     case 'withIcon':
            return (
                     <a className={`${style.btn_withIcon} ${btnSize} ${buttonStyle}`} href={to}type={btnType} onClick={onClick}>
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
  <div className={`${style.btn_wrapper} ${style.btnSize}`}  >
    {ButtonVarients()}
  </div>
)


};

export default ButtonComponent;
