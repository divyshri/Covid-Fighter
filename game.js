
function preload() {
    enemy_image = new Image;
    enemy_image.src = "assets/v1.png";

    player_image = new Image;
    player_image.src = "assets/superhero.png";

    gem_image = new Image;
    gem_image.src = "assets/gemm.png"
}

function init() {
    canvas = document.getElementById("mycanvas");
    pen = canvas.getContext('2d');
    W = 700;
    H = 400;
    canvas.width = 700;
    canvas.height = 400;
    e1 = {
        x: 150,
        y: 50,
        h: 60,
        w: 60,
        speed: 15
    };
    e2 = {
        x: 300,
        y: 50,
        h: 60,
        w: 60,
        speed: 25
    };
    e3 = {
        x: 450,
        y: 50,
        h: 60,
        w: 60,
        speed: 35
    };
    enemy = [e1, e2, e3];

    player = {
        x: 20,
        y: H / 2,
        w: 60,
        h: 60,
        speed: 20,
        moving: false
    };
    gem = {
        x: W - 100,
        y: H / 2,
        w: 60,
        h: 60
    }

    //Event Handler
    canvas.addEventListener('mousedown', function () {
        player.moving = true;
    });
    canvas.addEventListener('mouseup', function () {
        player.moving = false;
    });

}

function draw() {
    //clear the canvas area
    pen.clearRect(0, 0, W, H);

    //draw gem
    pen.drawImage(gem_image, gem.x, gem.y, gem.w, gem.h);

    //draw player
    pen.drawImage(player_image, player.x, player.y, player.w, player.h);


    for (let i = 0; i < enemy.length; i++) {
        pen.drawImage(enemy_image, enemy[i].x, enemy[i].y, enemy[i].w, enemy[i].h);
    }
}

function isOverlap(ob1, ob2) {
    if (ob1.x < ob2.x + ob2.w &&
        ob1.x + ob1.w > ob2.x &&
        ob1.y < ob2.y + ob2.h &&
        ob1.y + ob1.h > ob2.y)
        return true;
    return false;
}

function update() {

    if (player.moving == true) {
        player.x += player.speed;
    }




    for (let i = 0; i < enemy.length; i++) {
        enemy[i].y += enemy[i].speed;
        if (enemy[i].y >= (H - enemy[i].h) || enemy[i].y < 0) {
            enemy[i].speed *= -1;
        }
    }


}

function gameloop() {
    draw();
    update();
    console.log("In GameLoop")

}
preload();
init();
var f = setInterval(gameloop, 100)