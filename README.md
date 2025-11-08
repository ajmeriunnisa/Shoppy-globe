## ShoppyGlobe E-Commerce Application

**ShoppyGlobe** is a simple e-commerce web application built using **React (Vite)** and **Redux**.  
It demonstrates fetching product data, managing a shopping cart, using Redux state management, routing with React Router, and implementing a checkout workflow.

---

##  Project Objective

- Built using **React + Vite**.
- Uses **Redux** for global state management.
- Implements **React Router (createBrowserRouter)** for navigation.
- Fetches data from an external API using **useEffect**.
- Uses **lazy loading**, **props**, **error handling**, and **responsive design**.

---

##  Component Structure

| Component | Description |
|------------|-------------|
| **App** | Main component wrapping routes and layout. |
| **Header** | Displays navigation links and shopping cart icon with item count. |
| **ProductList** | Fetches and displays list of products from API. Includes a Redux-powered search feature. |
| **ProductItem** | Represents an individual product card with an "Add to Cart" button. |
| **ProductDetail** | Displays detailed product information based on dynamic route ID. |
| **Cart** | Displays items added to the cart and allows quantity updates/removal. |
| **CartItem** | Renders each product in the cart. |
| **Checkout** | Dummy form for user details and order placement summary. |
| **NotFound** | Displays 404 error page for invalid routes. |

---

##  State Management (Redux)

- **Redux Toolkit** is used for managing complex states such as the shopping cart and search.
- **Slices Created:**
  - `cartSlice.js`: Manages cart items (add, remove, update quantity).
  - `searchSlice.js`: Handles product search state.
- **Selectors:**
  - `selectCartItems`: Get all cart items.
  - `selectCartCount`: Get total item count.
  - `selectCartTotal`: Calculate total cart price.

---

##  Data Fetching (useEffect)

- Products are fetched from:  
   [https://dummyjson.com/products]
- Custom Hook: `useProducts.js` handles fetching and error management.
- Error handling is implemented to display messages if the API fails.

---

##  React Routing

- Implemented using `createBrowserRouter` from **react-router-dom**.
- Routes:
  - `/` → Home / Product List
  - `/product/:id` → Product Details
  - `/cart` → Shopping Cart
  - `/checkout` → Checkout Form
  - `*` → 404 NotFound Page (error boundary)

---

##  Features Implemented

-  Product listing with API data fetching  
-  Redux-based cart management (Add, Remove, Update Quantity)  
-  Redux-powered product search filter  
-  Routing with dynamic product details  
-  Error handling and 404 page  
-  Lazy loading of components and images  
-  Responsive UI using Tailwind CSS  
-  Proper use of props and reusable functional components  
-  Checkout form with order confirmation and redirect  

---

##  Tech Stack

| Category | Tools / Libraries |
|-----------|-------------------|
| Frontend Framework | React (Vite) |
| State Management | Redux Toolkit |
| Routing | React Router v6+ |
| Data Fetching | Fetch API + Custom Hook |
| Styling | Tailwind CSS |
| Icons | React-icons |
| API | https://dummyjson.com/products |

---

##  How to Use the App

- The **homepage** displays featured products and a **Shop Now** button.
- Navigate to the **Products Page** to explore the complete catalog.
- Click **Add to Cart** on any product to add it.
- Go to the **Cart Page** to view added items, increase/decrease quantity, or remove items.
- Proceed to **Checkout**, fill the form (validated fields), and click **Place Order**.
- You’ll see an **Order Placed Successfully** message, and you’ll be redirected to the Home page.
- Try entering invalid routes (like /random) to test the **404 Error Page**.



## Github Repository Link

(uploaded the project on github and below is the github repository link)
https://github.com/ajmeriunnisa/Shoppy-globe

