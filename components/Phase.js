import Image from "next/image";
import React from "react";

function Phase({ name, description, image }) {
  return (
    <div className="grid grid-cols-2 pt-7">
      <div className="relative w-3/4 pt-2">
        <Image src={image} objectFit="cover" className="rounded-md" alt="Picture For Phase" />
      </div>

      <div className="pl-5 w-[300px]">
        <h1 className="font-akira">{name}</h1>
        <div className="pt-2">
        <p className="font-helvetica-regular">
            {Array.isArray(description) ? (
                description.map((descPart, index) => (
                    <>
                        {descPart.style === 'bold' 
                            ? <span key={index} style={{ fontWeight: 'bold' }}>{descPart.text}</span> 
                            : <span key={index}>{descPart.text}</span>}
                        {index !== description.length - 1 && <br />} 
                    </>
                ))
            ) : (
                description
            )}
        </p>
        </div>
      </div>
    </div>
  );
}

export default Phase;
