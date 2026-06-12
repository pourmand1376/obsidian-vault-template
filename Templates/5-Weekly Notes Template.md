---
<%*
const sat = tp.user.satWeek();
const start = sat.startFromLabel(tp.file.title);
const end = start.clone().add(6, 'days');
const first_day = start.format('YYYY-MM-DD');
const last_day = end.format('YYYY-MM-DD');
const prev_week = sat.label(start.clone().subtract(1, 'week'));
const next_week = sat.label(start.clone().add(1, 'week'));
const labels = { 0: 'یکشنبه', 1: 'دوشنبه', 2: 'سه‌شنبه', 3: 'چهارشنبه', 4: 'پنج‌شنبه', 5: 'جمعه', 6: 'شنبه' };
const days = Array.from({length: 7}, (_, i) => start.clone().add(i, 'day'));
const majority = (vals) => Object.entries(vals.reduce((a, v) => (a[v] = (a[v] || 0) + 1, a), {}))
  .sort((a, b) => b[1] - a[1])[0][0];
const monthsList = [...new Set(days.map(d => d.format('YYYY-MM')))];
const monthYaml = monthsList.length === 1
  ? `month: "[[Journaling/MonthlyNotes/${monthsList[0]}|${monthsList[0]}]]"`
  : 'month:\n' + monthsList.map(v => `  - "[[Journaling/MonthlyNotes/${v}|${v}]]"`).join('\n');
const quarter = majority(days.map(d => d.format('YYYY-[Q]Q')));
const year = majority(days.map(d => d.format('YYYY')));
const daysYaml = days.map(d =>
  `  - "[[Journaling/DailyNotes/${d.format('YYYY-MM')}/${d.format('YYYY-MM-DD')}|${labels[d.day()]}]]"`
).join('\n');
%>
first_day: <% first_day %>
last_day: <% last_day %>
<% monthYaml %>
quarter: "[[Journaling/QuarterlyNotes/<% quarter %>|<% quarter %>]]"
year: "[[Journaling/YearlyNotes/<% year %>|<% year %>]]"
prev_week: "[[Journaling/WeeklyNotes/<% prev_week %>|<% prev_week %>]]"
next_week: "[[Journaling/WeeklyNotes/<% next_week %>|<% next_week %>]]"
days:
<% daysYaml %>
tags:
  - journaling
---


### اهداف اصلی این هفته


#### گزارش هفتگی

