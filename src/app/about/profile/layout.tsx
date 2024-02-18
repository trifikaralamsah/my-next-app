import React from "react";

export default function LayoutProfile({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <h1>Layout Profile</h1>
      {children}
    </React.Fragment>
  );
}
