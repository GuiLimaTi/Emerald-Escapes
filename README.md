# Emerald Escapes

A responsive, multi-page website for a fictional Irish travel company that offers holidays, short breaks and day trips around Ireland.

Built with **HTML5, CSS3, Bootstrap 5 and vanilla JavaScript**.

## Pages

| Page | What it does |
|---|---|
| `index.html` (Home) | Hero section, three highlight cards, "Our Story" section and a **holiday budget calculator** |
| `experiences.html` | 15 experiences across Ireland, shown as cards, with **category and price filters** and a live results count |
| `contact.html` | Enquiry form with **client-side validation** that generates a downloadable `.txt` summary of the enquiry |

## JavaScript features (`js/script.js`)

- **Experience filters:** filter cards by category (City, Coastal, Countryside, Family, Cultural) and price range (under €100, €100–€200, over €200). Cards are matched through `data-category` and `data-price` attributes, and the number of visible results is updated live.
- **Contact form validation:** checks required fields, email format and phone format (regex), the enquiry type and a minimum message length. Errors appear in an `aria-live` feedback area, and focus moves to the field that needs fixing.
- **Enquiry download:** after the form validates, the enquiry is built into a text file with the `Blob` API and downloaded as `Emerald-Escapes-Enquiry-<Name>.txt`.
- **Budget calculator:** estimates the trip cost from the number of travellers, the number of days and the travel style (Budget, Comfort or Luxury daily rate).

## Project structure

```
Emerald-Escapes/
├── index.html
├── experiences.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```

## How to run

No build step is needed. Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/GuiLimaTi/Emerald-Escapes.git
cd Emerald-Escapes
```

## Accessibility & responsiveness

- Semantic HTML (`nav`, `section`, `article`, `footer`) and descriptive `alt` text on every image
- `aria-live` regions so screen readers announce form feedback, filter results and budget results
- Bootstrap grid (`col-12 col-md-6 col-lg-4`) so the layout adapts from mobile to desktop

## Author

**Guilherme Lima**: [LinkedIn](https://linkedin.com/in/glimaalmeida) · [GitHub](https://github.com/GuiLimaTi)

*Emerald Escapes is a fictional company created for a web development project. Images are used for educational purposes only.*
