import React, { Suspense } from "react";

const UpdateLayout = ({ children }) => {
  return <Suspense>{children}</Suspense>;
};

export default UpdateLayout;
