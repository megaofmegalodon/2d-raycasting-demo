const myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;

function resize() {
    myCanvas.width = window.innerWidth * window.devicePixelRatio;
    myCanvas.height = window.innerHeight * window.devicePixelRatio;
    myCanvas.style.width = `${window.innerWidth}px`;
    myCanvas.style.height = ` ${window.innerHeight}px`;
}

resize();

window.addEventListener("resize", resize);