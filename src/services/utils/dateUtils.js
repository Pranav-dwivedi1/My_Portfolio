import moment from "moment-timezone";

// Function to get current time in Asia/Kolkata timezone
const getCurrentDateTimeMoment = () => {
  return moment.tz("Asia/Kolkata");
};

const DateUtils = {
  // Format date as YYYY-MM-DD
  getDateYyyyMmDd: (date) => {
    return moment(date).tz("Asia/Kolkata").format("YYYY-MM-DD");
  },

  // Get current date as YYYY-MM-DD
  getCurrentDate: () => {
    return getCurrentDateTimeMoment().format("YYYY-MM-DD");
  },

  // Get current date in DD-MM-YYYY format
  getCurrentDateFormat: () => {
    return getCurrentDateTimeMoment().format("DD-MM-YYYY");
  },

  // Convert date to DD-MM-YYYY format
  getExDateFormat: (date) => {
    return moment(date).tz("Asia/Kolkata").format("DD-MM-YYYY");
  },

  // Get current date and time in YYYY-MM-DD HH:mm:ss format
  getCurrentDateTime: () => {
    return getCurrentDateTimeMoment().format("YYYY-MM-DD HH:mm:ss");
  },

  // Get date 'X' days before the current date
  getTMinusDate: (days) => {
    return getCurrentDateTimeMoment().subtract(days, "days").format("YYYY-MM-DD");
  },

  // Get date 'X' days after the current date
  getTPlusDate: (days) => {
    return getCurrentDateTimeMoment().add(days, "days").format("YYYY-MM-DD");
  },

  // Get date and time 'X' days before the current date
  getTMinusDateTime: (days) => {
    return getCurrentDateTimeMoment().subtract(days, "days").format("YYYY-MM-DD HH:mm:ss");
  },

  // Get date and time 'X' days after the current date
  getTPlusDateTime: (days) => {
    return getCurrentDateTimeMoment().add(days, "days").format("YYYY-MM-DD HH:mm:ss");
  },

  // Convert a date to DD-MM-YYYY format
  convertDate: (date) => {
    return moment(date).tz("Asia/Kolkata").format("DD-MM-YYYY");
  },

  // Convert DD-MM-YYYY to YYYY-MM-DD
  convertDateReverse: (date) => {
    return moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");
  },

  // Convert time to HH:mm format
  convertTime: (time) => {
    return moment(time).tz("Asia/Kolkata").format("HH:mm");
  },

  // Get current time in HH:mm format
  getCurrentTime: () => {
    return moment().tz("Asia/Kolkata").format("HH:mm");
  },

  // Get the month number (MM) after adding 7 days
  getAddedMonth: (date) => {
    return moment(date).add(7, "days").format("MM");
  },

  // Get the difference in days between two dates
  getDifferenceDate: (dateFrom, dateTo) => {
    return moment(dateFrom).diff(dateTo, "days");
  },

  // Convert Unix timestamp to DD-MM-YY / HH:mm format
  convertUnixTimestamp: (timestamp) => {
    return moment.unix(timestamp).tz("Asia/Kolkata").format("DD-MM-YY / HH:mm");
  },

  // Convert Unix timestamp to MMM DD, YYYY format
  convertUnixTimestampMmm: (timestamp) => {
    return moment.unix(timestamp).tz("Asia/Kolkata").format("MMM DD, YYYY");
  }
};

export default DateUtils;
