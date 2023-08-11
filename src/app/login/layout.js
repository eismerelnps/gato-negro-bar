import { IsLogged } from "../components/routes/IsLogged";

export default async function page({ children }) {
  
    return <div className="mt-16">
      <IsLogged>
        {children}
      </IsLogged>
      
      </div>;
    
  }
  