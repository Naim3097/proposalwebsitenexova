# Nexova Digital Proposal Deck

This is a React-based proposal generator designed to be printed as a PDF.

## How to use

1. **Install Dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Start the Preview**:
   ```bash
   npm run dev
   ```
   Click the link shown (e.g., http://localhost:5173).

3. **Generate PDF**:
   - Open the page in your browser.
   - Click the floating **"Save as PDF"** button.
   - In the print dialog, choose **"Save as PDF"**.
   - Ensure **Background graphics** is checked in "More settings" to see colors and styles correctly.
   - Ensure Paper size is **A4**.
   - Margins should be **None** or **Default** (CSS handles margins).

## Customization

- **Edit Content**: Open `src/App.jsx`. You will find a `proposalData` object at the top where you can change clients, prices, and dates.
- **Add Images**: Go to the "Our Work" section in `src/App.jsx` and replace the placeholder `div`s with actual `<img src="..." />` tags.
- **Styling**: The project uses Tailwind CSS. You can modify `src/index.css` or the classes in `App.jsx`.

## Structure

- **Cover Page**: tailored for the 4 clients.
- **Company Profile**: Standard agency intro.
- **Portfolio**: Placeholders for your work.
- **Proposal**: Detailed breakdown of the 4 website projects.
- **Quotation**: Calculated table with totals.
- **Terms**: Standard terms.
- **Sign-off**: Signature block.
