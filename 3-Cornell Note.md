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
if (!frontmatter.tags.includes("cornell")) {
    frontmatter.tags.push("cornell")
}

// Update the file's front matter
await app.fileManager.processFrontMatter(tp.file.find_tfile(tp.file.title), fm => {
    fm["created"] = frontmatter["created"]
    fm.tags = frontmatter.tags
})
-%>



### لینک‌های مرتبط


### کلمات کلیدی


### سؤالات مطرح شده


### نکات و ایده‌های اصلی


### خلاصه


