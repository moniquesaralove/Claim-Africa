# Claim Africa — Two-Player Geography Game

A real-time, shareable geography game built with Next.js and React.

## Quick Start (Vercel Deployment)

### Step 1: Prepare the code
All files are ready in this folder. Just make sure you have these files:
- `app/page.js` (the game component)
- `app/layout.js` (Next.js layout)
- `app/globals.css` (styles)
- `package.json` (dependencies)
- `next.config.js` (Next.js config)
- `.gitignore`

### Step 2: Push to GitHub
1. Create a new GitHub repository
2. Clone it locally or initialize it:
   ```bash
   git init
   cd vercel-deploy
   git add .
   git commit -m "Initial commit: Claim Africa game"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/claim-africa.git
   git push -u origin main
   ```

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub (or create a free account)
3. Click "New Project"
4. Select your `claim-africa` repository
5. Click "Import"
6. Click "Deploy"

**That's it!** Vercel will build and deploy automatically. You'll get a URL like:
```
https://claim-africa.vercel.app
```

### Step 4: Play!
- Open the link in one browser
- Share the URL with your friend
- When either of you clicks "Copy invite link", the link updates with a room code
- Both players see the same game board and can play together

## How to Play
1. The game names a country (shown at the top as "Find: Kenya")
2. Tap the correct country on the map
3. If you're right, you claim it and a new country is named for the other player
4. If you're wrong, the same country passes to the other player to try
5. Aim to claim the most countries out of 50

## Game Features
- Real-time sync between two players
- No login required
- Works on mobile and desktop
- Room codes in URL for easy sharing
- Visual feedback for correct/wrong guesses

## Troubleshooting

**"Module not found" errors**: Run `npm install` locally to test before deploying:
```bash
npm install
npm run dev
```

**Game not updating for other player**: Both players need to use the same URL with the room code (generated after the first "Copy invite link" click).

**Refresh loses progress**: Game state is stored in the URL. If you lose the link, you lose the game. Share it before starting!

## Development (Local)
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Build
```bash
npm run build
npm run start
```
