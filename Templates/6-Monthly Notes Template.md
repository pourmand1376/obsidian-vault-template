---
<%*
const sat = tp.user.satWeek();
const m = moment(tp.file.title, 'YYYY-MM');
const prev_month = m.clone().subtract(1, 'month').format('YYYY-MM');
const next_month = m.clone().add(1, 'month').format('YYYY-MM');
const last = m.clone().endOf('month');
const weeks = [];
let cur = sat.startOfWeek(m.clone().startOf('month'));
while (cur.isSameOrBefore(last, 'day')) {
  weeks.push(sat.label(cur));
  cur.add(1, 'week');
}
const weeksYaml = weeks.map(w => `  - "[[Journaling/WeeklyNotes/${w}|${w}]]"`).join('\n');
%>
quarter: "[[Journaling/QuarterlyNotes/<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM") %>]]"
year: "[[Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM") %>|<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM") %>]]"
prev_month: "[[Journaling/MonthlyNotes/<% prev_month %>|<% prev_month %>]]"
next_month: "[[Journaling/MonthlyNotes/<% next_month %>|<% next_month %>]]"
weeks:
<% weeksYaml %>
tags:
  - journaling
---

#### این‌ ماه چه کارهایی قرار بکنم؟


#### این ماه چه کارهایی کردم؟


#### از چه چیزهایی راضی بودم؟


#### چه کارهایی رو میشد بهتر انجام داد؟

