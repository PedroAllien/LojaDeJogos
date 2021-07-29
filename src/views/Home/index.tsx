import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import * as S from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home(){
    return (
        <S.Container>
            <Header></Header>
            <Footer></Footer>
        </S.Container>
    )
}

export default Home;