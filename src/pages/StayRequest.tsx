import React, { useState } from 'react';

export default function StayRequest() {
  const [reason, setReason] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      reason,
      startDate,
      endDate,
    };

    console.log('Submitted Stay Request:', data);
    setSubmitted(true);

    // TODO: Send to backend via Axios or Amplify API
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Request to Stay at Sri Lankaramaya</h2>
      {submitted ? (
        <p>Your request has been submitted. Await approval.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Reason for Stay</label><br />
            <textarea value={reason} onChange={e => setReason(e.target.value)} required />
          </div>
          <div>
            <label>Start Date</label><br />
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
          </div>
          <div>
            <label>End Date</label><br />
            <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required />
          </div>
          <button type="submit" style={{ marginTop: '1rem' }}>Submit Request</button>
        </form>
      )}
    </div>
  );
}