window.requestAnimationFrame = (function() {
    return  window.requestAnimationFrame        ||
            window.webkitRequestAnimationFrame  ||
            window.mozRequestAnimationFrame     ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
}());

function SnowFlake(x, y, radius, n) {
    this.x      = x;
    this.y      = y;
    this.radius = radius;
    this.vx     = Math.random() * 2 - 1;
    this.vy     = Math.random() * 2 + 1;
    this.angle  = Math.random() * 360;

    this.flake          = document.createElement('canvas');
    this.flake.width    = radius * 2;
    this.flake.height   = radius * 2;

    var context = this.flake.getContext('2d'),
        i;

    // center coordinate
    context.translate(radius, radius);

    context.fillStyle = 'hsla(0, 100%, 100%, .8)';

    context.beginPath();
    for (i = 0; i < n; ++i) {
        context.lineTo(0, -radius);
        context.rotate(Math.PI / n);
        context.lineTo(0, radius);
        context.rotate(Math.PI / n);
    }
    context.fill();
}

window.onload = function() {
    function update() {
        var i, len, flake;

        for (i = 0, len = flakes.length; i < len; i++) {
            flake = flakes[i];

            flake.angle += flake.vx * 10;
            flake.x     += flake.vx;
            flake.y     += flake.vy;

            if (flake.y - 2 * flake.radius > height) {
                flake.y = -flake.radius;
                flake.vx = Math.random() * 2 - 1;
                flake.vy = Math.random() * 2 + 1;
            }
        }

        setTimeout(update, 44);
    }

    function render() {
        var i, len, flake;

        context.clearRect(0, 0, width, height);

        for (i = 0, len = flakes.length; i < len; i++) {
            flake = flakes[i];

            context.save();
            context.translate(flake.x + flake.radius, flake.y + flake.radius);
            context.rotate(flake.angle * Math.PI / 180);
            context.drawImage(flake.flake, -flake.radius, -flake.radius);
            context.restore();
        }

        requestAnimationFrame(render);
    }

    var canvas = document.getElementById('snow'), 
        context = canvas.getContext('2d'), 
        height = canvas.height = document.body.offsetHeight, 
        width = canvas.width = document.body.offsetWidth, 
        flakes = [],
        FLAKE_COUNT = Math.max(width, height) / 8,
        i;

    for (i = 0; i < FLAKE_COUNT; ++i) {
        var x    = Math.random() * width,
            y    = Math.random() * height,
            r    = Math.random() * 5 + 5,
            n    = Math.random() * 8 + 6,
            flake = new SnowFlake(x, y, r, n);

        flakes.push(flake);
    }

    render();
    update();
};