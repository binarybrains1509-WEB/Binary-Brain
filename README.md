# BinaryBrains - Build Today. A Brighter Tomorrow.

A modern, premium, professional Home Page for **BinaryBrains**, designed for both **Students** and **Businesses**.

## 🚀 Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4, Lucide Icons, Canvas Confetti
- **Backend**: Spring Boot 3.4.2 (Java 21 LTS), Spring Web MVC, Bean Validation
- **Architecture**: Decoupled RESTful architecture with Vite reverse proxy to Spring Boot

---

## 📁 Project Structure

```
binarybrains/
├── frontend/                     # React 19 + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Sticky dark header with student/business dropdowns
│   │   │   ├── Hero.jsx          # Dark tech hero with developer workstation graphic
│   │   │   ├── AudienceCards.jsx # Dual side-by-side cards (Students & Businesses)
│   │   │   ├── StudentServices.jsx # 6 cards for student projects & career prep
│   │   │   ├── BusinessServices.jsx# 6 cards for enterprise & software development
│   │   │   ├── StatsBar.jsx      # Glassmorphic statistics pill container
│   │   │   ├── WhyBinaryBrains.jsx # 4 feature value pillars
│   │   │   ├── RecentProjects.jsx# 5 device mockup cards (E-Commerce, ERP, Mobile, etc.)
│   │   │   ├── TechStrip.jsx     # Badges for Java, Spring Boot, React, AWS, Docker...
│   │   │   ├── CtaBanner.jsx     # Glowing banner with paper plane & handwritten quote
│   │   │   ├── QuoteModal.jsx    # Interactive quote request form with backend integration
│   │   │   ├── VideoModal.jsx    # HD video preview modal for "Watch Our Video"
│   │   │   └── Footer.jsx        # Brand links, social icons & copyright
│   │   ├── data/                 # Mock & fallback datasets
│   │   └── services/api.js       # REST client calling Spring Boot endpoints
│   └── vite.config.js
│
└── backend/                      # Spring Boot 3.4.2 (Java 21) REST API
    ├── pom.xml
    ├── mvnw / mvnw.cmd
    └── src/main/java/com/binarybrains/
        ├── BinarybrainsBackendApplication.java
        ├── config/CorsConfig.java
        ├── controller/
        │   ├── InquiryController.java  # POST /api/inquiries (quote submissions)
        │   ├── ServiceController.java  # GET /api/services (catalog)
        │   ├── ProjectController.java  # GET /api/projects (portfolio)
        │   ├── StatsController.java    # GET /api/stats (metrics)
        │   └── HealthController.java   # GET /api/health
        ├── model/
        │   ├── Inquiry.java
        │   ├── ServiceItem.java
        │   ├── ProjectItem.java
        │   └── StatsItem.java
        └── service/InquiryService.java
```

---

## 🏃 Running the Application

### 1. Spring Boot Backend
The backend runs on **port 8080**:
```powershell
cd backend
$env:MAIL_USERNAME = "binarybrain1509@gmail.com"
$env:MAIL_PASSWORD = "your-gmail-app-password"
$env:JAVA_HOME = "C:\Program Files\Java\jdk-21"
.\mvnw.cmd spring-boot:run
```

Inquiry form submissions are emailed to `binarybrain1509@gmail.com` through Gmail SMTP. Enable 2-Step Verification on that Gmail account, create a Gmail App Password, and use the 16-character App Password for `MAIL_PASSWORD`; a normal Gmail password will not work. Do not commit these values to the repository.

For local development, copy `backend/.env.example` to `backend/.env`, replace the placeholder password, and run the backend normally. The local `.env` file is ignored by Git.

Available REST Endpoints:
- `GET  /api/health` - Backend status and health
- `GET  /api/services` - List all services (filter with `?audience=STUDENT` or `?audience=BUSINESS`)
- `GET  /api/projects` - List recent project showcases
- `GET  /api/stats` - Verified company metrics
- `POST /api/inquiries` - Submit a quote / project inquiry
- `GET  /api/inquiries` - View submitted inquiries

### 2. React Frontend
The frontend runs on **port 5173**:
```powershell
cd frontend
npm run dev
```

Open your browser at:
`http://localhost:5173`
