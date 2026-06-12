# Obsidian Persian Journal Templates

[Obsidian](https://obsidian.md) [Templater](https://github.com/SilentVoid13/Templater) templates for a journaling / Zettelkasten workflow with **Shamsi (Jalali) dates** and **Saturday-anchored weeks** (Sat → Fri, matching the Iranian working week). Includes the full **daily → weekly → monthly → quarterly → yearly** chain with auto-generated back-links, plus meeting / Cornell / family-tree skeletons.

## Files

| File | What it is |
|---|---|
| `1-new-files.md` | Default frontmatter for atomic notes |
| `2-Meeting Note.md` | Meeting skeleton; auto-tags `meeting`, renames to date+hour |
| `3-Cornell Note.md` | Cornell-method skeleton; auto-tags `cornell` |
| `4-Daily Notes Template.md` | Daily, links to its week/month/quarter/year/yesterday/tomorrow |
| `5-Weekly Notes Template.md` | Weekly, lists 7 days + parents + prev/next |
| `6-Monthly Notes Template.md` | Monthly, lists contained weeks + parent quarter/year |
| `7-Quarterly Notes Template.md` | Quarterly, lists 3 months |
| `8-Yearly Notes Template.md` | Yearly, lists 4 quarters |
| `9-Family Tree Template.md` | Person note with family fields |
| `0-remove-double-lines.md` | Snippet: collapse blank lines |
| `scripts/getShamsiDate.js` | `tp.user.getShamsiDate(date)` — Gregorian → Shamsi |
| `scripts/satWeek.js` | `tp.user.satWeek()` — Saturday-week math (`YYYY-Www`) |

## Install

Drop the files into a folder in your vault — e.g. `Templates/`. To pull updates later, `git clone` straight into your vault:

```bash
cd /path/to/YourVault
git clone https://github.com/pourmand1376/obsidian-persian-journal-template.git Templates
```

The journaling templates read the **file name** as the date, so name your files `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM`, `YYYY-QN`, or `YYYY` (see each plugin section below — most plugins do this for you).

## Folder layout

The templates assume your journal lives here. If you use different folders, search-and-replace `Journaling/...` inside templates 4–8.

```
Journaling/
├── DailyNotes/YYYY-MM/YYYY-MM-DD.md
├── WeeklyNotes/YYYY-Www.md
├── MonthlyNotes/YYYY-MM.md
├── QuarterlyNotes/YYYY-QN.md
└── YearlyNotes/YYYY.md
```

## Supported plugins

At a minimum you need **Templater** — it's the engine that runs the templates. Everything else is optional and stacks on top: Daily Notes / Periodic Notes give you hotkeys to open today's note; Calendar adds a sidebar; Notebook Navigator renders the journal tree natively.

### Templater — required

The engine. Every `.md` file in this repo is Templater syntax.

1. Install **Templater** from the community plugins browser and enable it.
2. **Settings → Templater**:
   - **Template folder location** → `Templates`
   - **Script files folder location** → `Templates/scripts` *(this exposes `getShamsiDate.js` and `satWeek.js` as `tp.user.getShamsiDate(...)` / `tp.user.satWeek()`)*
   - **Trigger Templater on new file creation** → **On** *(so creating a file in a journal folder auto-applies the right template)*
3. **Settings → Templater → Folder Templates** — add one row per period:

   | Folder | Template |
   |---|---|
   | `Journaling/DailyNotes` | `Templates/4-Daily Notes Template.md` |
   | `Journaling/WeeklyNotes` | `Templates/5-Weekly Notes Template.md` |
   | `Journaling/MonthlyNotes` | `Templates/6-Monthly Notes Template.md` |
   | `Journaling/QuarterlyNotes` | `Templates/7-Quarterly Notes Template.md` |
   | `Journaling/YearlyNotes` | `Templates/8-Yearly Notes Template.md` |

Now any file you create inside one of those folders gets stamped automatically.

### Built-in Daily Notes plugin — optional

Adds a "Open today's daily note" command and ribbon icon, and makes `[[YYYY-MM-DD]]` links auto-create daily notes.

1. **Settings → Core plugins** → enable **Daily notes**.
2. **Settings → Daily notes**:
   - **New file location** → `Journaling/DailyNotes`
   - **Date format** → `YYYY-MM/YYYY-MM-DD` *(this is the crucial bit — it nests each daily note under its month folder, matching the layout the weekly/monthly templates link to)*
   - **Template file location** → leave **empty**. Templater's folder template handles creation; setting both makes the template fire twice.

Once configured, **Cmd/Ctrl-P → "Open today's daily note"** creates `Journaling/DailyNotes/2026-06/2026-06-12.md` and Templater stamps it with the right frontmatter.

### Periodic Notes plugin — optional, recommended

The community alternative to the built-in Daily Notes — adds the same "open today's note" command for **weekly / monthly / quarterly / yearly** as well, so you get one hotkey per period.

1. Install **Periodic Notes** from the community plugins browser. (When enabled, it takes over from the built-in Daily Notes — disable that one to avoid duplication.)
2. **Settings → Periodic Notes** — for each period, toggle it on and set:

   | Period | Format | Folder | Template |
   |---|---|---|---|
   | Daily | `YYYY-MM/YYYY-MM-DD` | `Journaling/DailyNotes` | `Templates/4-Daily Notes Template.md` |
   | Weekly | `YYYY-[W]ww` | `Journaling/WeeklyNotes` | `Templates/5-Weekly Notes Template.md` |
   | Monthly | `YYYY-MM` | `Journaling/MonthlyNotes` | `Templates/6-Monthly Notes Template.md` |
   | Quarterly | `YYYY-[Q]Q` | `Journaling/QuarterlyNotes` | `Templates/7-Quarterly Notes Template.md` |
   | Yearly | `YYYY` | `Journaling/YearlyNotes` | `Templates/8-Yearly Notes Template.md` |

3. **Caveat on weekly:** Periodic Notes uses **ISO weeks** by default (Mon–Sun, week 1 = first Thursday). This repo's templates use **Saturday-anchored** weeks via `satWeek.js` (Sat–Fri, week 1 = week containing Jan 1). For most weeks they label identically, but in edge weeks (around the year boundary, around DST) Periodic Notes' filename and this template's `prev_week` / `next_week` / day-of-week links can disagree by one. If that matters to you: either change Periodic Notes' "start of week" / first-week-of-year settings to match, or replace `satWeek.js` with ISO logic.

### Notebook Navigator plugin — optional

A file-tree sidebar that understands periodic notes — instead of showing `2026-06-12.md`, it shows "Friday, Jun 12" and groups by week/month/quarter/year.

1. Install **Notebook Navigator** from the community plugins browser.
2. **Settings → Notebook Navigator → Periodic notes folder** → `Journaling`.

That's it. Notebook Navigator detects the `DailyNotes` / `WeeklyNotes` / `MonthlyNotes` / `QuarterlyNotes` / `YearlyNotes` sub-folders automatically and renders the journal as a calendar tree in the sidebar.

### Calendar plugin — optional

A mini-calendar sidebar; clicking a day opens its daily note.

1. Install **Calendar** from the community plugins browser.
2. No extra config — it reads the built-in **Daily Notes** settings (folder + format), so as long as those are set as above, the calendar opens / creates files in the right place.

## GitHub rendering

GitHub flags most `.md` files as "invalid YAML frontmatter" and shows the block as raw text. Expected: Templater's `<% %>` and `<%* %>` tags live inside the YAML and only become valid YAML after Templater interpolates them. The files work correctly in Obsidian.

## License

[MIT](LICENSE).

Extracted from [Amir Pourmand](https://github.com/pourmand1376)'s personal Obsidian vault.
