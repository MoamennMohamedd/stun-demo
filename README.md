# Website Section Generator

A full-stack application that helps generate website sections based on user prompts. Built with Next.js, NestJS, and MongoDB.

## Features

- Generate website sections from text prompts
- Store and display generated ideas
- Clean and responsive UI
- MongoDB integration for data persistence

## Tech Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: NestJS with TypeScript
- **Database**: MongoDB Atlas
- **Styling**: Tailwind CSS

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

The backend server will run on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at http://localhost:3001

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── ideas.controller.ts
│   │   └── website-idea.schema.ts
│   └── package.json
└── frontend/
    ├── src/
    │   └── app/
    │       ├── globals.css
    │       └── page.tsx
    └── package.json
```

## API Endpoints

- `POST /ideas` - Create a new website idea
- `GET /ideas` - Retrieve all website ideas

## Notes

- The backend uses dummy sections (Hero, About, Contact) for demonstration purposes
- Make sure both frontend and backend servers are running simultaneously
- MongoDB Atlas connection string should be kept secure and not committed to version control
- The frontend will automatically use port 3001 if port 3000 is occupied by the backend

## Development

1. Backend modifications can be made in the `backend/src` directory
2. Frontend changes can be made in the `frontend/src/app` directory
3. Run both servers in development mode for hot-reload functionality

## Future Improvements

- Add authentication
- Implement real section generation logic
- Add more customization options
- Include preview functionality