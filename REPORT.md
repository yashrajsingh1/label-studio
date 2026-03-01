# White Labelling – Label Studio
## Assignment Report: Mercedes-Benz Rebrand

---

## 1. Objective

Replace all instances of the **Label Studio** logo with the **Mercedes-Benz** logo across the entire application UI, including login pages, navigation bars, favicons, API documentation, and static assets. The scope is limited to **logo image files only** (SVG, PNG, ICO, inline SVGs) — no text branding changes.

---

## 2. Steps Followed

### Step 1: Clone the Repository
```bash
git clone --depth 1 https://github.com/Mercedes-Benz/label-studio.git
```
Cloned the official Label Studio repository (shallow clone for efficiency).

### Step 2: Identify All Logo Locations
Performed a comprehensive search across the codebase to find every instance of logos. Locations were found in:
- SVG logo files (static assets)
- Inline SVGs in Django HTML templates
- PNG logo files for the editor
- Favicon files (ICO and PNG)
- React component alt text

### Step 3: Create Mercedes-Benz Logo
Designed a Mercedes-Benz three-pointed star SVG logo with:
- Outer and inner circles
- Three-pointed star polygon
- "Mercedes-Benz" text rendered using SVG `<text>` element
- Uses `fill="currentColor"` for theme compatibility (light/dark mode)

### Step 4: Replace All Logo Files
Replaced every logo asset in the project with the Mercedes-Benz version.

### Step 5: Update Alt Text
Changed the logo `alt` attribute in the React menubar component from "Label Studio Logo" to "Mercedes-Benz Logo".

### Step 6: Install & Run
Installed the application and verified it runs successfully on `http://127.0.0.1:8080/`.

---

## 3. Files Modified

### SVG Logo Files
| File | Purpose |
|------|---------|
| `web/apps/labelstudio/src/assets/images/logo.svg` | Main React app logo (menubar) |
| `label_studio/core/static/icons/logo.svg` | Django static logo (server-rendered pages) |
| `label_studio/core/static/icons/logo-black.svg` | API documentation (Swagger/ReDoc) logo |
| `label_studio/core/static/images/label_studio_logo.svg` | Large logo with subtitle |
| `label_studio/core/static/images/human_signal_logo.svg` | "Human Signal" company logo → Mercedes-Benz |
| `web/libs/editor/public/images/ls_logo.svg` | Editor standalone page logo |
| `web/libs/storybook/public/logo.svg` | Storybook public logo |

### Favicon Files
| File | Format |
|------|--------|
| `label_studio/core/static/images/favicon.ico` | ICO (16/32/48px) |
| `label_studio/core/static/images/favicon.png` | PNG (64px) |
| `web/apps/labelstudio/src/favicon.ico` | ICO (React app) |
| `web/libs/editor/public/favicon.ico` | ICO (Editor) |

### PNG Logo Files
| File | Purpose |
|------|---------|
| `web/libs/editor/public/images/logo.png` | Editor public logo |
| `web/libs/editor/images/logo.png` | Editor source logo |
| `images/logo.png` | Root-level logo |

### HTML Templates
| File | Changes |
|------|---------|
| `label_studio/users/templates/users/new-ui/user_base.html` | Replaced inline Label Studio SVG logo with Mercedes-Benz star; replaced inline Human Signal SVG logo with Mercedes-Benz star |

### React Components
| File | Changes |
|------|---------|
| `web/apps/labelstudio/src/components/Menubar/Menubar.jsx` | Changed `alt="Label Studio Logo"` to `alt="Mercedes-Benz Logo"` |

---

## 4. Mercedes-Benz Logo Design

The replacement logo is a clean, flat-design Mercedes-Benz three-pointed star that matches the official digital branding style:

- **Three-pointed star**: The iconic Mercedes-Benz emblem rendered as SVG polygon paths with arm width at 22% of the star radius — matching the proportions of the official trademark
- **Double circle border**: Outer circle (stroke-width 2) and inner guide circle (stroke-width 0.5) framing the star
- **"Mercedes-Benz" wordmark**: Bold, clean sans-serif text (Arial/Helvetica, 700 weight) with letter spacing
- **Theme-aware**: Uses `fill="currentColor"` so it automatically adapts to light and dark themes
- **Multiple sizes**: 194×30 (menubar), 367×93 (splash page), 30×30 (icon), 200×29 (footer)
- **Favicon**: Generated programmatically using Python Pillow library with the three-pointed star at multiple resolutions (16px, 32px, 48px ICO + 64px PNG)
- **Automated generation**: All logos are produced by `generate_logos.py` which also updates inline SVGs in Django HTML templates

---

## 5. How to Run

```bash
# 1. Install Python dependencies (if not already installed)
pip install label-studio

# 2. Build the frontend (requires Node.js ≥ 18 and Yarn)
cd label-studio/web
yarn install
NODE_ENV=production yarn ls:build     # on Windows: set NODE_ENV=production && yarn ls:build

# 3. (Optional) Regenerate logos from script
cd ..
python generate_logos.py

# 4. Start the Django development server
cd label_studio
python manage.py runserver 8080
```

Open `http://127.0.0.1:8080/` in a browser to see the Mercedes-Benz branded application.

---

## 6. UI Locations Where Logo Appears

1. **Login/Signup Page** – Top logo and "Brought to you by" section logo
2. **Navigation Menubar** – Top-left logo in the main application
3. **Browser Tab** – Favicon
4. **API Documentation** – Swagger/ReDoc logo
5. **Editor** – Standalone editor page logo

---

## 7. Tools & Technologies Used

- **Python 3.12** – Django development server
- **SVG** – Vector logo graphics (three-pointed star + text)
- **Python Pillow** – Programmatic favicon/PNG generation
- **Django 5.1** – Backend framework serving templates and static files
- **React (JSX)** – Frontend menubar logo component

---

## 8. Deliverables

1. ✅ **Modified Repository** – All logos replaced with Mercedes-Benz branding
2. ✅ **Report** – This document (REPORT.md)
3. 📹 **Video Demo** – 2–3 minute walkthrough of the rebranded application
4. 🔗 **GitHub Link** – Repository with all changes committed

---

## 9. Author

**Name:** Yashraj  
**Date:** March 1, 2026  
**Assignment:** White Labelling – Label Studio (Mercedes-Benz Rebrand)
