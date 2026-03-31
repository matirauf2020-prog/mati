# Muhammad Muti-ur-Rauf — Solar PV Designer Portfolio

Professional solar PV design portfolio website with 49 complete projects across Industrial, Commercial, and Residential categories. Built with HTML, CSS, JavaScript, and Supabase.

---

## 🌞 Live Demo
> Deploy to GitHub Pages or Netlify (instructions below)

---

## 📁 Project Structure

```
portfolio-website/
├── assets/
│   ├── css/
│   │   ├── main.css          # Design tokens, global styles
│   │   ├── components.css    # All UI components
│   │   └── animations.css    # Keyframes and scroll reveals
│   ├── js/
│   │   ├── supabase.js       # Supabase client + CRUD operations
│   │   ├── projects.js       # All 49 project data + card renderer
│   │   ├── filter.js         # Search, filter, sort logic
│   │   ├── main.js           # Navbar, forms, animations, FAQ
│   │   └── admin.js          # Admin CRUD for projects & orders
│   └── images/               # (Add your images here)
├── admin/
│   ├── login.html            # Admin login (Supabase Auth)
│   ├── dashboard.html        # Stats dashboard
│   ├── manage-projects.html  # CRUD for projects
│   └── manage-orders.html    # View & manage orders
├── index.html                # Homepage
├── about.html                # About + skills + services
├── projects.html             # All 49 projects with filter/search
├── industrial.html           # 18 industrial projects
├── commercial.html           # 20 commercial projects
├── residential.html          # 11 residential projects
├── order.html                # Project order form
├── contact.html              # Contact page
├── 404.html                  # Not found page
├── supabase-schema.sql       # Database schema
└── README.md
```

---

## 🚀 Quick Start (Without Supabase)

The website works **100% offline** without Supabase — all 49 projects are embedded in `assets/js/projects.js` as static data.

1. **Open** `index.html` in your browser — everything works immediately
2. The order form will show a success message (no backend needed for basic use)

---

## ⚡ GitHub Pages Deployment

### Step 1: Create GitHub Repository
```bash
# Initialize git in the portfolio-website folder
git init
git add .
git commit -m "Initial commit: PV Portfolio Website"
```

### Step 2: Push to GitHub
```bash
# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/pv-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under *Source*, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/pv-portfolio/`

---

## 🗄️ Supabase Setup (For Admin Panel & Order Forms)

### Step 1: Create Supabase Project
1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for free
3. Click **New Project**
4. Choose a name, database password, and region (closest to Pakistan: **ap-south-1** Singapore)

### Step 2: Run the SQL Schema
1. In Supabase Dashboard → **SQL Editor** → **New Query**
2. Paste the entire contents of `supabase-schema.sql`
3. Click **Run**
4. You should see: "Success. No rows returned"

