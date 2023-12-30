const UserInput = ({ userInput, onChange }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInput;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            name="initialInvestment"
            value={initialInvestment}
            placeholder="Enter an amount"
            required
            onChange={(event) =>
              onChange(event.target.name, event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            name="annualInvestment"
            value={annualInvestment}
            placeholder="Enter an amount"
            required
            onChange={(event) =>
              onChange(event.target.name, event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            id="expected-return"
            name="expectedReturn"
            value={expectedReturn}
            placeholder="Enter an amount"
            required
            onChange={(event) =>
              onChange(event.target.name, event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={duration}
            placeholder="Enter an amount"
            required
            onChange={(event) =>
              onChange(event.target.name, event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
