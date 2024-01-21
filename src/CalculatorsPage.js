import React from 'react';
import OneRepMaxCalculator from './OneRepMaxCalculator'; 
import TDEECalculator from './TDEECalculator';
import MacroCalculator from './MacroCalculator';

const CalculatorsPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center font mb-4">Fitness Calculators</h2>
      <div className='links text-center d-flex justify-content-center'>
        <a className='m-1' href='#1rm' style={{textDecoration: 'none'}}>1RM</a>
        <a className='m-1' href='#tdee' style={{textDecoration: 'none'}}>TDEE</a>
        <a className='m-1' href='#macro' style={{textDecoration: 'none'}}>Macros</a>
      </div>
          
          <OneRepMaxCalculator />
          <TDEECalculator />
          <MacroCalculator />
        </div>
  );
};

export default CalculatorsPage;
