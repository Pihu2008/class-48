var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a371f952-336c-424b-b4bc-912b7f4fbe45","90e1c0f6-a8cd-4030-94d2-1be96a4672da","c5c73cba-d720-44e4-84c9-9c34ac8a138b","6eff0fa7-fe9a-4d84-adff-0adfaeee4729","3095e5a4-458f-44a9-a336-261ce94db065","a209fb6b-1f02-4dd5-b841-2b7d3ec537bb","af840fbe-15ed-43e4-a564-b34d5a3f7737","8f75e30a-e6e0-4734-9f71-f9120fcb98c5","0a010b85-ae04-4d8c-932f-2f9cc778df75","7dc1f223-0c0d-441d-bbe2-2c6bd485b992","7fa113b0-2d12-43b7-be5a-a40eb3716769","236c750b-31d3-45b2-aebf-674819c82035"],"propsByKey":{"a371f952-336c-424b-b4bc-912b7f4fbe45":{"name":"girl","sourceUrl":"assets/api/v1/animation-library/gamelab/yUPR_nJiUedBfng86O8Fif6p_swXN6RM/category_characters/kid_36_side.png","frameSize":{"x":225,"y":335},"frameCount":1,"looping":true,"frameDelay":2,"version":"yUPR_nJiUedBfng86O8Fif6p_swXN6RM","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":335},"rootRelativePath":"assets/api/v1/animation-library/gamelab/yUPR_nJiUedBfng86O8Fif6p_swXN6RM/category_characters/kid_36_side.png"},"90e1c0f6-a8cd-4030-94d2-1be96a4672da":{"name":"run girl","sourceUrl":null,"frameSize":{"x":225,"y":335},"frameCount":2,"looping":true,"frameDelay":2,"version":"ChtqtfVTi9Dv0wo2Jr71jEyGNjTmcyDF","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":335},"rootRelativePath":"assets/90e1c0f6-a8cd-4030-94d2-1be96a4672da.png"},"c5c73cba-d720-44e4-84c9-9c34ac8a138b":{"name":"boy","sourceUrl":"assets/api/v1/animation-library/gamelab/EfNsXiVxO2BN4IkT56BPMqd203yjf8u1/category_characters/kid_30_side.png","frameSize":{"x":204,"y":343},"frameCount":1,"looping":true,"frameDelay":2,"version":"EfNsXiVxO2BN4IkT56BPMqd203yjf8u1","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":343},"rootRelativePath":"assets/api/v1/animation-library/gamelab/EfNsXiVxO2BN4IkT56BPMqd203yjf8u1/category_characters/kid_30_side.png"},"6eff0fa7-fe9a-4d84-adff-0adfaeee4729":{"name":"run boy","sourceUrl":null,"frameSize":{"x":204,"y":343},"frameCount":2,"looping":true,"frameDelay":2,"version":"6QcDOIMY_MouD6_yPRlewP0_hS4g2OSu","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":408,"y":343},"rootRelativePath":"assets/6eff0fa7-fe9a-4d84-adff-0adfaeee4729.png"},"3095e5a4-458f-44a9-a336-261ce94db065":{"name":"win burger","sourceUrl":null,"frameSize":{"x":300,"y":262},"frameCount":10,"looping":true,"frameDelay":12,"version":"_EWz53tl7oQg_JFBCk4wf1RZUjHNBRV.","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":1048},"rootRelativePath":"assets/3095e5a4-458f-44a9-a336-261ce94db065.png"},"a209fb6b-1f02-4dd5-b841-2b7d3ec537bb":{"name":"burger","sourceUrl":"assets/api/v1/animation-library/gamelab/zddJI3m4p1M6UcMxS4UHm2qoFOIokA4R/category_food/burger.png","frameSize":{"x":300,"y":262},"frameCount":1,"looping":true,"frameDelay":2,"version":"zddJI3m4p1M6UcMxS4UHm2qoFOIokA4R","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":262},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zddJI3m4p1M6UcMxS4UHm2qoFOIokA4R/category_food/burger.png"},"af840fbe-15ed-43e4-a564-b34d5a3f7737":{"name":"up","sourceUrl":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png"},"8f75e30a-e6e0-4734-9f71-f9120fcb98c5":{"name":"down","sourceUrl":"assets/api/v1/animation-library/gamelab/rd9oh060owV1Tug6HNh3TsO_MuJFZCK9/category_obstacles/rockGrassDown.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"rd9oh060owV1Tug6HNh3TsO_MuJFZCK9","categories":["obstacles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rd9oh060owV1Tug6HNh3TsO_MuJFZCK9/category_obstacles/rockGrassDown.png"},"0a010b85-ae04-4d8c-932f-2f9cc778df75":{"name":"stage","sourceUrl":"assets/api/v1/animation-library/gamelab/02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s/category_backgrounds/stage.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s/category_backgrounds/stage.png"},"7dc1f223-0c0d-441d-bbe2-2c6bd485b992":{"name":"life","sourceUrl":"assets/api/v1/animation-library/gamelab/FQGvBo1ZN9AgSLu1hVBQNYlZllf.23Ot/category_gameplay/pieceYellow_single05.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"FQGvBo1ZN9AgSLu1hVBQNYlZllf.23Ot","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FQGvBo1ZN9AgSLu1hVBQNYlZllf.23Ot/category_gameplay/pieceYellow_single05.png"},"7fa113b0-2d12-43b7-be5a-a40eb3716769":{"name":"gm","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"236c750b-31d3-45b2-aebf-674819c82035":{"name":"re","sourceUrl":"assets/api/v1/animation-library/gamelab/3Tm5mJDk49xZFIlKxkunVL7xtIFyOPTN/category_gameplay/flatDark41.png","frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":2,"version":"3Tm5mJDk49xZFIlKxkunVL7xtIFyOPTN","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3Tm5mJDk49xZFIlKxkunVL7xtIFyOPTN/category_gameplay/flatDark41.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(0, 0, 400, 400);
bg.setAnimation("stage");
bg.scale = 2;
bg.velocityX = -6;

var girlRun = createSprite(100, 300, 10, 10);
girlRun.setAnimation("run girl");
girlRun.scale = 0.3;
girlRun.setCollider("rectangle",0,0,girlRun.width, girlRun.height);
//girlRun.debug = true;

var boyRun = createSprite(100, 300, 10, 10);
boyRun.setAnimation("run boy");
boyRun.scale = 0.3;
boyRun.setCollider("rectangle",0,0,80,80);
//boyRun.debug = true;

var option1 = createSprite(100, 100, 10, 10);
option1.setAnimation("girl");
option1.scale = 0.3;

var option2 = createSprite(100, 300, 10, 10);
option2.setAnimation("boy");
option2.scale = 0.3;

var gameState = 0;

var rockGroup = createGroup();
var foodGroup = createGroup();

var reset = createSprite(200,300,20,20);
 reset.setAnimation("re");
 reset.scale = 1;
  var life = 3;
  var br = 0;
  
  var gameOver = createSprite(200,200,20,20);
  gameOver.setAnimation("gm");
  var invisible = createSprite(200,310,400,5);
invisible.visible = false;
function draw() {

if(gameState === 0){
  gameOver.visible = false;
  reset.visible = false;
  boyRun.visible = false;
  girlRun.visible = false;
  option1.visible = true;
  option2.visible = true;
  if(mousePressedOver(option1)){
    gameState = 1;
  }
  if(mousePressedOver(option2)){
    gameState = 2;
  }
}
if(gameState === 1){
   gameOver.visible = false;
  reset.visible = false;
  option1.visible = false;
  option2.visible = false;
  girlRun.visible = true;
  
 girlRun.collide(invisible); 
  bg.velocityX = -6;
  if(bg.x<0){
    bg.x = 300;
  }
  spawnRock();
   spawnFood();
  if(keyDown("up")&& girlRun.y > 200){
    girlRun.velocityY = -16;
  }
  girlRun.velocityY =  girlRun.velocityY + 0.8;


if(rockGroup.isTouching(girlRun)){
  girlRun.scale = girlRun.scale - 0.1;
rockGroup.destroyEach();
life = life-1;
playSound("assets/category_hits/8bit_splat.mp3",false);

}
if(foodGroup.isTouching(girlRun)){
  girlRun.scale = girlRun.scale + 0.1;
  foodGroup.destroyEach();
  life = life +1;
  br = br+1;
playSound("assets/category_achievements/lighthearted_bonus_objective_5.mp3",false);
}

 
if(life === 0){
 bg.velocityX = 0;
  rockGroup.setVelocityXEach(0);
  foodGroup.setVelocityXEach(0);
  girlRun.visible = false;
   gameOver.visible = true;
  foodGroup.destroyEach();
  rockGroup.destroyEach();
 reset.visible = true;
  
  if(mousePressedOver(reset)){
    restart();
  }
}
}
if(gameState === 2){
   gameOver.visible = false;
reset.visible = false;
  option1.visible = false;
  option2.visible = false;
  boyRun.visible = true;
   
   boyRun.collide(invisible); 
   bg.velocityX = -6;
  
  if(bg.x<0){
    bg.x = 300;
  }
  spawnRock();
  spawnFood();
  if(keyDown("up")&& boyRun.y > 200){
    boyRun.velocityY = -16;
  }
  boyRun.velocityY =  boyRun.velocityY + 0.8;


if(rockGroup.isTouching(boyRun)){
  boyRun.scale = boyRun.scale - 0.1;
rockGroup.destroyEach();
life = life-1;
}
if(foodGroup.isTouching(boyRun)){
  boyRun.scale = boyRun.scale + 0.1;
  foodGroup.destroyEach();
  life = life +1;
   br = br+1;
}

 
if(life === 0){
 bg.velocityX = 0;
  rockGroup.setVelocityXEach(0);
  foodGroup.setVelocityXEach(0);
  boyRun.visible = false;
   gameOver.visible = true;
  foodGroup.destroyEach();
  rockGroup.destroyEach();
 reset.visible = true;
  playSound("assets/category_female_voiceover/game_over_female.mp3",false);
  if(mousePressedOver(reset)){
    restart();
  }
}}


//if(mousePressedOver(reset)){
 // gameState = 0;
 // option1.visible = true;
//  option2.visible = true;
//  life = 3;
//  boyRun.visible = true;
//  girlRun.visible = true;
//  bg.velocityX = -6;
//}

drawSprites();
     textSize(30);
fill("white");
text("Life: "+life,300,30); 
text("Burgers eaten: "+br,20,30);
}
function spawnRock(){
  if(World.frameCount%200 === 0){
    var rockUp = createSprite(400,360,10, 10);
    rockUp.setAnimation("up");
    rockUp.velocityX = -6;
    rockUp.scale = 1;
    rockGroup.add(rockUp);
  }
  if(World.frameCount%220 === 0){
     var rockDown = createSprite(400,40,10, 10);
    rockDown.setAnimation("down");
    rockDown.velocityX = -6;
    rockDown.scale = 0.5;
    rockGroup.add(rockDown);
  }
}
function spawnFood(){
  if(World.frameCount%138 === 0){
    var food = createSprite(400, 250, 10, 10);
    food.setAnimation("burger");
    food.y = random(50,300);
    food.velocityX = -6;
    food.scale = 0.21;
    foodGroup.add(food);
  }
}
function restart(){
  gameState = 0;
  life = 3;
  girlRun.scale = 0.3;
  boyRun.scale = 0.3;
  girlRun.collide(invisible);
  boyRun.collide(invisible);
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
