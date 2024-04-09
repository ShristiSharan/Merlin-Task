import React from 'react';

const CapsuleButton = ({title, children, onclick, highlighted}) => {
    return (
        <button
          className={
            "flex items-center justify-center px-4 py-2 border border-transparent rounded-full font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" +
            (highlighted ? 'bg-purple-700 hover:bg-purple-800' : '')
          }
            onClick={onclick}
        >
            {children}
            <span className="ml-2">{title}</span>
            </button>
    
    );
};

export {CapsuleButton};
