import React, { FC } from 'react';
import * as Style from './styles'
function Header() {
  return (
    <Style.HeaderContent>
        <Style.Logo src='/img/logo.png' />
       CodeGroup - Demo App
    </Style.HeaderContent>
    
  );
};
export default Header;