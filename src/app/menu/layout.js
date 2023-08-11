import Image from "next/image";

export default async function page({ children }) {
  //const { id } = params;
 
  return (
    <div className="mt-16">
      <div className="flex justify-center">
        <Image
        
          src={"/cover.jpg"}
          alt="gato-negro-image"
          width={500}
          height={500}
        />
      </div>
      {children}
    </div>
  );
}
