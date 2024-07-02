// "use client"

// import Image from "next/image"
// import CustomButton from "./CustomButton"

// const Hero = () => {
//   const handleScroll = () =>{}
//   return (
//     <div className="hero">
      
//     <div className="flex-1 pt-36 padding-x">
//       <h1 className="hero__title">










     
//   <marquee behavior="scroll" direction="left" className="marquee">
//     <span className="pattern1">Well-Come To</span>
//     <span className="pattern2">Fareed Car BOOKING Hub Company Site</span>
//     <span className="pattern3">For Rental and Another Purpose</span>
//   </marquee>


// <style jsx>{`
  

//   .marquee {
//     color: transparent; /* Hide text by default */
//     position: absolute;
//     top: 30%; /* Center vertically */
//     transform: translateY(-50%);
//     left: 0;
//     width: 100%;
//     animation: marquee 30s linear infinite;
//     z-index: 1;
//   }

//   .marquee span {
//     display: inline-block;
//     margin-right: 50px; /* Adjust spacing between patterns */
//     white-space: nowrap; /* Prevent text wrapping */
//   }

//   .pattern1 {
//     color:#9A133E; /* Tomato */
//   }

//   .pattern2 {
//     color: red; /* Deep Sky Blue */
//   }

//   .pattern3 {
//     color: #ffd700; /* Gold */
//   }

//   @keyframes marquee {
//     0% {
//       transform: translateX(100%);
//     }
//     100% {
//       transform: translateX(-100%);
//     }


//   keyframes: {
//         marquee: {
//           from: { transform: "translateX(0)" },
//           to: { transform: "translateX(calc(-100% - var(--gap)))" },
//         },




//   }
// `}</style>











//         Find, book, rent a car—quick and super easy , Fareeed Booking Agency!
//       </h1>

//       <p className="hero__subtitle py-20 font-semibold">
//         Streamline your car rental experience with our effortless booking
//         process.
//       </p>
//       <CustomButton
//         title="Explore Cars"
//         containerStyles="bg-primary-blue text-white rounded-full mt-10"
//         handleClick={handleScroll} />
//     </div>
//     <div className="hero__image-container">
//         <div className="hero__image">
//           <Image src="/hero-bgrem.png" alt="hero"      sizes="100%"
    
       
    
//           fill  className="object-contain " />
//         </div>

//         <div className="hero__image-overlay" />
//       </div>
//     </div>
   
//   )
// }

// export default Hero








import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

// Extend JSX.IntrinsicElements to include 'marquee' element
declare module "react" {
  interface JSX {
    // Add 'marquee' to the list of HTML elements
    // Use 'HTMLProps' to pass down HTML attributes
    marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  }
}

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  behavior?: "scroll" | "slide" | "alternate";
  direction?: "up" | "down" | "left" | "right";
}

const Hero: React.FC = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          <div className="marquee-container">
            <Marquee
              behavior="scroll"
              direction="left"
              className="marquee"
            >
              <span className="pattern1">Well-Come To</span>
              <span className="pattern2">Fareed Car BOOKING Hub Company Site</span>
              <span className="pattern3">For Rental and Another Purpose</span>
            </Marquee>
          </div>
          Find, book, rent a car—quick and super easy, Fareeed Booking Agency!
        </h1>

        <p className="hero__subtitle py-20 font-semibold">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero-bgrem.png" alt="hero" sizes="100%" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};



const Marquee: React.FC<MarqueeProps> = ({ children, ...rest }: any) => {
  return (
    <div {...rest}>
      <marquee {...rest}>{children}</marquee>
    </div>
  );
};




export default Hero;

