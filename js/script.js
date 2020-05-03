function showAlert() {
    // we will use alert and console log for debugging

    // alert("hello world");
    // console.log("Hello world in console")
    // setTimout is used to pause the actions
    setTimeout(function () {
        alert("hello world");
        console.log("Hello world in console");
    }, 3000);
}

function showLoop() {
    //setInterval is used to loop animation or functions in javascript
    //   function hello() {
    //       alert("hello world from loop");
    //       console.log("hello world from loop");
    //   }
    //   setInterval(hello,3000);

    setInterval(function () {
        alert("hello world from loop")
        console.log("hello world from loop");
    }, 3000);
}

function moveImage() {
    image = document.getElementById("moveImage");
    x = 10; //left
    y = 10; //top
    speed = Number(document.getElementById("speedInput").value);
    // create a function in loop, and loop it each half second
    setInterval(function () {
        if (x == 10 && x <= 500 && y == 10){
            x=x+speed; //only moving to right
        }else if(x == 500 && y == 10) {
            y=y + speed; //only moving to bottom
        }else if(x == 500 && y == 500) {
            x=x - speed; //only moving left
        }else if(x == 10 && y == 500){
            y=y-speed; //only moving to top
        }
        //x = x + speed;
        //y = y + speed;
        console.log("x=", x);
        console.log("y=", y);
        image.style.left = x + "px";
        image.style.left = x + "px";
    }, 500);
}
