import React, { useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SubHeader from './Header/SubHeader';

const Layout = ({ children }: any) => {

    return (
        <>
           <main>
               { children }
           </main>
           <Footer></Footer>
        </>
    )
}

export default Layout