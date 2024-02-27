# Authentication and Role-based Permissions - Frontend

This project is an implementation of a user authentication system with role-based permissions using React, Redux, and a backend API. Users are assigned different roles (admin, user) with varying levels of access. The project includes protected routes and ensures that the appropriate UI is shown based on user roles.

This is the frontend part of the Authentication and Role-based Permissions project. It's developed using React and Redux.

To be able to login as an admin you can use this
Email: admin@test.com
Password: secret

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Prerequisites

- Node.js and npm installed on your system.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Abdoo-270/ShopShine-Frontend

```

2. Navigate to the project directory:

```bash
cd ShopShine-Frontend

```

3. Install dependencies:

```bash
npm install

```

## Usage

To start the development server, use the following command:

```bash
npm run dev

```

This will start the frontend application and open it in your default web browser.

## Documentation

### User Authentication

The frontend includes a user authentication system allowing users to register, log in, and log out. Upon registration, users' credentials are securely stored and hashed. Passwords are encrypted to ensure data security.

### Protected Routes

Certain routes in the application are protected and accessible only to authenticated users with specific roles. For instance:

- Control Products: This page is accessible only to users with the admin role. It allows admins to perform CRUD operations on products, including creating new products, updating existing ones, and removing products from the inventory.
- Control Users: Similarly, the control users page is restricted to users with admin privileges. Admins can view a list of users and have the authority to remove user accounts if necessary.

### Page Descriptions

1. Products Page:

- Description: Displays a list of available products in the e-commerce store.
- Access: Public. All visitors, including authenticated and unauthenticated users, can access this page.

2. Single Product Page:

- Description: Provides detailed information about a single product, including its description, price, and availability.
- Access: Public. All visitors can view individual product details.

3. Cart Page:

- Description: Allows users to view and manage items added to their shopping cart.
- Access: Authenticated. Only logged-in users can access their cart and modify its contents.

4. Control Products Page:

- Description: Admin-only page for managing the product inventory.
- Access: Admin. Only users with the admin role can access this page to perform CRUD operations on products.

5. Control Users Page:

- Description: Admin-only page for managing user accounts.
- Access: Admin. Restricted to users with admin privileges to view and manage user accounts.
