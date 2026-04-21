# Resume File Setup Instructions

## 📄 Resume Download Feature

A resume download button has been added to the Hero section of the portfolio.

---

## 🔧 Setup Instructions

### Step 1: Add Your Resume PDF

Place your resume PDF file in this `public` folder with the name:

```
public/resume.pdf
```

**File Path:**
```
MySathi-Akash-1/
  public/
    resume.pdf  ← Place your PDF here
```

---

### Step 2: File Naming Options

You can use any of these filenames (update the code accordingly):

**Option A (Current):**
- Filename: `resume.pdf`
- Download as: `Akash_More_Resume.pdf`

**Option B:**
- Filename: `Akash_More_Resume.pdf`
- Download as: `Akash_More_Resume.pdf`

**Option C:**
- Filename: `AkashMore-Resume-2026.pdf`
- Download as: `AkashMore-Resume-2026.pdf`

---

### Step 3: Update Code (If Needed)

If you use a different filename, update `HeroSection.jsx`:

**Current code (Line ~80):**
```jsx
<a
  href="/resume.pdf"
  download="Akash_More_Resume.pdf"
>
```

**Change to (if using different filename):**
```jsx
<a
  href="/your-filename.pdf"
  download="Your_Download_Name.pdf"
>
```

---

## 🎨 Button Location

The resume button is located in the **Hero Section** (top of the page) next to:
- "View My Work" button
- "Get In Touch" button

**Button Style:**
- Outlined with primary color border
- Icon: Download icon (FileDown from lucide-react)
- Text: "Resume"
- Hover: Fills with primary color

---

## 📱 Responsive Behavior

- **Desktop:** Shows inline with other buttons
- **Mobile:** Stacks vertically with proper spacing
- **All devices:** Fully clickable and accessible

---

## ✅ Testing

After adding your resume file:

1. Run `npm run dev`
2. Click the "Resume" button in Hero section
3. Verify the PDF downloads with correct filename
4. Test on mobile and desktop

---

## 🔄 Updating Resume

To update your resume:

1. Replace `public/resume.pdf` with new version
2. Keep the same filename
3. No code changes needed
4. Refresh browser to see new version

---

## 📝 Notes

- File must be in `public` folder (not `src`)
- Supported format: PDF (recommended)
- Max file size: Keep under 5MB for fast downloads
- The download attribute ensures file downloads instead of opening in browser
