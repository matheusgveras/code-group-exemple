'use client';

import React, { FC } from 'react';
//import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { LayoutBaseProps } from '../../@types/LayoutBaseType'
//const { Header, Content, Footer } = Layout;
function Base({ children }: LayoutBaseProps) {
  return (
    <div>
        {children}
    </div>
    
  );
};
export default Base;