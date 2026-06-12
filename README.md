# Obsidian Persian Journal Templates

A set of [Obsidian](https://obsidian.md) [Templater](https://github.com/SilentVoid13/Templater) templates for a personal-knowledge / journaling workflow built around:

- **Shamsi (Jalali / Persian) calendar** dates alongside Gregorian
- **Saturday-anchored weeks** (week 1 of year Y = the week containing Jan 1; days run Sat → Fri), matching the Iranian working week
- A full **daily → weekly → monthly → quarterly → yearly** journaling chain with auto-generated back-links between every period
- Standalone templates for **meeting notes**, **Cornell notes**, and a **family tree** entry

All templates are written in mixed Persian / English — section headings are in Persian, but the metadata, scripts, and template logic are language-agnostic, so you can adapt the prose to whatever language you write in.

## Requirements

- Obsidian 1.4+
- [Templater](https://github.com/SilentVoid13/Templater) plugin (required — every template uses Templater syntax)
- The built-in **Daily Notes** / **Periodic Notes** plugin if you want hotkeys for "open today's note" etc. (optional)

## Repository contents

```
.
├── 0-remove-double-lines.md      # Templater snippet: collapse multiple blank lines in the current note
├── 1-new-files.md                # Default frontmatter for a fresh atomic note (Zettelkasten style)
├── 2-Meeting Note.md             # Meeting note skeleton; auto-tags `meeting` and renames file to current date+hour
├── 3-Cornell Note.md             # Cornell-method note skeleton; auto-tags `cornell`
├── 4-Daily Notes Template.md     # Daily journal with links to its week / month / quarter / year / yesterday / tomorrow
├── 5-Weekly Notes Template.md    # Weekly journal listing all 7 days + prev/next week + parent month(s) / quarter / year
├── 6-Monthly Notes Template.md   # Monthly journal listing every contained week + parent quarter / year
├── 7-Quarterly Notes Template.md # Quarterly journal listing its 3 months + parent year
├── 8-Yearly Notes Template.md    # Yearly journal listing its 4 quarters
├── 9-Family Tree Template.md     # Person note with father / mother / spouse / children fields
└── scripts/
    ├── getShamsiDate.js          # Templater user script: Gregorian → Shamsi date converter
    └── satWeek.js                # Templater user script: Saturday-anchored ISO-style week math
```

## Installation

### 1. Copy the files into your vault

Drop the contents of this repo into a folder inside your Obsidian vault — e.g. `Templates/`:

```
YourVault/
└── Templates/
    ├── 0-remove-double-lines.md
    ├── 1-new-files.md
    ├── ...
    └── scripts/
        ├── getShamsiDate.js
        └── satWeek.js
```

You can also `git clone` straight into your vault if you want to track upstream updates:

```bash
cd /path/to/YourVault
git clone https://github.com/pourmand1376/obsidian-persian-journal-template.git Templates
```

### 2. Configure Templater

Open **Settings → Templater** and set:

| Setting | Value |
|---|---|
| Template folder location | `Templates` |
| Script files folder location | `Templates/scripts` |
| Trigger Templater on new file creation | **On** (recommended) |

Templater exposes every `.js` file under the script folder as `tp.user.<filename>()`. After Obsidian reloads, you should be able to call `tp.user.getShamsiDate(...)` and `tp.user.satWeek()` from any template.

### 3. Wire up folder templates (for the journaling chain)

The daily / weekly / monthly / quarterly / yearly templates assume your journal lives at:

```
Journaling/
├── DailyNotes/YYYY-MM/YYYY-MM-DD.md
├── WeeklyNotes/YYYY-Www.md
├── MonthlyNotes/YYYY-MM.md
├── QuarterlyNotes/YYYY-QN.md
└── YearlyNotes/YYYY.md
```

If you use a different layout, edit the link paths inside templates 4–8 to match — they are plain strings inside the YAML frontmatter.

In **Settings → Templater → Folder Templates**, add one entry per period:

| Folder | Template |
|---|---|
| `Journaling/DailyNotes` | `Templates/4-Daily Notes Template.md` |
| `Journaling/WeeklyNotes` | `Templates/5-Weekly Notes Template.md` |
| `Journaling/MonthlyNotes` | `Templates/6-Monthly Notes Template.md` |
| `Journaling/QuarterlyNotes` | `Templates/7-Quarterly Notes Template.md` |
| `Journaling/YearlyNotes` | `Templates/8-Yearly Notes Template.md` |

Now any new file you create inside one of those folders is auto-stamped with the right frontmatter.

> **Important:** the templates read the **file name** as the date/period, so name your files `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM`, `YYYY-QN`, or `YYYY`. Templater's date variables fall back to "today" only if the file name isn't a valid date.

### 4. (Optional) Use with the Periodic Notes plugin

If you use the **Periodic Notes** community plugin to open today's note with a hotkey, point each period's "Note Template" at the matching file in this repo and its "Format" at the file-name pattern above.

## Conventions used by the templates

### Frontmatter for atomic notes (`1-new-files.md`)

```yaml
---
created:  2026-06-12 11:24:01      # Gregorian timestamp
shamsi:   1405-03-22 11:24:01      # Shamsi timestamp (auto from `created`)
calendar: "[[2026-06-12]]"         # Link to the daily note
tags:
aliases:
title:
publish:                            # leave blank for private; `true` to publish
---
```

### Saturday-anchored weeks

`scripts/satWeek.js` implements an ISO-like week scheme where:

- Week 1 of year **Y** is the week **containing Jan 1 of Y**.
- Weeks run **Saturday → Friday** (the standard Iranian working week).
- Labels look like `2026-W23`.

API (available inside any template as `tp.user.satWeek()`):

```js
const sat = tp.user.satWeek();
sat.label(date)                  // -> "YYYY-Www"
sat.startOfWeek(date)            // -> moment for that week's Saturday
sat.startFromLabel("2026-W23")   // -> moment for the Saturday that starts the labelled week
```

### Shamsi date converter

`scripts/getShamsiDate.js` is a dependency-free Gregorian → Jalali converter (good through years 1600–2200). Call it as:

```js
tp.user.getShamsiDate("2026-06-12")            // -> "1405-03-22"
tp.user.getShamsiDate("2026-06-12 11:24:00")   // -> "1405-03-22 11:24:00"
tp.user.getShamsiDate()                         // -> Shamsi date for "now"
```

## Customising

- **Change the calendar / week convention.** Edit `scripts/satWeek.js`; the rest of the templates derive every label from it, so changing one file propagates everywhere.
- **Different journal folder layout.** Search-and-replace `Journaling/DailyNotes`, `Journaling/WeeklyNotes`, etc. in templates 4–8.
- **Different prompts in journal entries.** The body of templates 4–8 is plain Markdown — replace the Persian section headers with your own.
- **Add tags by default.** Append to the `tags:` list in `1-new-files.md`.

## License

[MIT](LICENSE) — do whatever you like; attribution appreciated but not required.

## Credits

Originally extracted from [Amir Pourmand](https://github.com/pourmand1376)'s personal Obsidian vault.
