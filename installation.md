# Installation

This guide walks you through installing and activating the Perfex Shop module.

## Prerequisites

Before installing, ensure you have:

- **Perfex CRM** version 2.3 or higher installed and running
- **PHP** 7.0 or higher
- **MySQL** 5.6 or higher
- Admin access to your Perfex CRM installation

## Step 1: Obtain the Module Package

1. Download the module from your purchase source (e.g., CodeCanyon).
2. Extract the downloaded ZIP file.
3. You will see:
   - **upload.zip** — The module package to install
   - **documentation** — Help files (optional)

## Step 2: Upload the Module

1. Log in to your **Perfex CRM Admin** area.
2. Navigate to **Setup → Modules**.
3. Click **Upload new module** or use the module installation area.
4. Select the **upload.zip** file from the extracted folder.
5. Click **Install**.

## Step 3: Activate the Module

1. After installation, locate **Perfex Shop** (or **Products**) in the module list.
2. Click **Activate**.
3. You should see a success message indicating the module is active.

## Step 4: Verify Installation

1. A new **Products** menu item should appear in the admin sidebar.
2. Go to **Setup → Settings** and look for the **Products** tab.
3. The module creates its own database tables and options during activation.

## Post-Installation

- **New installations**: The module's `install.php` runs and creates all required tables and options.
- **Upgrades**: If you are upgrading from an older version, migration scripts run automatically to update your database schema.

## Troubleshooting

### Module Does Not Appear
- Ensure the module ZIP was uploaded correctly.
- Check file permissions on the `modules` folder (typically `755` or `775`).

### Activation Fails
- Check your PHP error log for details.
- Ensure all required PHP extensions are enabled (e.g., `curl`, `json`, `mbstring`).

### Missing Menus
- Clear your browser cache.
- Verify your user account has permissions to view the Products module.

---

**Next:** [Getting Started](getting-started.md) — Create your first product and category.
