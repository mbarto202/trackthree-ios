# 📱 TrackThree

**TrackThree** is a lightweight, client-focused nutrition tracking app built with React Native. Designed for my cients, it focuses on tracking three essentials: **calories, protein, and water** — nothing more, nothing less.

---

## 🚀 Tech Stack

### 🧱 Frontend

- **React Native (Expo)** – cross-platform mobile app
- **React Navigation** – screen and navigation management
- **NativeWind (Tailwind CSS)** – utility-first styling
- **AsyncStorage** – optional local storage

### ☁️ Backend

- **AWS API Gateway** – secure API routing
- **AWS Lambda** – serverless backend logic
- **AWS DynamoDB** – stores user logs and nutrition entries
- _(Optional)_ **AWS Cognito** – for future secure client access (or custom login)

---

## 🔐 Access Model

This app is private-use only. Only clients provided with a unique login from the trainer will be able to access and track their data.  
Initial versions may use a hardcoded credential system while the backend is developed.

---

## 📦 Features (MVP)

- [ ] Custom login screen (for trainer-provided access)
- [ ] Add & update daily calories, protein, and water
- [ ] View daily and weekly stats
- [ ] Simple, distraction-free UI

---

## 🧠 Why TrackThree?

Unlike most fitness apps packed with bloated features, **TrackThree** is intentionally minimal. It exists for **clients who just want to track the essentials**, stay consistent, and report back to their coach.

---

## 🛠️ Project Status

🚧 Currently in development. MVP goal: lightweight, secure tracker with client-specific access.

---

## 📁 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/trackthree.git
cd trackthree

# Install dependencies
npm install

# Start the app
npx expo start
```
