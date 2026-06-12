# Obsidian Persian Journal Templates

> A drop-in Obsidian template pack that turns your vault into a **Persian-calendar journaling workhorse** — Shamsi dates, Saturday-anchored weeks, and a fully auto-linked daily → yearly note chain.

Most journaling setups assume English week conventions and the Gregorian calendar. This pack is built for the way Iranian / Persian-speaking knowledge workers actually plan their week — without giving up the polished UX of Obsidian's periodic-notes plugins.

## Features

- **Shamsi (Jalali) calendar** support — `tp.user.getShamsiDate()` converts Gregorian timestamps into Persian dates inline in any template.
- **Saturday-anchored weeks** — `tp.user.satWeek()` provides ISO-style week math where weeks run Sat → Fri and week 1 of year `Y` is the week containing Jan 1 of `Y`. Matches the Iranian working week.
- **Full daily → weekly → monthly → quarterly → yearly chain** — every period note links to its parent, children, and siblings (prev/next, yesterday/tomorrow). No manual back-linking.
- **Atomic-note frontmatter** for Zettelkasten capture, with Gregorian + Shamsi timestamps and an Obsidian calendar back-link.
- **Meeting note skeleton** — auto-tags `meeting` and renames the file to the current date+hour.
- **Cornell-method note skeleton** — auto-tags `cornell`, ready-made section headers.
- **Family-tree person template** — frontmatter fields for father / mother / spouse / children.
- **Blank-line cleanup snippet** — collapse runs of empty lines in the current note.

## Compatible plugins

| Plugin | Role |
|---|---|
| [Templater](https://github.com/SilentVoid13/Templater) | **Required.** The engine that runs every template. |
| Daily Notes (core) | Open today's note with a hotkey + ribbon icon. |
| [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) | Same idea as Daily Notes, but for weekly / monthly / quarterly / yearly too. |
| [Notebook Navigator](https://github.com/johansatge/notebook-navigator) | Sidebar that renders the journal as a calendar tree. |
| [Calendar](https://github.com/liamcain/obsidian-calendar-plugin) | Mini-calendar sidebar; clicking a day opens its daily note. |

## Requirements

- Obsidian 1.4+
- Templater plugin (required)

Everything else is optional. The templates work standalone — extras just give you nicer ways to open today's note.

## Install

Drop the files into a folder in your vault (e.g. `Templates/`). To track upstream updates, `git clone` straight into your vault:

```bash
cd /path/to/YourVault
git clone https://github.com/pourmand1376/obsidian-persian-journal-template.git Templates
```

The journaling templates assume your journal folder lives at `Journaling/` with these subfolders:

```
Journaling/
├── DailyNotes/YYYY-MM/YYYY-MM-DD.md
├── WeeklyNotes/YYYY-Www.md
├── MonthlyNotes/YYYY-MM.md
├── QuarterlyNotes/YYYY-QN.md
└── YearlyNotes/YYYY.md
```

If you use different folder names, search-and-replace `Journaling/...` inside templates 4–8.

## Configure Templater

1. **Settings → Templater**:
   - **Template folder location** → `Templates`
   - **Script files folder location** → `Templates/scripts` *(exposes `getShamsiDate.js` and `satWeek.js` as `tp.user.*`)*
   - **Trigger Templater on new file creation** → **On**
2. **Settings → Templater → Folder Templates** — one row per period:

   | Folder | Template |
   |---|---|
   | `Journaling/DailyNotes` | `Templates/4-Daily Notes Template.md` |
   | `Journaling/WeeklyNotes` | `Templates/5-Weekly Notes Template.md` |
   | `Journaling/MonthlyNotes` | `Templates/6-Monthly Notes Template.md` |
   | `Journaling/QuarterlyNotes` | `Templates/7-Quarterly Notes Template.md` |
   | `Journaling/YearlyNotes` | `Templates/8-Yearly Notes Template.md` |

Now any file you create inside one of those folders gets stamped automatically.

## Optional — Daily Notes (core plugin)

Adds a hotkey and ribbon icon to open today's note.

1. **Settings → Core plugins** → enable **Daily notes**.
2. **Settings → Daily notes**:
   - **New file location** → `Journaling/DailyNotes`
   - **Date format** → `YYYY-MM/YYYY-MM-DD` *(custom — nests each daily note under its month folder so the weekly/monthly templates' links resolve)*

## Optional — Notebook Navigator

Renders the journal as a calendar tree in the sidebar.

1. Install **Notebook Navigator** from the community plugins browser.
2. **Settings → Notebook Navigator → Calendar**:
   - **Root folder** → `Journaling`
   - **Daily notes** → `[DailyNotes]/YYYY-MM/YYYY-MM-DD`
   - **Weekly notes** → `[WeeklyNotes]/gggg-[W]ww`
   - **Monthly notes** → `[MonthlyNotes]/YYYY-MM`
   - **Quarterly notes** → `[QuarterlyNotes]/YYYY-[Q]Q`
   - **Yearly notes** → `[YearlyNotes]/YYYY`

The bracketed segments are literal folder names; the rest is a moment.js format string.

## Optional — Calendar

Mini-calendar in the sidebar. Daily notes work out of the box from your Daily Notes settings; weekly notes need one extra step.

1. Install **Calendar** from the community plugins browser.
2. **Settings → Calendar → Weekly notes**:
   - **Show weekly note** → **On**
   - **Weekly note format** → `gggg-[W]ww`
   - **Weekly note folder** → `Journaling/WeeklyNotes`
   - **Weekly note template** → `Templates/5-Weekly Notes Template.md` *(optional — Templater's folder template will fire either way)*

## Files

| File | What it is |
|---|---|
| `1-new-files.md` | Default frontmatter for atomic notes |
| `2-Meeting Note.md` | Meeting skeleton; auto-tags `meeting`, renames to date+hour |
| `3-Cornell Note.md` | Cornell-method skeleton; auto-tags `cornell` |
| `4-Daily Notes Template.md` | Daily, links to week/month/quarter/year/yesterday/tomorrow |
| `5-Weekly Notes Template.md` | Weekly, lists 7 days + parents + prev/next |
| `6-Monthly Notes Template.md` | Monthly, lists contained weeks + parent quarter/year |
| `7-Quarterly Notes Template.md` | Quarterly, lists 3 months |
| `8-Yearly Notes Template.md` | Yearly, lists 4 quarters |
| `9-Family Tree Template.md` | Person note with family fields |
| `0-remove-double-lines.md` | Snippet: collapse blank lines |
| `scripts/getShamsiDate.js` | `tp.user.getShamsiDate(date)` — Gregorian → Shamsi |
| `scripts/satWeek.js` | `tp.user.satWeek()` — Saturday-week math (`YYYY-Www`) |

## A note on GitHub rendering

GitHub flags most `.md` files as "invalid YAML frontmatter" and renders the block as raw text. That's expected — Templater's `<% %>` and `<%* %>` tags live inside the YAML and only become valid YAML after Templater interpolates them. The files work correctly in Obsidian.

## License

[MIT](LICENSE).

Extracted from [Amir Pourmand](https://github.com/pourmand1376)'s personal Obsidian vault.
