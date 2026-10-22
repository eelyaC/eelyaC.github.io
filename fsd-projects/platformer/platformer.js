$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(0,400,200,20);
   createPlatform(300,300,120,20);
   createPlatform(500,280,100,20);
   createPlatform(700,350,120,20);
   createPlatform(900,250,100,20);
    
    




    // TODO 3 - Create Collectables
   createCollectable("diamond", 290, 280, 0.5, 0.5);
   createCollectable("grace", 490, 260, 0.5, 0.5);
   createCollectable("max", 890, 230, 0.5, 0.5);


    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1700);
    createCannon("bottom", 500, 1865);
    createCannon("bottom", 660, 2370);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
