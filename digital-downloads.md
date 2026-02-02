# 📥 Digital Downloads

Sell downloadable files (eBooks, software, music, etc.) with automatic delivery.

---

## 📋 Overview

**Flow:**

1. Admin adds a product and marks it as **digital**.
2. Admin uploads the digital file.
3. Customer purchases the product.
4. After payment, customer gets access to **My Downloads**.
5. Customer downloads the file.

---

## ⚙️ Enabling Digital Downloads

1. Go to **Setup → Settings → Products**.
2. Under **Features**, enable **Digital downloads**.
3. Save.

---

## ➕ Creating a Digital Product

1. Go to **Products → Products** and add or edit a product.
2. Check **No quantity (digital product)** or set **Product type** to **Digital**.
3. In the **Digital file** section, upload the file.
4. **Allowed formats**: PDF, ZIP, MP3, MP4, EPUB, DOC, DOCX.
5. Save.

---

## 🛒 Customer Flow

1. Customer purchases the digital product.
2. Invoice is paid.
3. Customer goes to **My Downloads** (in customer menu).
4. Clicks to download the file.

---

## 🔐 Access Control

- Downloads are only available to customers who have **paid** for the product.
- Access is tied to the customer account and invoice status.

---

## 📁 File Storage

- Files are stored in the module's uploads folder (e.g., `uploads/products/digital/`).
- Ensure the folder has correct write permissions.
