var rot = 0;
var zoom = 1.0;
let zoomdir = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    img = loadImage("sky-night-stars.jpg");
}

function draw() {
    if (zoom < 1 || zoom >1.5) {
        zoomdir *= -1;
    }
    zoom -= 0.0002*zoomdir;
    translate(width / 2, height / 2);
    rotate(rot);
    rot += 0.001;
    image(img, -width * zoom, -height * zoom, width * 2 * zoom, height * 2 * zoom);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
