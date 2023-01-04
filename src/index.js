import dndForWeb from './dndForWeb';
import dndForMobile from './dndForMobile';
import "../style.css";

const ball = document.getElementById('ball-id');
const field = document.getElementById('field-id');
    
dndForMobile(ball, field);
dndForWeb(ball, field);


