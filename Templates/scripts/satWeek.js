// Saturday-anchored week math.
// Convention: weeks start on Saturday; week 1 of year Y contains Jan 1 of Y.
// `moment` is provided globally by Templater/Obsidian.

function week1Start(year) {
  const jan1 = moment([year, 0, 1]);
  return jan1.clone().subtract((jan1.day() + 1) % 7, 'days');
}

function startOfWeek(date) {
  const m = moment.isMoment(date) ? date.clone() : moment(date);
  return m.subtract((m.day() + 1) % 7, 'days').startOf('day');
}

function label(date) {
  const ws = startOfWeek(date);
  let Y = ws.clone().add(6, 'days').year();
  while (ws.isBefore(week1Start(Y))) Y--;
  while (ws.isSameOrAfter(week1Start(Y + 1))) Y++;
  const wk = Math.floor(ws.diff(week1Start(Y), 'days') / 7) + 1;
  return `${Y}-W${String(wk).padStart(2, '0')}`;
}

function startFromLabel(weekLabel) {
  const m = weekLabel.match(/^(\d{4})-W(\d{1,2})$/);
  if (!m) return null;
  return week1Start(parseInt(m[1])).clone().add((parseInt(m[2]) - 1) * 7, 'days');
}

module.exports = function () {
  return { label, startOfWeek, startFromLabel };
};
