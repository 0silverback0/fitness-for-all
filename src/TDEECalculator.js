import React, { useState } from 'react';

const TDEECalculator = () => {
  const [weight, setWeight] = useState(1);
  const [heightFeet, setHeightFeet] = useState(1);
  const [heightInches, setHeightInches] = useState(0);
  const [age, setAge] = useState(1);
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [tdee, setTDEE] = useState(null);

  const calculateTDEE = () => {
    // Convert height to inches
    const heightInInches = heightFeet * 12 + heightInches;

    // TDEE Calculation (Harris-Benedict Equation)
    let basalMetabolicRate;

    if (gender === 'male') {
      basalMetabolicRate = 66 + 6.23 * weight + 12.7 * heightInInches - 6.8 * age;
    } else {
      basalMetabolicRate = 655 + 4.35 * weight + 4.7 * heightInInches - 4.7 * age;
    }

    const activityMultiplier = {
      sedentary: 1.2,
      lightActivity: 1.375,
      moderateActivity: 1.55,
      veryActive: 1.725,
      extremelyActive: 1.9,
    };

    const calculatedTDEE = basalMetabolicRate * activityMultiplier[activityLevel];

    // Display the result or use it as needed
    setTDEE(calculatedTDEE.toFixed(2));
  };

  return (
    <div id='tdee' className='container mt-5 mx-auto'>
      <h2>Total Daily Energy Expenditure Calculator</h2>

<p>Calculating your Total Daily Energy Expenditure (TDEE) is a valuable step towards optimizing your fitness journey. Here's a breakdown of how to use the TDEE calculator effectively:</p>

<ol>
  <li><strong>Input Information:</strong> Begin by entering essential details like age, weight, height, gender, and activity level. Accuracy ensures precise results.</li>
  <li><strong>Activity Level:</strong> Choose your activity level, ranging from sedentary (little or no exercise) to highly active (intense exercise or physical job).</li>
  <li><strong>Hit Calculate:</strong> Click the "Calculate" button to unveil your TDEE, representing the total calories your body needs daily.</li>
</ol>

<p>Why does it matter? Your TDEE serves as a cornerstone for:</p>

<ul>
  <li><strong>Nutritional Planning:</strong> Tailor your diet to meet your specific calorie requirements.</li>
  <li><strong>Weight Management:</strong> Whether you aim to lose, maintain, or gain weight, knowing your TDEE guides your calorie intake.</li>
  <li><strong>Fitness Strategy:</strong> Plan workout routines aligned with your energy needs for optimal results.</li>
</ul>

<p>Empower your fitness journey by unlocking the insights provided by the TDEE calculator!</p>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">TDEE Calculator</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              Weight (lbs):
            </label>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value)))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="heightFeet" className="form-label">
              Height (feet):
            </label>
            <input
              type="number"
              className="form-control"
              id="heightFeet"
              value={heightFeet}
              onChange={(e) => setHeightFeet(Math.max(1, parseInt(e.target.value)))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="heightInches" className="form-label">
              Height (inches):
            </label>
            <input
              type="number"
              className="form-control"
              id="heightInches"
              value={heightInches}
              onChange={(e) => setHeightInches(Math.max(0, parseInt(e.target.value)))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(Math.max(1, parseInt(e.target.value)))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <select
              className="form-select"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="activityLevel" className="form-label">
              Activity Level:
            </label>
            <select
              className="form-select"
              id="activityLevel"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="lightActivity">Lightly active (light exercise/sports 1-3 days/week)</option>
              <option value="moderateActivity">Moderately active (moderate exercise/sports 3-5 days/week)</option>
              <option value="veryActive">Very active (hard exercise/sports 6-7 days a week)</option>
              <option value="extremelyActive">Extremely active (very hard exercise/sports & physical job or 2x training)</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary" onClick={calculateTDEE}>
            Calculate
          </button>
          {tdee !== null && <div className="mt-2">Estimated TDEE: {tdee} calories/day</div>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default TDEECalculator;
