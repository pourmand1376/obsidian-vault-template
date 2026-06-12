<%*
// Add meeting tag to existing front matter
let frontmatter = tp.frontmatter

// Add creation date if it doesn't exist
if (!frontmatter["created"]) {
    frontmatter["created"] = tp.date.now("YYYY-MM-DD HH:mm:ss")
}

// Add tags if they don't exist
if (!frontmatter.tags) {
    frontmatter.tags = []
}

// Add meeting tag if it doesn't exist
if (!frontmatter.tags.includes("meeting")) {
    frontmatter.tags.push("meeting")
}

// Update the file's front matter
await app.fileManager.processFrontMatter(tp.file.find_tfile(tp.file.title), fm => {
    fm["created"] = frontmatter["created"]
    fm.tags = frontmatter.tags
})

let currentDate = tp.date.now("YYYY-MM-DD HH")

// Rename the file to the current date
await tp.file.rename(currentDate)
-%>


### افراد حاضر در جلسه

### اهداف جلسه (Meeting Goals)

### موضوعات بحث‌شده (Discussion topics)
- 
### نکات و ایده‌های اصلی

### کارهای قابل انجام (Action items)

### تصمیم‌ها (Decisions)

### زمان و تاریخ جلسه بعدی


