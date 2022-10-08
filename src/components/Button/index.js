import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder14: "rounded-radius14",
  RoundedBorder6: "rounded-radius6",
  CircleBorder8: "rounded-radius814",
  CircleBorder11: "rounded-radius11345",
  CircleBorder19: "rounded-radius19",
  icbCircleBorder12: "rounded-radius12",
  icbCircleBorder33: "rounded-radius33",
  icbCircleBorder19: "rounded-radius19",
  icbCircleBorder36: "rounded-radius36",
};
const variants = {
  FillBlueA70063: "bg-blue_A700_63 text-blue_A701",
  FillBlueA700: "bg-blue_A700 text-white_A700",
  FillIndigoA700: "bg-indigo_A700 text-white_A700",
  OutlineGreen7007f: "bg-green_700 shadow-bs text-white_A700_dd",
  OutlineWhiteA700:
    "border-bw041 border-solid border-white_A700 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-black_900",
  FillWhiteA70019: "bg-white_A700_19 text-white_A700",
  FillYellow90019: "bg-yellow_900_19 text-yellow_900",
  FillBlueA70020: "bg-blue_A700_20 text-blue_A701",
  FillYellow90063: "bg-yellow_900_63 text-yellow_900",
  FillYellow90026: "bg-yellow_900_26 text-yellow_900",
  icbFillGreen900: "bg-green_900",
  icbOutlineBlack900: "bg-bluegray_901 shadow-bs1",
  icbOutlineBlack9001_2: "bg-bluegray_901 shadow-bs2",
  icbFillBlueA700: "bg-blue_A700",
  icbOutlineBluegray901:
    "bg-bluegray_901 border border-bluegray_901 border-solid",
  icbFillIndigoA10019: "bg-indigo_A100_19",
  icbFillLime80026: "bg-lime_800_26",
};
const sizes = {
  sm: "p-[3px]",
  md: "lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px]",
  lg: "3xl:p-[10px] p-[11px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px]",
  xl: "xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px]",
  "2xl": "xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] p-[18px] lg:p-[9px]",
  smIcn: "p-[3px]",
  mdIcn: "lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] p-[8px]",
  lgIcn: "xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder14",
    "RoundedBorder6",
    "CircleBorder8",
    "CircleBorder11",
    "CircleBorder19",
    "icbCircleBorder12",
    "icbCircleBorder33",
    "icbCircleBorder19",
    "icbCircleBorder36",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA70063",
    "FillBlueA700",
    "FillIndigoA700",
    "OutlineGreen7007f",
    "OutlineWhiteA700",
    "FillWhiteA700",
    "FillWhiteA70019",
    "FillYellow90019",
    "FillBlueA70020",
    "FillYellow90063",
    "FillYellow90026",
    "icbFillGreen900",
    "icbOutlineBlack900",
    "icbOutlineBlack9001_2",
    "icbFillBlueA700",
    "icbOutlineBluegray901",
    "icbFillIndigoA10019",
    "icbFillLime80026",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder14",
  variant: "FillBlueA70063",
  size: "2xl",
};

export { Button };
