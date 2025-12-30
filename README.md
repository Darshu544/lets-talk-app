
# 📞 Let’s Talk – Real-Time Video Conferencing App (Zoom Clone)

**Let’s Talk** is a modern, full-featured **Zoom-like video conferencing platform** built with **Next.js, TypeScript, and Tailwind CSS**.
It supports **real-time meetings, scheduling, chat, emoji reactions, screen sharing, and meeting recording with stored playback**, offering a complete virtual meeting experience.

---

## 🚀 Key Highlights

* Zoom-style **dashboard UI**
* **Meeting recordings are stored and accessible**
* Real-time joining & scheduling
* Secure authentication with Clerk
* Clean, production-ready UI designed using Figma

---

## ✨ Features

### 🎥 Video Conferencing

* Real-time **audio & video meetings**
* High-performance peer connections
* Join meetings instantly via links

### 🖥 Screen & Media

* **Screen sharing during meetings**
* **Meeting recording**
* Recordings stored & listed in **Recordings section**
* Playback support for recorded meetings

### 💬 Chat & Interaction

* Real-time in-meeting chat
* Emoji reactions
* Participant join/leave updates

### 📅 Meeting Management

* Create **new meetings**
* **Schedule meetings** for later
* View **upcoming & previous meetings**
* Dedicated **recordings dashboard**

### 🔐 Authentication

* Secure login & signup using **Clerk**
* Protected routes & user sessions
* User profile & account management

### 🎨 UI / UX

* Zoom-inspired clean interface
* Built with **Tailwind CSS**
* UI/UX designed using **Figma**
* Fully responsive layout

---

## 🧱 Tech Stack

| Category       | Technology           |
| -------------- | -------------------- |
| Framework      | Next.js              |
| Language       | TypeScript           |
| Styling        | Tailwind CSS         |
| Authentication | Clerk                |
| Real-Time      | WebRTC, Socket.IO    |
| UI Design      | Figma                |
| Deployment     | Vercel (recommended) |

---

## 📂 Project Structure

```plaintext
lets-talk-app/
├── public/                    # Static assets
├── src/
│   ├── app/                  # Next.js App Router
│   ├── components/           # Reusable UI components
│   ├── hooks/                # Custom hooks
│   ├── context/              # Global state & sockets
│   ├── utils/                # Helper functions
│   └── styles/               # Global & Tailwind styles
├── .env.local
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Darshu544/lets-talk-app.git
cd lets-talk-app
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

Open 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🧠 How It Works

1. User authenticates via **Clerk**
2. Creates or joins a meeting
3. WebRTC establishes peer connections
4. Socket.IO handles real-time events
5. Media streams enable video, audio & screen sharing
6. Meeting recordings are stored and shown in dashboard

---

## 📌 Application Sections

* **Home Dashboard** – Quick actions & current time
* **Upcoming Meetings** – Scheduled meetings list
* **Previous Meetings** – Meeting history
* **Recordings** – Stored meeting recordings
* **Profile Menu** – Account & sign-out options

---

## 🚀 Deployment

Optimized for **Vercel**:

```bash
vercel deploy
```

---

## 🔮 Future Enhancements

* Cloud recording download
* Admin host controls
* Breakout rooms
* Virtual backgrounds
* End-to-end encryption
* Mobile app support

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Darshan Memane**
GitHub: [https://github.com/Darshu544](https://github.com/Darshu544)

Just say the word 🚀
