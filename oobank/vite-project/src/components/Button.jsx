import React from 'react';

const Button = ({styles}) => (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary  outline-none text-[18px] ${styles}`}>Button</button>
);

export default Button