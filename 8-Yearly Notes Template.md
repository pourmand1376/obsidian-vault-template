---
<%*
const prev_year = moment(tp.file.title, 'YYYY').subtract(1, 'year').format('YYYY');
const next_year = moment(tp.file.title, 'YYYY').add(1, 'year').format('YYYY');
const year = moment(tp.file.title, 'YYYY').format('YYYY');
%>
prev_year: "[[Journaling/YearlyNotes/<% prev_year %>|<% prev_year %>]]"
next_year: "[[Journaling/YearlyNotes/<% next_year %>|<% next_year %>]]"
quarters:
  - "[[Journaling/QuarterlyNotes/<% year %>-Q1|<% year %>-Q1]]"
  - "[[Journaling/QuarterlyNotes/<% year %>-Q2|<% year %>-Q2]]"
  - "[[Journaling/QuarterlyNotes/<% year %>-Q3|<% year %>-Q3]]"
  - "[[Journaling/QuarterlyNotes/<% year %>-Q4|<% year %>-Q4]]"
tags:
  - journaling
---

#### امسال چه کارهایی قرار بکنم؟


#### امسال چه کارهایی کردم؟
