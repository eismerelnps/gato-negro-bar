import React, { Suspense } from "react";
import MenuContainer from "../components/menu/MenuContainer";
import Skeleton from "../components/skeleton/Skeleton";

export default function page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <MenuContainer />
    </Suspense>
  );
}
