const dndForMobile = (ball, field) => {
    ball.addEventListener('touchstart', (e) => {
        e.preventDefault();
    });

    ball.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.targetTouches[0];
        ball.style.top = `${touch.pageY  - (ball.offsetWidth / 2)}px`;
        ball.style.left = `${touch.pageX - (ball.offsetHeight / 2)}px`;
    });

    ball.addEventListener('touchend', (e) => {
        const touch = e.changedTouches[0];

        const ballLeft = parseInt(ball.style.left);
        const ballTop = parseInt(ball.style.top);

        if (ballLeft > field.offsetLeft + field.offsetWidth) {
            ball.style.left = `${(field.offsetLeft + field.offsetWidth) - touch.radiusX}px`;
        };

        if (ballLeft < field.offsetLeft ) {
            ball.style.left = `${field.offsetLeft}px`;
        };

        if (ballTop < field.offsetTop) {
            ball.style.top = `${field.offsetTop}px`;
        };

        if (ballTop > field.offsetTop + field.offsetHeight) {
            ball.style.top = `${(field.offsetTop + field.offsetHeight) - touch.radiusY}px`;
        };
    }); 
};

export default dndForMobile;