module.exports = {
  index,
};

const month = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

function index(req, res) {
  let d = new Date();
  const unix = Date.now();
  const hr = d.getUTCHours() < 10 ? `0${d.getUTCHours()}` : d.getUTCHours();
  const min =
    d.getUTCMinutes() < 10 ? `0${d.getUTCMinutes()}` : d.getUTCMinutes();
  const sec =
    d.getUTCSeconds() < 10 ? `0${d.getUTCSeconds()}` : d.getUTCSeconds();
  const utc = `${weekday[d.getUTCDay()]}, ${d.getUTCDate()} ${
    month[d.getUTCMonth()]
  } ${d.getUTCFullYear()} ${hr}:${min}:${sec} GMT`;
  res.json({ unix, utc });
}
