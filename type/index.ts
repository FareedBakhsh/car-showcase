
import { CustomFilter, ShowMore } from "@/components";
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






  // for the marquee 
  declare module "react" {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }

  /* export   interfase FilterProps {
    manufacturer: string;
      year: number ;
      fuel:  string ;
      limit:  number;
      model:  string;
  }
 */

  export interface OptionProps {
    title: string;
    value: string;
  }
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }
  
  

  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }