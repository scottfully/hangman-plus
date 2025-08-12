# 🎯 React Hangman Plus

> Guess the word before all options are gone! A classic word-guessing game built with React.

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌐 Live Demo

**🚀 <a href="https://hangman-plus.vercel.app" target="_blank">Play Hangman Plus Now</a>** - Can you guess the word in time?

<a href="https://hangman-plus.vercel.app" target="_blank"><img src="https://img.shields.io/badge/🔗_Live_Demo-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" /></a>

## ✨ Features

- ⌨️ **Virtual Keyboard** - Click letters on the virtual keyboard
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- ⚡ **Fast Performance** - Built with React 18 and Vite for optimal speed
- 🔄 **Quick Restart** - Start a new game instantly
- ♿ **Accessibility** - Screen reader friendly with proper ARIA labels
- 🎊 **Win/Loss Animations** - Satisfying feedback when you complete a game

## 🎮 How to Play

1. **Guess Letters** 📝
   - Click letters on the virtual keyboard
   - Correct letters will appear in the word
   - Wrong letters will be marked and you will lose an option

2. **Win or Lose** 🏆
   - Guess the complete word before the all options are gone to win!

3. **Play Again** 🔄
   - Click "New Game" to start over with a fresh word

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/scottfully/hangman-plus.git
   cd hangman-plus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to the URL given by Vite to start playing! 🎉

## 🛠️ Built With

- **[React](https://reactjs.org/)** - UI library with hooks and modern features
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **Vanilla CSS** - Custom styling with modern CSS features

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm start        # Start development server (alias)
```

## 🛠️ Customizing the Game

You can easily customize the game to fit your own theme, options, and messages. All main settings are found in [`src/data/config.js`](src/data/config.js):

- **Game Title & Description**: Change the `title` and `description` in the `gameConfig` object to set your own game name and instructions. You can use placeholders like `{totalGuesses}` and `{lastGuessName}` in the description for dynamic values.

- **Options (Lives/Chances)**: Edit the `options` array to add, remove, or rename the options (e.g., dishes, items, characters) that represent the player's lives. Each option can have its own `name`, `backgroundColor`, and `color` for full visual customization.

After saving your changes, restart the development server if it's running to see your customizations in action!

## 🎨 Styling

The game features:
- Modern CSS with custom properties and variables
- Flexbox layouts for responsive design
- Accessible color contrasts
- Clean, minimalist design aesthetic

## ♿ Accessibility Features

- **Screen Reader Support** - Proper ARIA labels and live regions

## 🎓 Learning Goals

This project demonstrates:
- React functional components and hooks
- State management with useState and useEffect
- Event handling and conditional rendering
- Component composition and prop passing
- Game logic implementation
- Responsive design principles
- Accessibility best practices

## 🙏 Acknowledgments

- Built during the Scrimba React Course
- Completely refactored and improved code structure
- Easily Customisable with different options and messages
- Inspired by the classic Hangman word game
- Enhanced with modern React patterns and best practices

Happy coding! 👨‍💻