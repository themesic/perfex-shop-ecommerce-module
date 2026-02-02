# Heatmap & Session Recording

Integrate third-party heatmap and session recording tools (Hotjar, Crazy Egg, Microsoft Clarity, etc.).

---

## Overview

**Flow:**

1. Enable the feature in Settings.
2. Paste your provider's script in the text area.
3. The script is injected on product and checkout pages in the customer area.
4. Your provider captures heatmaps and sessions.

---

## Configuration

1. Go to **Setup → Settings → Products**.
2. Under **Heatmap & Session Recording**:
   - Enable **Heatmap / session recording script**.
   - Paste your full script (including `<script>...</script>` tags) in the text area.
3. Save.

---

## Supported Services

- **Hotjar** — Heatmaps, session recordings, feedback.
- **Crazy Egg** — Heatmaps, scroll maps.
- **Microsoft Clarity** — Free heatmaps and session recordings.
- **FullStory** — Session replay.
- Any other service that provides an embeddable JavaScript snippet.

---

## Where the Script Loads

The script is typically loaded on:

- Product listing page
- Product detail pages
- Checkout page
- Cart-related pages

Exact pages depend on the module's implementation.
