import React, { useState } from 'react';

const MacroCalculator = () => {
  const [tdee, setTDEE] = useState('');
  const [goal, setGoal] = useState('buildMuscle');
  const [results, setResults] = useState(null);

  const calculateMacros = () => {
    const totalTDEE = parseInt(tdee);

    let protein, carbs, fats;

    switch (goal) {
      case 'buildMuscle':
        protein = totalTDEE * 0.35 / 4;
        carbs = totalTDEE * 0.45 / 4;
        fats = totalTDEE * 0.20 / 9;
        break;
      case 'burnFat':
        protein = totalTDEE * 0.40 / 4;
        carbs = totalTDEE * 0.30 / 4;
        fats = totalTDEE * 0.30 / 9;
        break;
      case 'bodyRecomposition':
        protein = totalTDEE * 0.30 / 4;
        carbs = totalTDEE * 0.40 / 4;
        fats = totalTDEE * 0.30 / 9;
        break;
      default:
        break;
    }

    setResults({
      calories: Math.round(totalTDEE),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats),
    });
  };

  return (
    <div id='macro' className='container mt-5 mx-auto'>
      <h2>Macro Calculator: Tailoring Nutrition to Your Goals</h2>

<p>The Macro Nutrient Calculator is a tool designed to help individuals customize their daily macronutrient intake based on their Total Daily Energy Expenditure (TDEE) and specific fitness goals. Here's how it works:</p>

<ol>
    <li><strong>Enter TDEE:</strong> Start by inputting your Total Daily Energy Expenditure, an estimate of the calories your body needs to maintain its current weight considering your activity level.</li>

    <li><strong>Select Your Goal:</strong>
        <ul>
            <li><strong>Build Muscle:</strong> This goal is ideal for those aiming to increase muscle mass. The calculator adjusts protein, carbs, and fats to support muscle growth.</li>
            <li><strong>Burn Fat:</strong> Geared towards individuals looking to shed excess body fat, this option emphasizes a balance that encourages fat loss while preserving muscle mass.</li>
            <li><strong>Body Recomposition:</strong> For those seeking a combination of muscle gain and fat loss, this goal balances macronutrients to support both objectives.</li>
        </ul>
    </li>

    <li><strong>Get Your Recommendations:</strong> The calculator then provides personalized recommendations for daily caloric intake, protein, carbs, and fats, aligning with your selected goal.</li>
</ol>

<h2>Why Use the Macro Calculator?</h2>
<ul>
    <li><strong>Precision:</strong> Tailoring macronutrients to your goal ensures a more precise nutrition plan.</li>
    <li><strong>Efficiency:</strong> Maximize your fitness journey by fueling your body with the right nutrients.</li>
    <li><strong>Flexibility:</strong> Adjust your nutrition plan as your goals evolve, promoting long-term success.</li>
</ul>

<p>Whether you're on a muscle-building mission, aiming to burn fat, or pursuing a balanced approach, the Macro Nutrient Calculator simplifies the process, making nutrition optimization accessible to all.</p>
    <div className='container text-center mt-5'>
      <h2 className="mb-4">Macro Nutrient Calculator</h2>
      <div className="mb-3">
        <label htmlFor="tdee" className="form-label">
          Total Daily Energy Expenditure (TDEE):
        </label>
        <input
          type="number"
          className="form-control"
          id="tdee"
          value={tdee}
          onChange={(e) => setTDEE(Math.max(1, parseInt(e.target.value)))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="goal" className="form-label">
          Goal:
        </label>
        <select
          className="form-select"
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="buildMuscle">Build Muscle</option>
          <option value="burnFat">Burn Fat</option>
          <option value="bodyRecomposition">Body Recomposition</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={calculateMacros}>
        Calculate Macros
      </button>
      {results && (
        <div className="mt-3">
          <h3>Recommended Daily Intake:</h3>
          <p>Calories: {results.calories} kcal</p>
          <p>Protein: {results.protein} grams</p>
          <p>Carbs: {results.carbs} grams</p>
          <p>Fats: {results.fats} grams</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default MacroCalculator;
