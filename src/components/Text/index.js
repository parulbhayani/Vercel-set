import React from "react";
const variantClasses = {
  h1: "font-normal lg:text-[5px] xl:text-[6px] 2xl:text-[7px] text-[9.99px] 3xl:text-[9px]",
  h2: "font-medium lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[8px] text-[9.35px]",
  h3: "font-medium lg:text-[4px] xl:text-[5px] 2xl:text-[6px] 3xl:text-[7px] text-[8.19px]",
  h4: "font-black lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] text-[7.33px]",
  h5: "font-semibold lg:text-[3px] 2xl:text-[4px] xl:text-[4px] 3xl:text-[5px] text-[6.51px]",
  h6: "font-medium lg:text-[3px] 2xl:text-[4px] xl:text-[4px] 3xl:text-[5px] text-[6.49px]",
  body1:
    "font-medium lg:text-[3px] 2xl:text-[4px] xl:text-[4px] 3xl:text-[5px] text-[6.47px]",
  body2:
    "font-black lg:text-[3px] 2xl:text-[4px] xl:text-[4px] 3xl:text-[5px] text-[6.1px]",
  body3:
    "font-bold lg:text-[28px] xl:text-[35px] 2xl:text-[39px] 3xl:text-[47px] text-[52px]",
  body4:
    "font-normal xl:text-[3px] lg:text-[3px] 2xl:text-[4px] text-[5.7px] 3xl:text-[5px]",
  body5:
    "font-bold lg:text-[25px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-[48px]",
  body6:
    "font-normal lg:text-[2px] 2xl:text-[3px] xl:text-[3px] text-[4.88px] 3xl:text-[4px]",
  body7:
    "font-normal xl:text-[2px] lg:text-[2px] 3xl:text-[3px] 2xl:text-[3px] text-[4.06px]",
  body8:
    "font-normal xl:text-[2px] lg:text-[2px] 3xl:text-[3px] 2xl:text-[3px] text-[4.04px]",
  body9:
    "font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px]",
  body10:
    "font-bold lg:text-[15px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-[28px]",
  body11:
    "lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px]",
  body12:
    "lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px]",
  body13:
    "font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.21px]",
  body14:
    "font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-[19.14px]",
  body15:
    "font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] lg:text-[9px]",
  body16:
    "font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[8px]",
  body17:
    "font-medium xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[15.62px] lg:text-[8px]",
  body18:
    "font-medium 2xl:text-[11px] 3xl:text-[13px] text-[14.78px] lg:text-[7px] xl:text-[9px]",
  body19:
    "font-medium 2xl:text-[11px] 3xl:text-[13px] text-[14.72px] lg:text-[7px] xl:text-[9px]",
  body20:
    "2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]",
  body21:
    "2xl:text-[10px] 3xl:text-[12px] text-[13.65px] lg:text-[7px] xl:text-[9px]",
  body22:
    "2xl:text-[10px] 3xl:text-[12px] text-[13.58px] lg:text-[7px] xl:text-[9px]",
  body23:
    "2xl:text-[10px] 3xl:text-[12px] text-[13.54px] lg:text-[7px] xl:text-[9px]",
  body24:
    "font-normal 2xl:text-[10px] 3xl:text-[12px] text-[13.5px] lg:text-[7px] xl:text-[9px]",
  body25:
    "font-normal 3xl:text-[10px] text-[12px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px]",
  body26:
    "3xl:text-[10px] text-[11.09px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px]",
  body27:
    "3xl:text-[10px] text-[11.03px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px]",
  body28:
    "3xl:text-[10px] text-[11.01px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
