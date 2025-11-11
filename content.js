// Ask the user before activating
if (confirm("Do you want to activate chaos mode?")) {
  
  function spawnWindow(count = 1) {
    for (let i = 0; i < count; i++) {
      const w = window.open("", "", "width=200,height=100");
      if (!w) continue;
      
      // Write some content
      w.document.write("<h3 style='text-align:center;'>You clicked it!</h3>");
      
      // Make it bounce randomly on screen
      const dx = Math.random() * 4 + 2;
      const dy = Math.random() * 4 + 2;
      let x = Math.random() * (screen.width - 200);
      let y = Math.random() * (screen.height - 100);
      
      const move = setInterval(() => {
        if (w.closed) {
          clearInterval(move);
          spawnWindow(5); // Spawn 5 more when closed
          return;
        }
        x += dx;
        y += dy;
        if (x < 0 || x > screen.width - 200) dx *= -1;
        if (y < 0 || y > screen.height - 100) dy *= -1;
        w.moveTo(x, y);
      }, 20);
    }
  }

  // Spawn the first window
  spawnWindow(1);
}
