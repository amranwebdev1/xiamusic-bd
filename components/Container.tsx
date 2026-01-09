import React from 'react';
import Cn from './lib/Cn';
const Container = ({children,className}:{children:React.ReactNode;className?:string;}) => {
  return (
    <div className={Cn("max-w-7xl mx-auto px-4",className)}>
      {children}
    </div>
  );
};

export default Container;