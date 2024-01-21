import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [weight, setWeight] = useState(1);
  const [height, setHeight] = useState(1);
  const [age, setAge] = useState(1);
  const [gender, setGender] = useState('male'); // 'male' or 'female'
  const [activityLevel, setActivityLevel] = useState('sedentary'); // 'sedentary', 'lightlyActive', 'moderatelyActive', 'veryActive'

  const [caloricNeeds, setCaloricNeeds] = useState(null);

  const calculateCaloricNeeds = () => {
    // Caloric Needs Calculation (using Harris-Benedict equation)
    let baseCalories;
    if (gender === 'male') {
      baseCalories = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      baseCalories = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }

    const activityMultipliers = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
    };

    const totalCaloricNeeds = baseCalories * activityMultipliers[activityLevel];

    // Display the result or use it as needed
    setCaloricNeeds(totalCaloricNeeds.toFixed(2));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Calorie Calculator</h5>
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
            <label htmlFor="height" className="form-label">
              Height (inches):
            </label>
            <input
              type="number"
              className="form-control"
              id="height"
              value={height}
              onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value)))}
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
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="veryActive">Very Active</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary" onClick={calculateCaloricNeeds}>
            Calculate
          </button>
          {caloricNeeds !== null && <div className="mt-2">Estimated Daily Caloric Needs: {caloricNeeds} calories</div>}
        </form>
      </div>
    </div>
  );
};

export default CalorieCalculator;
