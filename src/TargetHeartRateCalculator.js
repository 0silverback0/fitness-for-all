import React, { useState } from 'react';

const TargetHeartRateCalculator = () => {
  const [age, setAge] = useState(1);
  const [restingHeartRate, setRestingHeartRate] = useState(1);

  const calculateTargetHeartRate = () => {
    // Target Heart Rate Calculation (using Karvonen formula)
    const maxHeartRate = 220 - age;
    const heartRateReserve = maxHeartRate - restingHeartRate;

    // Calculate target heart rate range (50-85% of heart rate reserve)
    const lowerBound = restingHeartRate + 0.5 * heartRateReserve;
    const upperBound = restingHeartRate + 0.85 * heartRateReserve;

    return {
      lowerBound: Math.round(lowerBound),
      upperBound: Math.round(upperBound),
    };
  };

  const handleCalculate = () => {
    const targetHeartRate = calculateTargetHeartRate();
    alert(`Target Heart Rate Range: ${targetHeartRate.lowerBound} - ${targetHeartRate.upperBound}`);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Target Heart Rate Calculator</h5>
        <form>
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
            <label htmlFor="restingHeartRate" className="form-label">
              Resting Heart Rate:
            </label>
            <input
              type="number"
              className="form-control"
              id="restingHeartRate"
              value={restingHeartRate}
              onChange={(e) => setRestingHeartRate(Math.max(1, parseInt(e.target.value)))}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleCalculate}>
            Calculate
          </button>
        </form>
      </div>
    </div>
  );
};

export default TargetHeartRateCalculator;
