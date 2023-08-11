import { IsLogged } from "../components/routes/IsLogged";

export default async function page({ children }) {
  return (
    <IsLogged>
      <div className="mt-16">{children}</div>
    </IsLogged>
  );
}
