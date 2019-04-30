const c = 30
const G = 3
const dt = 0.1
let m87
const partilcles = []

let start, end

function setup(){
  createCanvas(windowWidth, windowHeight)
  ellipseMode(RADIUS)
  m87 = new Blackhole(300, height/2, 3000)
  
  start = height/2;
  end = height/2 - m87.rs*2.6

  for(let i = 0; i < height/2; i+=20){
    partilcles.push(new Photon(width-20, i)) 
  }
}

function draw(){
  background(255)
  m87.show()

  stroke(0)
  strokeWeight(1)

  for(let p of partilcles){
    m87.pull(p)
    p.update()
    p.show()
  }
}