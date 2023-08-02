import Link from "next/link";
import Image from 'next/image'
import Skeleton from "../components/skeleton/Skeleton";


// const fetchMenu = () => {
//   return fetch("https://gato-negro-backend.onrender.com/api/v1/products", {
//     next: {
//       revalidate: 60,
//     },
//   }).then((res) => res.json());
// };

export default async function page({children }) {
  //const { id } = params;
  //const menu = await fetchMenu();

   return (
     <div className="mt-16">
         {children}
     </div>
   );
 
}
