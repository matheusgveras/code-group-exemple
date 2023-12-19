import React, { FC } from 'react';
import { LayoutBaseProps } from '../../@types/LayoutBaseType'
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
function Base({ children }: LayoutBaseProps) {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </>

  );
};
export default Base;