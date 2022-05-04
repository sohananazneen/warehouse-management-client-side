import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center'>
            <small>copyright &copy; {year}</small>
        </footer>
    );
};

export default Footer;