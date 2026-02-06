import React from 'react';

const KeyDates = () => {
  return (
    <section className="key-dates-section">
      <div className="key-dates-container">
        <div className="key-dates-header">
          <h2>Key Dates</h2>
          <p>Mark your calendar for the key dates of TechnoPHILIA 2026.</p>
        </div>

        <div className="dates-table-container">
          <table className="dates-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registration starts</td>
                <td>1ˢᵗ Feb 2026</td>
              </tr>
              <tr>
                <td>Registration End</td>
                <td>20ᵗʰ March  2026</td>
              </tr>
              <tr>
                <td>Competition date</td>
                <td>27ᵗʰ March 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default KeyDates;