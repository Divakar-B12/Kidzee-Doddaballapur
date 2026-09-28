<img width="1882" height="1078" alt="image" src="https://github.com/user-attachments/assets/b847ba23-5b99-496c-ad1a-4a6ef5fa7d88" />

# 🏫 Kidzee Doddaballapur School Website

A modern, responsive school website developed for **Kidzee Doddaballapur** using React.js. The website provides information about the school, programs, campus, testimonials, and contact details through a clean and user-friendly interface.

## 🚀 Features

- 📱 Fully responsive design
- 🏫 School information and About section
- 📚 Programs and activities section
- 🏫 Campus showcase
- 💬 Testimonials section
- 🎥 Video player section
- 📩 Contact form using Web3Forms
- 🧩 Reusable React components
- 🧭 Responsive navigation bar
- ⚡ Fast development with Vite
- 🎨 Custom CSS styling
- 📱 Optimized for desktop, tablet, and mobile devices

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Vite**
- **Web3Forms**
- **Font Awesome**

## 📂 Project Structure

```text
kidzee-doddaballapur/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   │
│   │   ├── Campus/
│   │   │   ├── Campus.jsx
│   │   │   └── Campus.css
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Programs/
│   │   │   ├── Programs.jsx
│   │   │   └── Programs.css
│   │   │
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.jsx
│   │   │   └── Testimonials.css
│   │   │
│   │   ├── Title/
│   │   │   ├── Title.jsx
│   │   │   └── Title.css
│   │   │
│   │   └── VideoPlayer/
│   │       ├── VideoPlayer.jsx
│   │       └── VideoPlayer.css
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/kidzee-doddaballapur.git
```

### 2. Navigate to the Project

```bash
cd kidzee-doddaballapur
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will usually be available at:

```text
http://localhost:5173
```

## 📩 Web3Forms Configuration

The contact form uses **Web3Forms** to handle form submissions.

Create a `.env` file in the project root:

```env
VITE_ACCESS_KEY=your_web3forms_access_key
```

Then access the environment variable in React:

```javascript
formData.append(
  "access_key",
  import.meta.env.VITE_ACCESS_KEY
);
```

### Example Contact Form

```javascript
const formData = new FormData();

formData.append(
  "access_key",
  import.meta.env.VITE_ACCESS_KEY
);

formData.append("name", name);
formData.append("email", email);
formData.append("message", message);
```

## 📱 Responsive Design

The website is designed to provide a consistent user experience across different screen sizes.

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

CSS media queries are used to adapt the layout, navigation, images, typography, and components for different screen sizes.

## 🧩 React Component Architecture

The website follows a reusable component-based architecture.

### Main Components

| Component | Purpose |
|---|---|
| `Navbar` | Website navigation |
| `Hero` | Main landing section |
| `About` | School information |
| `Programs` | Educational programs |
| `Campus` | Campus information and images |
| `Testimonials` | Parent/student testimonials |
| `VideoPlayer` | School video section |
| `Contact` | Contact form |
| `Title` | Reusable section headings |
| `Footer` | Footer and developer information |

## 🌐 Deployment

The project can be deployed using platforms such as:

- **Vercel**

## 🔗 Live Website

**Live Demo:**  
Add your deployed Vercel/Netlify URL here.

https://kidzee-doddaballapur.vercel.app

## 👨‍💻 Developer

### Divakar

Frontend Developer specializing in React.js and modern web development.

**Portfolio:**  
https://divakar-portfolio-rosy.vercel.app/

This project was developed for the **Kidzee Doddaballapur school website**.

© 2026 Kidzee Doddaballapur. All rights reserved.
