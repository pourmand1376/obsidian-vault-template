---
<%*
const wkLabel = tp.user.satWeek().label(tp.file.title);
%>
date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
day: <% tp.date.now("dddd", 0, tp.file.title, "YYYY-MM-DD") %>
shamsi: <% tp.user.getShamsiDate(tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD")) %>
week: "[[Journaling/WeeklyNotes/<% wkLabel %>|<% wkLabel %>]]"
month: "[[Journaling/MonthlyNotes/<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM", 0, tp.file.title, "YYYY-MM-DD") %>]]"
quarter: "[[Journaling/QuarterlyNotes/<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-[Q]Q", 0, tp.file.title, "YYYY-MM-DD") %>]]"
year: "[[Journaling/YearlyNotes/<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY", 0, tp.file.title, "YYYY-MM-DD") %>]]"
yesterday: "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", -1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]]"
tomorrow: "[[Journaling/DailyNotes/<% tp.date.now("YYYY-MM", 1, tp.file.title, "YYYY-MM-DD") %>/<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]]"
tags:
  - journaling
aliases:
  - <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
mood:
---


### برنامه‌ریزی امروز


### خاطرات امروز
