import { h, app } from "hyperapp";

const secondsPerMinute = 60;
const secondsPerHour = 60 * secondsPerMinute;
const secondsPerDay = 24 * secondsPerHour;
const secondsPerYear = 365 * secondsPerDay;

// date2 > date1
function diffDate(diff) {
  const years = Math.floor(diff / secondsPerYear);
  let remainder = diff % secondsPerYear;

  const days = Math.floor(remainder / secondsPerDay);
  remainder = remainder % secondsPerDay;

  const hours = Math.floor(remainder / secondsPerHour);
  remainder = remainder % secondsPerHour;

  const minutes = Math.floor(remainder / secondsPerMinute);
  remainder = remainder % secondsPerMinute;

  return { years, days, hours, minutes, seconds: remainder };
}

function formatDiff({ years, days, hours, minutes, seconds }) {
  let str = "";
  if (years > 0) {
    str += `${years} år, `;
  }

  if (days > 0) {
    str += `${days} dager, `;
  }

  if (hours > 0) {
    str += `${hours} timer, `;
  }

  if (minutes > 0) {
    str += `${minutes} minutter, `;
  }

  if (seconds > 0) {
    str += `og ${seconds} sekunder`;
  }

  return str.replace(/^og\ /, "").replace(/,\ $/, "");
}

const byggestartDato = new Date(2021, 0, 1);
const today = new Date();

const state = {
  secondsLeft: Math.floor((byggestartDato.getTime() - today.getTime()) / 1000)
};
const actions = {
  decrement: value => ({ secondsLeft }) => ({ secondsLeft: secondsLeft - 1 })
};

const view = state => (
  <div className="vh-100 flex justify-center items-center">
    <h1 className="f3 f1-ns ph3 ph1-ns tc light-yellow">
      {formatDiff(diffDate(state.secondsLeft))} til byggestart{" "}
      <i className="em-svg em-bullettrain_side" style="margin-right: 0.5em;" />
      <i className="em-svg em-smile" style="margin-right: 0.5em;" />
      <i className="em-svg em-railway_car" />
    </h1>
  </div>
);

const countdownApp = app(state, actions, view, document.body);

setInterval(countdownApp.decrement, 1000, 0);
