
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }


  export interface SearchManufacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }


  export interface carProps {
    city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:26;
make:string;
model:string;
transmission:string;
year:number;
  }