function preload(){


}

function setup(){

    canvas= createCanvas(800,550)
    canvas.position(200,250)
    video = createCapture(VIDEO)
    video.hide()
    tint_colour=""

}


function draw(){

    image(video,0,0,800,550)
    tint(tint_colour)
}

function take_snapshot(){

    save('image.png')
}

function filter_colour(){
    
    tint_colour = document.getElementById("tint_input").value;
}