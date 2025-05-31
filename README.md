# **Project in Progress 🎉🎉**
---
# **Voxify**

Welcome to the **Voxify**, a modern and innovative platform that transforms text into speech effortlessly. This application is powered by cutting-edge technologies and designed to provide users with an intuitive and seamless experience.

---

## **Features**

- 🎤 **Text-to-Speech Conversion**: Convert text into high-quality audio.
- 📂 **Upload Sources**: Upload PDFs, Google Docs, or websites for summarization.
- 🧠 **AI-Powered Summarization**: Summarize content intelligently.
- 🎧 **Audio Overview**: Listen to summaries instead of reading.
- 💬 **Chat Interface**: Interact with an AI-powered chatbot for personalized assistance.
- 🔒 **Privacy First**: Your data is secure and not used for training purposes.
- 🔑 **Authentication**: Login and register functionality for personalized user experiences.

---

## **Technologies Used**

- **Frontend**: React, GSAP (GreenSock Animation Platform), Framer Motion
- **Backend**: Node.js, Express.js
- **Styling**: CSS, FontAwesome Icons
- **APIs**: Axios for HTTP requests
- **Routing**: React Router
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: [Add deployment platform, e.g., Vercel, Netlify, etc.]

---

## **Installation**

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Abhinab04/VoiceFY.git
   cd text-to-speech
2. **Start the Development Server**
     ```bash
     cd texttospeech
     npm install
     npm run dev
3. **Backend Setup**
    ```bash
    cd backend
    npm install
    node app.js
    
---
## **Authentication**
1. **Register New Account**
   - Navigate to the Register page
   - Fill in required details:
     - Username
     - Email
     - Password
   - Click "Register" to create account

2. **Login**
   - Visit the Login page
   - Enter credentials:
     - Email
     - Password
   - Click "Login" to access your account
## **Source Management**
 ### Upload Sources
- Supported formats:
  - PDF documents
  - Google Docs
  - Website URLs

### Automatic Processing
- AI-powered summarization
- Content analysis
- Key points extraction
  
## **Text-to-Speech Features**
1. **Convert Text**
   - Select text portion
   - Choose voice settings
   - Click "Convert to Speech"

2. **Audio Management**
   - Preview generated audio
   - Download for offline use
   - Adjust playback settings

## **Customised Options**
### Layout Settings
- Column View
  - Traditional vertical layout
  - Optimal for reading

- Row View
  - Horizontal arrangement
  - Better for comparisons

### Personal Preferences
- Font size adjustment
- Color theme selection
- Audio playback speed
- Voice selection
  
---
## **Folder Structure**
  ```bash
  text-to-speech/
  ├── src/
  │   ├── components/
  │   │   ├── LandingPage/
  │   │   │   ├── Body.jsx
  │   │   │   ├── Body.css
  │   │   ├── Dashboard/
  │   │   │   ├── Dashboard.jsx
  │   │   │   ├── Dashboard.css
  │   │   ├── InnerDashboard/
  │   │   │   ├── InnerDashboard.jsx
  │   │   │   ├── InnerDashboard.css
  │   │   ├── Auth/
  │   │   │   ├── Login.jsx
  │   │   │   ├── Login.css
  │   │   │   ├── Register.jsx
  │   │   │   ├── Register.css
  │   ├── App.js
  │   ├── index.js
  ├── public/
  ├── backend/
  │   ├── server.js
  │   ├── routes/
  │   │   ├── authRoutes.js
  │   │   ├── textRoutes.js
  │   ├── models/
  │   │   ├── User.js
  │   ├── middleware/
  │   │   ├── authMiddleware.js
  ├── package.json
