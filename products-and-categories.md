# 📦 Products & Categories

This section covers product and category management in detail.

---

## 📁 Product Categories

Categories help organize your catalog and improve navigation.

![Products Categories](assets/images/category-create.png)

### ✏️ Creating a Category

1. Go to **Products → Products Categories**.
2. Click **Add New Category**.
3. Enter:
   - **Category name** (required)
   - **Description** (optional)
   - **Parent category** — For subcategories
   - **Active** — Enable or disable
4. Save.

![Category form](assets/images/category-form.png)

### ✏️ Editing a Category

Click the edit icon next to a category, update the fields, and save.

### 🌳 Category Hierarchy

You can create parent and child categories for a structured catalog (e.g., Electronics → Phones → Smartphones).

---

## 📦 Products

### ➕ Adding a Product

1. Navigate to **Products → Products**.
2. Click **New Product**.

![Products list and New Product](assets/images/product-new.png)
3. Complete the form:

| Field | Description |
|-------|-------------|
| **Category** | Assign to a product category |
| **Product name** | Display name |
| **Description** | Full product description |
| **Rate** | Price (base currency) |
| **Tax** | Select one or more taxes |
| **Quantity** | Stock quantity |
| **No quantity (digital)** | Check for digital/downloadable products |
| **Product type** | Physical, Digital, or Service (if available) |
| **Image** | Product image |
| **Recurring** | Subscription/recurring billing |
| **Slug** | URL-friendly name (for detail pages) |

4. Click **Save**.

![Product form](assets/images/product-form.png)

### 📌 Product Types

- **Physical** 📦 — Standard products with inventory. Quantity decreases on purchase.
- **Digital** 📥 — Downloadable files. No quantity reduction. Requires digital file upload.
- **Service** 🛎️ — No inventory. Useful for consulting, support, etc.

### ✏️ Editing a Product

1. Go to **Products → Products**.
2. Click the product name or edit icon.
3. Modify fields and save.

### 🗑️ Deleting a Product

Use the delete action from the products list. Ensure the product is not referenced in active orders or invoices.

### 🔄 Product Variations

For products with options (e.g., Size: S, M, L; Color: Red, Blue), use **Product Variations**. See [Product Variations](variations.md).

---

## 📋 Product List View

The products table shows:

- Product name
- Category
- Rate (price)
- Quantity
- Image thumbnail
- Actions (edit, delete)

You can filter and search products from the list.

---

## 📊 Low Quantity & Stock

- **Low quantity** is set in **Settings → Products** (e.g., 10).
- Products with quantity at or below this value are flagged in the **Quantities Report**.
- When quantity reaches 0, physical products show as "Out of stock" in the store.

---

## 🏷️ Sale Price (Optional)

If the **sale_price** and **sale_price_end** fields are available, you can set promotional pricing with an end date for urgency and countdown features.
