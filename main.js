var canvas=document.getElementById('canv');
var ctx=canvas.getContext('2d');

ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;
var dragging=false;
var xpos,ypos,rad;
rad=20;
color='red';
var draw= function(e)
{ 
	if(dragging)
	{
	xpos=e.clientX;
	ypos=e.clientY;

	ctx.lineTo(xpos,ypos);
	ctx.stroke();
	ctx.lineWidth=2*rad;
	ctx.strokeStyle=color;

	ctx.beginPath();
	ctx.arc(xpos,ypos,rad,2*Math.PI,false);
	ctx.fillStyle=color;
	ctx.fill();
	ctx.beginPath();
	ctx.moveTo(xpos,ypos);
}
}
var click =function(e)
{
	draw(e);
	dragging=true;
}
var release =function(e)
{
	dragging=false;
	ctx.beginPath();
}


canv.addEventListener('mousedown',click);
canv.addEventListener('mousemove',draw);
canv.addEventListener('mouseup',release);