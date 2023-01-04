const dndForWeb = (ball, field) => {
    let coordX;
    let coordY;
    
    ball.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/html', 'dragstart');
        coordX = e.offsetX;
        coordY = e.offsetY;
    });

    field.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    ball.addEventListener('drag', (e) => {
        ball.style.display = 'none';
        ball.style.cursor = 'move'
    });

    field.addEventListener('dragenter', (e) => {
        ball.style.cursor = 'move';
     });
 
     field.addEventListener('dragleave', (e) => {
         ball.style.cursor = 'not-allowed';
     });
 
     field.addEventListener('drop', (e) => {
         ball.style.top = (e.pageY - coordY) + 'px';
         ball.style.left = (e.pageX - coordX) + 'px';
     });
     
     ball.addEventListener('dragend', (e) => {
         ball.style.display = 'block';
     });   
};

export default dndForWeb;