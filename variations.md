# Product Variations

Product variations let you sell the same product with different options (e.g., size, color, material).

---

## Overview

**Flow:**

1. Create **Variations** (e.g., "Size", "Color").
2. Add **Variation values** (e.g., "S", "M", "L" for Size).
3. Assign variations to a product and set **price** and **stock** per combination.

---

## Creating Variations

### Step 1: Define Variation Types

1. Go to **Products → Variations**.
2. Click **Add Variation**.
3. Enter a **name** (e.g., "Size", "Color").
4. Save.

### Step 2: Add Variation Values

1. For each variation, add **values** (e.g., for "Size": S, M, L).
2. Each value can have its own sort order.

### Step 3: Assign to Products

1. Edit a product.
2. In the **Variations** section, select the variation(s) to use.
3. For each combination (e.g., Size S + Color Red), set:
   - **Rate** (price)
   - **Quantity** (stock)

---

## How Variations Work on the Frontend

- Customers see dropdowns or selectors for each variation.
- When they choose options, the displayed price and availability update.
- Add to cart includes the selected variation.
- Cart and checkout show the variation (e.g., "Product Name (Size: M, Color: Blue)").

---

## Stock per Variation

- Each variation combination can have its own quantity.
- When an order is placed, the quantity for the selected combination is reduced.
- Out-of-stock combinations are not selectable (or show as unavailable).

---

## Best Practices

- Keep variation names short and clear.
- Use consistent values across products when possible.
- Ensure each combination has a price and quantity.
