import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import FAQ from '../FAQ/FAQ';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <FAQ></FAQ>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;