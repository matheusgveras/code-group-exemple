import React, { FC } from 'react';
import { LayoutBaseProps } from '../../@types/LayoutBaseType'
import Header from '../Header';
import * as Style from './styles'

function Content({ children }: LayoutBaseProps) {
  return (
    <Style.ContainerContent>
        {children}
    </Style.ContainerContent>
  );
};
export default Content;