import React from 'react';

export default function Parent({ children }) {
  console.log('PARENT');
  return <div>{children}</div>;
}
