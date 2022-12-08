function play(){
    document.getElementById("tree").setAttribute("class","cactus");
    setTimeout(() => {
        document.getElementById("tree1").style.visibility="visible";
        document.getElementById("tree1").setAttribute("class","cactus");
    }, 3000);

    document.body.onkeyup=function(e){
        if(e.code=='Space'){
            document.getElementById("dino").setAttribute("class","jump");
            setTimeout(() => {
                document.getElementById("dino").removeAttribute("class");
            }, 2000);
        }
    }

    var id=setInterval(() => {
        var a=document.getElementById("dino").offsetTop;
        var b=document.getElementById("tree").offsetLeft;
        var c=document.getElementById("tree1").offsetLeft;

        if((a>=115 && a<=168)&&((b>=0 && b<=70)||(c>=0 && c<=70))){
            document.getElementById("tree").style.animationPlayState="paused";
            document.getElementById("tree1").style.animationPlayState="paused";
            document.getElementById("dino").style.animationPlayState="paused";

            alert("GAME OVER !!");
            clearInterval(id);
        }
    }, 10);

    document.getElementById("play").removeAttribute("onclick");
}

function replay(){
    window.location.reload();
}