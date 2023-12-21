import React, { FC } from 'react';
import { LayoutBaseProps } from '../../@types/LayoutBaseType'
import Header from '../Header';
import * as Style from './styles'
import { useWindowHeight } from '@react-hook/window-size'

function Content({ children }: LayoutBaseProps) {
    const screenHeight = useWindowHeight();
    return (
        <Style.ContainerContent height={screenHeight}>
            {children}
        </Style.ContainerContent>
    );
};
export default Content;