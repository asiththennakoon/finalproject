import React, { useState, useEffect } from "react";

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

const submitAPI = function(formData) {
  return true;
};

const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(name && date && time && guests > 0 && occasion);
  }, [name, date, time, guests, occasion]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValid && availableTimes.includes(time)) {
      const newTime = { name, date, time, guests, occasion };
      const result = await submitAPI(newTime);

      if (result) {
        setAvailableTimes((prevTimes) => prevTimes.filter((t) => t !== time));
        setName("");
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
        setMessage(`Thank you ${name}, your reservation has been booked.`);
      } else {
        setMessage("Sorry, there was an issue processing your booking. Please try again later.");
      }
    } else {
      setMessage("Sorry, this time slot is already booked. Please select a different time.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-name">Your Name</label>
      <input
        required
        type="text"
        id="res-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="res-date">Choose date</label>
      <input
        required
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        required
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">--Please choose a time--</option>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="res-guests">Number of guests</label>
      <input
        required
        type="number"
        id="res-guests"
        min="1"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
            <label htmlFor="res-occasion">Occasion</label>
      <select
        required
        id="res-occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">Select an Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Business">Business</option>
        <option value="Casual">Casual</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" disabled={!isValid}>Submit reservation</button>
      {message && <p>{message}</p>}
    </form>
  );
};

const Booking = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date().toISOString().split('T')[0]; // get today's date in YYYY-MM-DD format
      const times = await fetchAPI(new Date(today)); // use the API to fetch available times
      setAvailableTimes(times);
    };

    initializeTimes();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ color: '#333', marginBottom: '1rem' }}>Booking the Little Lemon</h1>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
    </div>
  );
};

export default Booking;
