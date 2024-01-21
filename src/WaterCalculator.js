import React, { useState } from 'react';

const WaterCalculator = () => {
  const [weight, setWeight] = useState(1);
  const [waterIntake, setWaterIntake] = useState(null);

  const calculateWaterIntake = () => {
    // Water Intake Calculation (Fluid ounces)
    const calculatedWaterIntake = weight * 0.67; // Adjust the multiplier as needed

    // Display the result or use it as needed
    setWaterIntake(calculatedWaterIntake.toFixed(2));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Water Intake Calculator</h5>
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
          <button type="button" className="btn btn-primary" onClick={calculateWaterIntake}>
            Calculate
          </button>
          {waterIntake !== null && <div className="mt-2">Estimated Water Intake: {waterIntake} fl oz/day</div>}
        </form>
      </div>
    </div>
  );
};

export default WaterCalculator;
