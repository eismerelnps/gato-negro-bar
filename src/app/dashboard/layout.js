import { PrivateRoute } from "../components/routes/PrivateRoute";

export default async function page({ children }) {
  return (
    <div className="mt-16">
      <PrivateRoute>{children}</PrivateRoute>
    </div>
  );
}
