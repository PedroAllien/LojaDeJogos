import React from "react";
import * as S from './styles';

import logo from '../../assets/logo.svg';
import cart from '../../assets/cart-icon.svg'

function Header(){
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="logo" />
            </S.LeftSide>
            <S.RightSide>
                <button>
                    <img src={cart} alt="carrinho" />
                </button>
            </S.RightSide>
        </S.Container>
    )
}

export default Header;