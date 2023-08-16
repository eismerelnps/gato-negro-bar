import Image from "next/image";

import cover from "../../../public/cover.jpg";

export default async function page({ children }) {
  return (
    <div className="mt-16 bg-white ">
      <div className="flex justify-center">
        <Image src={cover} alt="gato-negro-image" width={500} height={500} />
      </div>
      {children}
    </div>
  );
}
