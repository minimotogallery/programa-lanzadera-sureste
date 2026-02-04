# Minimoto Gallery — landing

Minimal landing page (logo + “Stay tuned.”) with a light/dark toggle.

## Local preview

```bash
python3 -m http.server 5174 --directory minimoto-gallery
```

Then open: http://127.0.0.1:5174

## Deploy (GitHub Pages)

This repo includes a workflow that deploys the `minimoto-gallery/` folder to GitHub Pages on every push to `main`.

1. In GitHub: **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` (or run the workflow manually)

