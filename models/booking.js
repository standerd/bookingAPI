const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Booking Schema For Mongo DB

const bookings = new Schema({
  userId: { type: String, require: true },
  propertyId: { type: String, require: true },
  checkInDate: { type: String, require: true },
  checkOutDate: { type: String, require: true },
  guestCount: { type: String, require: true },
  totalBookingCost: { type: String, require: true },
  bookingDate: { type: Date, require: true },
  destination: { type: String, require: true },
  imageSrc: { type: String, require: true },
  entityName: { type: String, require: true },
  messages: { type: Array, require: false }
});

module.exports = mongoose.model("Booking", bookings);
