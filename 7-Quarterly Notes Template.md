---
<%*
const first_day = moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').format('YYYY-MM-DD');
const last_day = moment(tp.file.title, 'YYYY-[Q]Q').endOf('quarter').format('YYYY-MM-DD');
const month1 = moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').format('YYYY-MM');
const month2 = moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').add(1, 'month').format('YYYY-MM');
const month3 = moment(tp.file.title, 'YYYY-[Q]Q').startOf('quarter').add(2, 'month').format('YYYY-MM');
const prev_quarter = moment(tp.file.title, 'YYYY-[Q]Q').subtract(1, 'quarter').format('YYYY-[Q]Q');
const next_quarter = moment(tp.file.title, 'YYYY-[Q]Q').add(1, 'quarter').format('YYYY-[Q]Q');
%>
first_day: <% first_day %>
last_day: <% last_day %>
year: "[[Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, first_day, "YYYY-MM-DD") %>|<% tp.date.now("YYYY", 0, first_day, "YYYY-MM-DD") %>]]"
prev_quarter: "[[Journaling/QuarterlyNotes/<% prev_quarter %>|<% prev_quarter %>]]"
next_quarter: "[[Journaling/QuarterlyNotes/<% next_quarter %>|<% next_quarter %>]]"
months:
  - "[[Journaling/MonthlyNotes/<% month1 %>|<% month1 %>]]"
  - "[[Journaling/MonthlyNotes/<% month2 %>|<% month2 %>]]"
  - "[[Journaling/MonthlyNotes/<% month3 %>|<% month3 %>]]"
tags:
  - journaling
---


#### این‌ فصل چه کارهایی قرار بکنم؟


#### این فصل چه کارهایی کردم؟

