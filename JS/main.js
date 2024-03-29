let currentZoom = 200;

function zoomIn() {
    if (currentZoom < 200) {
        currentZoom += 10;
        document.getElementById('image').style.width = currentZoom + 'px';
        document.getElementById('image').style.height = currentZoom + 'px';
        document.getElementById('minus').style.display = 'inline-block';
    }
    if (currentZoom >= 200) {
        document.getElementById('plus').style.display = 'none';
    }
}

function zoomOut() {
    if (currentZoom > 50) {
        currentZoom -= 10;
        document.getElementById('image').style.width = currentZoom + 'px';
        document.getElementById('image').style.height = currentZoom + 'px';
        document.getElementById('plus').style.display = 'inline-block';
    }
    if (currentZoom <= 50) {
        document.getElementById('minus').style.display = 'none';
    }
}

function changeColor(color) {
    document.getElementById('text').style.color = color;
}

function changeAlignment(alignment) {
    document.getElementById('text').style.textAlign = alignment;
}