### Step 3: Get Your API Keys
1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** (looks like `https://xyzabcdef.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

### Step 4: Update Configuration
Open `assets/js/supabase.js` and replace:
```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';         // ← Paste your Project URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // ← Paste your anon key
```

### Step 5: Create Admin User
1. Supabase Dashboard → **Authentication** → **Users**
2. Click **Invite user** or **Add user**
3. Enter your email and a strong password
4. Use these credentials to log in at `/admin/login.html`

### Step 6: Seed Project Data
1. Log in to admin panel at `/admin/login.html`
2. Go to **Manage Projects**
3. Click **"Seed CSV Data"** button
4. This will upload all 49 projects to Supabase automatically

---

## 👤 Admin Panel Usage

### Login
- URL: `yoursite.com/admin/login.html`
- Use the email/password created in Supabase Authentication

### Add a New Project
1. Admin → **Manage Projects** → **+ Add Project**
2. Fill in: Category, Title, YouTube URL, Description, Drawing Link
3. Click **Save Project**
4. The thumbnail is auto-generated from the YouTube video ID

### Edit an Existing Project
1. Admin → **Manage Projects**
2. Find the project → click **Edit**
3. Update any fields → click **Save Project**

### Update Drawing Link
1. Admin → **Manage Projects** → **Edit** on the project
2. Paste your Google Drive / Dropbox / OneDrive link in the **Drawing Link** field
3. Click **Save Project**
4. The drawing link will appear on the project card on the public site

### Delete a Project
1. Admin → **Manage Projects**
2. Find the project → click **Delete**
3. Confirm the deletion (this cannot be undone)

### View Order Requests
1. Admin → **Order Requests**
2. See all client submissions with contact info
3. Update status: **new → reviewed → completed / cancelled**

---

## 📋 How Drawing Links Work

Drawing links are stored per-project in Supabase. To add/update:

**Option A (Admin Panel):**
- Edit the project → paste Google Drive link → Save

**Option B (Direct Supabase SQL):**
```sql
UPDATE projects 
SET drawing_link = 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID'
WHERE id = 1;
```

The link appears as a "Drawing" button on the project card and in the video modal.

---

## ➕ Adding More Projects

**Via Admin Panel** (recommended after Supabase setup):
1. Log in → Manage Projects → + Add Project
2. Fill form → Save

**Via Code** (without Supabase):
Add to the `PROJECTS_DATA` array in `assets/js/projects.js`:
```javascript
{
  id: 50, // next sequential ID
  category: 'Industrial', // or 'Commercial' or 'Residential'
  title: 'Your New Project Title',
  youtube_url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',
  description: 'Your project description here.',
  drawing_link: 'https://drive.google.com/...', // optional
  thumbnail_url: '', // leave empty to auto-generate from YouTube
  featured: false // set true to show on homepage
}
```

---

## 🎨 Customization

### Change Colors
Edit `assets/css/main.css` — look for `:root { }` at the top:
```css
--color-primary: #1E40AF;        /* Main blue */
--color-accent: #0EA5E9;         /* Sky blue */
--color-solar: #F59E0B;          /* Amber/solar */
```

### Update Contact Info
Global search for `03494348139` and `linkedin.com/in/muhammad-muti-ur-rauf-4349bb377` — replace with your details.

### Make a Project Featured
In `assets/js/projects.js`, set `featured: true` on any project to show it on the homepage featured section.

---

## 📦 Features Included

| Feature | Status |
|---------|--------|
| Responsive design (mobile/tablet/desktop) | ✅ |
| 49 projects pre-populated | ✅ |
| Filter by category (All/Industrial/Commercial/Residential) | ✅ |
| Search projects by title/description | ✅ |
| Sort projects | ✅ |
| YouTube video modal (click to play) | ✅ |
| Project drawing links | ✅ |
| Floating WhatsApp button | ✅ |
| Back to top button | ✅ |
| Loading animation | ✅ |
| Scroll-reveal animations | ✅ |
| Counter animations (stats) | ✅ |
| Animated skill bars (About page) | ✅ |
| FAQ accordion | ✅ |
| Testimonials section | ✅ |
| Order form with validation | ✅ |
| Contact form | ✅ |
| 404 page | ✅ |
| SEO meta tags | ✅ |
| Open Graph tags | ✅ |
| Admin login (Supabase Auth) | ✅ |
| Admin dashboard with stats | ✅ |
| Add/Edit/Delete projects | ✅ |
| Manage order requests | ✅ |
| Drawing link management | ✅ |
| CSV data seed button | ✅ |
| GitHub Pages ready | ✅ |

---

## 📞 Contact

**Muhammad Muti-ur-Rauf**
- WhatsApp: [+92 349 4348139](https://wa.me/923494348139)
- LinkedIn: [View Profile](https://www.linkedin.com/in/muhammad-muti-ur-rauf-4349bb377/)
- Industrial Playlist: [YouTube](https://www.youtube.com/playlist?list=PLAnIFsPchnbF1OdfdcnvTvRguIErbk93k)
- Commercial Playlist: [YouTube](https://www.youtube.com/playlist?list=PLAnIFsPchnbH9MMzoc1-43yG6HmwshBoP)
- Residential Playlist: [YouTube](https://www.youtube.com/playlist?list=PLAnIFsPchnbGL5vhESxsy27-GQJvnW9eQ)

---

*Built with ❤️ for the solar energy industry of Pakistan*
