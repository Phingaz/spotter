# Data Table App

## Overview

The Data Table App is a web application designed to render and manage large datasets efficiently. With the capability to handle 100,000 rows, the app provides robust features including pagination, sorting, filtering, and searching. The user interface is built with modern web technologies to ensure a smooth and responsive experience.

## Features

- **Pagination**: Seamless navigation through large datasets with efficient pagination.
- **Sorting**: Easily sort data by various columns.
- **Filtering**: Apply filters to view specific subsets of data.
- **Searching**: Perform searches to quickly find specific records.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast and modern build tool for web projects.
- **Material UI**: React components for faster and easier web development.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Installation

To run the app locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Phingaz/spotter
   cd spotter
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the App**:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```plaintext
data-table-app/
├── public/
├── src/
│   ├── components/
│   │   ├── table
│   │   └── ...
│   ├── context/
│   │   ├── Table.tsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useSort.ts
│   ├── constants/
│   │   └── data.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Usage

### Searching

To search through the data:

1. Enter your search query in the search input field.
2. Click the "Search" button.

### Filtering

To filter the data:

1. Select the desired filter options from the dropdown menus.
2. Click the "Apply Filters" button.

### Sorting

To sort the data:

1. Click on the column headers to sort the data in ascending or descending order.
