/** @type {HTMLCanvasElement} */


//canvas and context
const canvas = document.getElementById("myCanvas");
canvas.width = screen.availWidth - 20;
canvas.height = screen.availHeight - 20;
const ctx = canvas.getContext('2d');


//Functions
//return a string of the rgba values passed to it
function rgba(r , g , b ,a) {return `rgba(${r.toString()}, ${g.toString()}, ${b.toString()}, ${a.toString()})`}

//returns if a point is in a defined surface
function include(point , x , y , w , h) {return (point.x >= x && point.x <= x + w && point.y >= y && point.y <= y + h)}

//Vector Class
class Vector {
    constructor(x=null , y=null , p1=null , p2=null , color=null) {
        if(!x && !p1) throw TypeError("Atleast 2 parameters Should Be Provided");
        if(x && y) {
            this.x = x;
            this.y = y;
        } else if(p1 && p2) {
            this.x = p2.x - p1.x;
            this.y = p2.y - p1.y;
            this.p1 = p1;
            this.p2 = p2;

        }
        this.color = color ? color : {r:255 , g:255 , b:255 ,a:1};
    }
    //Add Two Vectors
    set add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    };
    //Remove one vector of another
    set remove(vector) {
        this.y -= vector.y;
        this.x -= vector.x;
    };
    //Draw Vector
    draw(ctx , x , y) {
        if(x , y) {
            ctx.beginPath();
            ctx.strokeStyle = rgba(this.color.r , this.color.g , this.color.b , this.color.a);
            ctx.moveTo(x, y);
            ctx.lineTo(x + this.x , y + this.y);
            ctx.stroke();
            ctx.closePath();
        } else if(this.p1 , this.p2) {
            this.p1.color.a = 1;
            this.p2.color.a = 1;
            ctx.beginPath();
            ctx.strokeStyle = rgba(this.color.r , this.color.g , this.color.b , this.color.a);
            ctx.moveTo(this.p1.x , this.p1.y);
            ctx.lineTo(this.p1.x + this.x , this.p1.y + this.y);
            ctx.stroke();
            ctx.closePath();
            //console.log(`Draw At X1 : ${this.p1.x} , Y1 : ${this.p1.y} , X2 : ${this.p1.x + this.x} , Y2 : ${this.p1.y + this.y} ; Color : ${this.color} ; Vector : ${this}`);
        }
        
    };
}


//Point Class
class Point {
    constructor(x , y , color , radius) {
        this.x = x;
        this.y = y;
        this.color = color ? color : {r:0,g:0,b:0,a:1};
        this.radius= radius;
    }
    //Draw Point
    draw(ctx) {
        ctx.fillStyle = (this.color) ? rgba(this.color.r , this.color.g , this.color.b , this.color.a) : rgba(0, 0  , 0 ,1);
        ctx.beginPath();
        ctx.moveTo(this.x , this.y);
        ctx.arc(this.x + 2, this.y  , this.radius , 0 , Math.PI * 2 , true);
        ctx.fill();
        ctx.closePath();
    }
}




//Generating Points
const points = [];
for(let c =0 ; c <= 300 ; c++) {
    let p = new Point(c * screen.availWidth / 200 + (0.5 - Math.random()) * 5 , Math.random() * screen.availWidth, {r:255 , g:255 ,b:255 , a:1} , 2);
    p.draw(ctx);
    points.push(p);
}




//Get Vectors Of Points Passed To it
function vectorGet(targetPoints) {
    for(let i = 0 ; i <= targetPoints.length  ; i++) {
        if(i%2==0 || !targetPoints[i + 1]) continue;
        
        targetVectors.push(new Vector(null , null , targetPoints[i] , targetPoints[i + 1] , targetPoints[i].color));
    }
}

let targetVectors = [];
let targetPoints = [];
canvas.addEventListener('mousemove',mouse => {
    //Clearing target points inefficiently because I suck.
    for(c of targetPoints) targetPoints.pop(c);
    for(c of targetVectors) targetVectors.pop(c);

    //re-getting the nearest points
    points.forEach(point => {
        if(include(point , mouse.x - 50 * 1.45 , mouse.y - 50 * 1.45 , 100 * 1.45 , 100 * 1.45)) targetPoints.push(point);
    })
    vectorGet(targetPoints);
})


//Drawing
function draw() {
    points.forEach(point=>point.draw(ctx));
    targetVectors.forEach(vec=>vec.draw(ctx));
}


function main() {
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);

    points.forEach(point => {
        point.color.a += 0.5 - Math.random();
        point.color.r = 255 - Math.random() * 255;
    });

    draw();
}


setInterval(main , 1000 / 60);


//BTW THIS CODE IS EXTREMLY INEFFICIENT ITS GONNA BLOW UP YOUR PC CAUSE I SUCK AT PROGRAMMING








