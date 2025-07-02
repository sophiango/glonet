# 🗺️ GLONET – Retail Network Health Map

GLONET is a full-stack application that visualizes the health status of retail store networks on an interactive map. It uses:

- 🖥️ Go (Gin) for the backend API
- ⚛️ React + Leaflet for the frontend map UI
- 🤖 AI-friendly structure for future ML integration
- 🧪 Vitest + Testing Library for unit testing

---

## 🚀 Features

- 📍 Interactive map showing real-time store health
- 🟢 Health statuses: Healthy, Warning, Critical, Unknown
- 📶 Bandwidth and device metrics per store
- 🧪 Fully tested with mocked API
- 🧱 Modular and production-ready code structure

---

## 🧰 Tech Stack

| Layer      | Tech                            |
|------------|---------------------------------|
| Backend    | Go, Gin, CORS, REST API         |
| Frontend   | React, TypeScript, Leaflet.js   |
| Styling    | CSS / React-Leaflet             |
| Testing    | Vitest, React Testing Library   |
| Dev Tools  | Vite, Nodemon, Go modules       |

---

## 🛠️ Getting Started

### 📦 Prerequisites

- Go 1.18+
- Node.js 16+
- `npm` or `yarn`

---

### 🔧 Backend (Go API)

```bash
cd backend
go mod tidy
go run main.go

API Endpoint:
GET http://localhost:8080/api/v1/stores

💻 Frontend (React + Vite)
cd frontend
npm install
npm run dev
Runs on http://localhost:5173

🧪 Testing

🧪 Frontend Unit Tests (Vitest)
cd frontend
npx vitest run
Tests are located in src/App.test.tsx.

🧪 Sample API Response

[
  {
    "id": "1",
    "name": "Store A",
    "latitude": 40.7128,
    "longitude": -74.006,
    "health": "healthy",
    "bandwidth": "1Gbps",
    "deviceCount": 12
  }
]
📦 Project Structure

/backend
  main.go
  /routes
    store.go

/frontend
  src/
    App.tsx
    App.test.tsx
    setupTests.ts
  vite.config.ts
📈 Future Enhancements

🧠 AI/ML to predict health degradation
🔄 Real-time updates via WebSocket
🗂️ Filter/map clustering for large deployments
🐳 Dockerized deployment (in progress)
📄 License

MIT – Use freely, contributions welcome!

👩‍💻 Author

Built by Sophia Ngo as a portfolio-ready network observability project.