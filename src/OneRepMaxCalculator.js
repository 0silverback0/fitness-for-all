import React, { useState } from 'react';

const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [oneRepMax, setOneRepMax] = useState(null);
  const [error, setError] = useState('');

  const calculate1RM = () => {
    if (weight < 1 || reps < 1) {
      setError('Weight and Reps must be greater than or equal to 1.');
      setOneRepMax(null);
    } else {
      setError('');
      const calculated1RM = Math.round(weight / (1.0278 - 0.0278 * reps));
      setOneRepMax(calculated1RM);
    }
  };

  return (
    <div id='1rm' className="container mt-5 mx-auto">
      
        <div className="mt-5">
          <h2 className="text-center mb-4">1 Rep Max Calculator</h2>
          <div id="explanation-container">
            <h3>What is the 1 Rep Max (1RM)?</h3>
            <p>The 1 Rep Max, or 1RM, is a measure of the maximum amount of weight an individual can lift for a single repetition of a given exercise. It is commonly used in strength training to assess an individual's maximal strength in a specific lift.</p>

            <h3>How is 1 Rep Max Calculated?</h3>
            <p>The 1RM (1 Rep Max) is often estimated using a formula, as attempting a true 1RM lift can be strenuous and potentially risky. One widely used formula for estimating 1RM is the Epley formula:</p>
            <p>1RM = Weight Lifted × (1 + 0.0333 × Number of Repetitions)</p>
            <p>This formula takes into account the weight lifted and the number of repetitions performed. It assumes a linear relationship between the weight lifted and the potential 1RM, providing a reasonable estimate without the need to push to physical limits.</p>

            <h3>Why Use the 1 Rep Max Calculator?</h3>
            <ul>
              <li><strong>Safety:</strong> Estimating 1RM using a formula is safer than attempting a true 1RM lift, reducing the risk of injury.</li>
              <li><strong>Training Planning:</strong> Knowing your estimated 1RM helps in designing effective training programs with appropriate intensity and volume.</li>
              <li><strong>Progress Tracking:</strong> Regularly recalculating 1RM allows for tracking strength gains and adjusting workouts accordingly.</li>
            </ul>

            <h3>Note to Users:</h3>
            <p>Always prioritize safety when engaging in strength training. The 1 Rep Max Calculator serves as a valuable tool for planning and progression, but it's essential to listen to your body and use proper form during exercises.</p>
          </div>
          </div>
          <div className='card mb-3'>
            <div className='card-body'>
          <div className="mb-3 ">
          <h5 className="card-title">1RM Calculator</h5>
            <label htmlFor="weight" className="form-label">
              Weight Lifted (lbs):
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
            <label htmlFor="reps" className="form-label">
              Number of Repetitions:
            </label>
            <input
              type="number"
              className="form-control"
              id="reps"
              value={reps}
              onChange={(e) => setReps(Math.max(1, parseInt(e.target.value)))}
            />
          </div>
          <button className="btn btn-primary" onClick={calculate1RM}>
            Calculate 1 Rep Max
          </button>
          {error && <p className="text-danger mt-2">{error}</p>}
          {oneRepMax && (
            <p className="mt-3">
              Estimated 1 Rep Max: <strong>{oneRepMax} lbs</strong>
            </p>
          )}
          </div>
        </div>
      </div>
  );
};

export default OneRepMaxCalculator;
