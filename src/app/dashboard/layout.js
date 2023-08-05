export default async function page({ children }) {
  //const { id } = params;
  //const menu = await fetchMenu();

  return <div className="mt-16">{children}</div>;
}
