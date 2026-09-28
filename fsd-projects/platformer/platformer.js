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
   createPlatform(500,450,100,20);
   createPlatform(700,350,120,20);
   createPlatform(900,250,100,20);
    
    




    // TODO 3 - Create Collectables
   createCollectale("gold_coin", 290, 370, 0.5, 0.5);
   createCollectable("health_potion", 490, 300, 0.5, 0.5);
   createCollectable("speed_boost", 890, 160, 0.5, 0.5);


    
    // TODO 4 - Create Cannons
    createCannon("top", 100, 360);
    createCannon("left", 287, 1000);
    createCannon("bottom", 660, 2370);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
