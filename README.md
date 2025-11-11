# Chaos Windows Extension 🪟💥

**Version:** 1.0  
**Author:** [Luck26/wtfiu]  
**Description:** A playful browser extension that opens bouncing pop-up windows after user consent. Close one, and 5 more spawn — chaos guaranteed! Fully safe for personal use.

---

## 🎉 Features

- ✅ Opt-in activation with a confirmation prompt.  
- ✅ Bouncing pop-up windows that move across the screen.  
- ✅ Each closed window spawns 5 new windows — endless chaos.  
- ✅ Easy to stop at any time by closing your browser tab.  
- ✅ Pure HTML/CSS/JS, no external dependencies.

---

## 🛠 Installation

1. Clone or download this repository.  
2. Open Chrome or Edge and go to `chrome://extensions/` or `edge://extensions/`.  
3. Enable **Developer mode** (top right).  
4. Click **Load unpacked** and select the folder containing the extension.  
5. The extension is now ready to use.

---

## 🚀 How to Use

1. Navigate to any page in your browser.  
2. The extension asks: “Do you want to activate chaos mode?”  
3. Click **Yes** to start the effect.  
4. Watch as the first window bounces around.  
5. Close a window, and **5 more spawn**! The loop continues.

---

## 🎨 Screenshots / GIFs

- Initial window spawn:  
![Window Spawn](screenshots/window1.png)

- Chaos in action (bouncing):  
![Chaos GIF](screenshots/chaos.gif)

> Replace these with your own screenshots or GIF recordings of the extension.

---

## ⚠️ Safety & Notes

- For **fun and personal experimentation only**.  
- Avoid sensitive pages (banking, work tools, forms).  
- Modern browsers may block excessive pop-ups — test on a blank tab.  
- Stop chaos at any time by closing the tab.

---

## 🔧 Customization

- **Number of spawned windows:** Adjust in `content.js` (currently `5`).  
- **Window size:** Change `width` and `height` in `window.open()`.  
- **Message text:** Edit the content in `w.document.write()` for fun messages.  

---

## 🎁 License

Personal, non-commercial use only. Use responsibly. No warranty provided.

---

## 👀 Bonus Ideas

- Add colorful backgrounds or emojis to windows.  
- Animate text inside each window for extra flair.  
- Track how many windows have been spawned for a playful counter.

