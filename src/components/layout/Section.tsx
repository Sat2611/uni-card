import React from "react";

type Props = {
  children: JSX.Element;
};

function Section({ children }: Props) {
  return (
    <div className='max-w-7xl mx-auto'>
      <main>{children}</main>
    </div>
  );
}

export default Section;
