Here’s a funny README file for your codebase:

---

# 🚀 Epsilon Recruitment Website (ERW)

Welcome to the Epsilon Recruitment Website, the codebase where recruitment dreams come true (and debugging nightmares thrive). Buckle up and get ready for a wild ride through TypeScript, Prisma, and the mysterious land of middleware.

---

## 📖 Table of Contents
1. [About the Project](#about-the-project)
2. [How to Run](#how-to-run)
3. [Features](#features)
4. [Folder Structure](#folder-structure)
5. [Developer Notes](#developer-notes)
6. [Contributing](#contributing)

---

## 🧐 About the Project
The ERW is not just another recruitment platform. It's a revolutionary system where:
- Admins reign supreme (with their mighty JWT tokens).
- Users are rewarded for existing with a starting balance of 5000 fake bucks.
- Events are created, managed, and priced so ambitiously you’d think they’re selling Beyoncé tickets.

---

## 🛠️ How to Run
1. Clone this repo because, duh, it’s awesome.
2. Install dependencies: `npm install`  
   (Warning: Might take longer than you’d expect, but hey, good things take time.)
3. Set up your `.env` file. Don’t have one? Congrats, you’re officially blocked. 🛑
4. Start the backend server:  
   ```
   npm run start
   ```
   Listen for sweet, sweet logs on port **3050**.

---

## 🎢 Features
- **Admin Auth**: Be an admin or dream about being one.
- **Event Creation**: Create events. Mess up event names and still somehow make it work.
- **User Auth**: Sign up, sign in, and immediately question your choices.
- **Memberships**: Basic, Medium, Premium. Because why not stratify users?
- **Event Registration**: Pay-to-play (with your imaginary balance).

---

## 📂 Folder Structure
```
dhruvi5-epsilon-recruitment-website/
├── backend/
│   ├── prisma/       // Prisma schemas and migrations, aka SQL magic
│   ├── src/          // Where the fun happens
│   │   ├── routes/   // Highways of the app
│   │   ├── middlewares/ // Gatekeepers
│   │   ├── client.ts // Prisma client (your BFF)
│   │   └── index.ts  // Starts the whole party
│   ├── .env          // Probably missing
│   └── package.json  // Our dependency jungle
└── Designs/          // In case you’re feeling artsy
```

---

## 🤔 Developer Notes
- **Why Prisma?** Because raw SQL is for the weak.
- **JWTs Everywhere:** Protect your routes, or don’t. It’s your call.
- **Membership Tiers:** Basic is cheap, Premium is free. Logic, anyone?
- **AdminValidation Middleware:** Trust us, it’s doing something important (probably).

---

## 🛑 Contributing
Found a bug? Fix it.  
Want to add a feature? Don’t.  
Just kidding! Open a pull request, and let’s break things together. 🎉

---

## 🥳 Closing Thoughts
This codebase may look intimidating, but don’t worry—it’s 90% error logs and 10% hope. Dive in, break stuff, and enjoy the chaos.

Happy coding! ✨
