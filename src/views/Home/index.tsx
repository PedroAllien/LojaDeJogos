import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import * as S from './styles';

import Header from '../../components/Header';

function Home(){
    return (
        <S.Container>
            <Header></Header>
        </S.Container>
    )
}

export default Home;