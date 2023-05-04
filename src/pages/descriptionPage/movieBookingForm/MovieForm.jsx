import React, { useState } from "react";
import "./movieForm.css";
import toast from "react-hot-toast";
function MovieBookingForm({ data }) {
  const [show] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seats: 1,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      movie: show?.name,
      seats: formData.seats,
    };
    toast.success("Ticket Booked Successfully");
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="booking-form">
      <h3 className="booking-form-movie-title">
        {data && "Book Tickets for " + data.name + " Movie"}
      </h3>
      <div className="form">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" tmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="seats">
              Seats
            </label>
            <input
              type="number"
              className="form-control"
              id="seats"
              name="seats"
              value={formData.seats}
              min="1"
              max="10"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit">
            Book Ticket
          </button>
        </form>
      </div>
    </div>
  );
}

export default MovieBookingForm;
