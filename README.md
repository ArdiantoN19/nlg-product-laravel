# 🚀 NLG Product Manager

A modern, full-stack product management application built with Laravel and React. Seamlessly manage your product inventory with a beautiful, responsive interface powered by cutting-edge technologies.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)

---

## ✨ Features

### 📦 Product Management
- **Create Products** - Add new products with name, price, stock, and description
- **View Products** - Browse all products in an intuitive dashboard
- **Update Products** - Edit product details in real-time
- **Delete Products** - Remove products from inventory
- **Sync Functionality** - Keep your data synchronized across the application

### 🔐 Authentication
- **User Authentication** - Secure user login and registration
- **API Authentication** - Laravel Sanctum token-based API authentication
- **Protected Routes** - Middleware-protected endpoints for authorized access

### 🎨 User Interface
- **Interactive Dashboard** - Real-time product management interface
- **Responsive Design** - Beautiful UI that works on all devices
- **Server-Side Rendering** - Inertia.js integration for seamless page transitions
- **Modern Styling** - Tailwind CSS for rapid, beautiful UI development

### 🔌 API Endpoints
- **RESTful API** - Clean, standard REST endpoints for product management
- **User Authorization** - Sanctum-protected API endpoints
- **JSON Responses** - Structured API responses for easy integration

---

## 🛠 Tech Stack

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Laravel** | Latest | Web framework & API |
| **PHP** | 8.x+ | Backend language |
| **Laravel Sanctum** | Built-in | API authentication |
| **SQLite/MySQL** | Latest | Database |

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Inertia.js** | Latest | Frontend adapter for Laravel |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **Vite** | 7.x | Fast build tool & dev server |

### Development Tools
| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting & quality |
| **Prettier** | Code formatting |
| **TypeScript** | Type checking |
| **PHPUnit** | Backend testing |

---

## 📦 Prerequisites

Make sure you have the following installed on your system:
- **PHP 8.2+**
- **Composer** - PHP package manager
- **Node.js 18+** - JavaScript runtime
- **npm or yarn** - JavaScript package manager
- **Git** - Version control

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd nlg-product-laravel
```

### 2. Install Backend Dependencies
```bash
composer install
```

### 3. Install Frontend Dependencies
```bash
npm install
```

### 4. Environment Setup
```bash
# Copy the example environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure your database in .env file
```

### 5. Database Setup
```bash
# Run migrations
php artisan migrate

# Seed the database (optional)
php artisan db:seed
```

### 6. Build Assets
```bash
# Development build with hot reload
npm run dev

# Production build
npm run build
```

### 7. Start Development Server
```bash
# In one terminal - Start Laravel server
php artisan serve

# In another terminal - Start Vite dev server
npm run dev

# OR just run this
composer run dev
```

Visit `http://localhost:8000` in your browser!

---

## 📖 Usage

### Managing Products

#### Create a Product
1. Navigate to the Dashboard (`/dashboard`)
2. Click "Add Product" button
3. Fill in the product details:
   - **Name** - Product name
   - **Price** - Product price
   - **Stock** - Available quantity
   - **Description** - Product description
4. Click "Save"

#### Update a Product
1. Go to Dashboard
2. Find the product you want to edit
3. Click the "Edit" button
4. Modify the details
5. Click "Update"

#### Delete a Product
1. Go to Dashboard
2. Find the product to delete
3. Click the "Delete" button
4. Confirm the deletion

---

## 🔌 API Documentation

### Base URL
```
http://localhost:8000/api
```

### Authentication - ONGOING FEAT
Include the API token in the header:
```
Authorization: Bearer {token}
```

### Endpoints

#### Get User Profile - ONGOING FEAT
```http
GET /api/user
Headers:
  Authorization: Bearer {token}
```

#### Get All Products
```http
GET /api/products
```

#### Response Format
```json
{
  "data": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 99.99,
      "stock": 50,
      "description": "Product description",
      "created_at": "2026-03-03T00:00:00.000000Z",
      "updated_at": "2026-03-03T00:00:00.000000Z"
    }
  ]
}
```

---

## 📂 Project Structure

```
nlg-product-laravel/
├── app/
│   ├── Http/
│   │   ├── Controllers/      # API & Web controllers
│   │   └── Middleware/       # Custom middleware
│   ├── Models/
│   │   ├── Product.php       # Product model
│   │   └── User.php          # User model
│   └── Providers/            # Service providers
├── resources/
│   ├── css/                  # Tailwind styles
│   └── js/
│       ├── app.tsx           # Main React app
│       ├── actions/          # Server actions
│       ├── pages/            # React pages/components
│       ├── routes/           # Route definitions
│       └── types/            # TypeScript types
├── routes/
│   ├── api.php               # API routes
│   ├── web.php               # Web routes
│   └── console.php           # Console commands
├── database/
│   ├── migrations/           # Database migrations
│   ├── factories/            # Model factories
│   └── seeders/              # Database seeders
├── tests/                    # Test files
├── config/                   # Configuration files
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── composer.json             # PHP dependencies
```

---

## 🎯 Available Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload
npm run build            # Build for production
npm run build:ssr        # Build with SSR support

# Code Quality
npm run lint             # Fix linting issues
npm run lint:check       # Check linting issues
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run types:check      # Check TypeScript types

# Laravel
php artisan serve        # Start Laravel development server
php artisan migrate      # Run database migrations
php artisan tinker       # Interactive shell
php artisan test         # Run tests
```

---

## 👨‍💻 Author

Created with ❤️ for product management excellence.

---

**Happy coding! 🎉**
