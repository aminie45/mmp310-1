const button = document.getElementsByClassName('button');
const indvButton = [
    document.getElementById('s1-b1'),
    document.getElementById('s1-b2'),
    document.getElementById('s2-b1'),
    document.getElementById('s2-b2'),
    document.getElementById('s3-b1'),
    document.getElementById('s3-b2'),
    document.getElementById('s4-b1'),
    document.getElementById('s4-b2'),
    document.getElementById('s5-b1'),
    document.getElementById('s5-b2'),
    document.getElementById('s6-b1'),
    document.getElementById('s6-b2'),
    document.getElementById('s7-b1'),
    document.getElementById('s7-b2'),
    
];


indvButton[0].onclick = function() {
    document.getElementById('scenario-1').style.display = 'none';
    
    document.getElementById('scenario-2').style.display = 'block';
}

indvButton[1].onclick = function() {
    document.getElementById('scenario-1').style.display = 'none';
    
    document.getElementById('scenario-3').style.display = 'block';
}

indvButton[2].onclick = function() {
    document.getElementById('scenario-2').style.display = 'none';
    
    document.getElementById('scenario-4').style.display = 'block';
}

indvButton[3].onclick = function() {
    document.getElementById('scenario-2').style.display = 'none';
    
    document.getElementById('scenario-5').style.display = 'block';
}