
var step = 3;
var incr = function()
{
	if(rad%step==0)
	{
	rad=rad+step;
	}
	else
	{
		rad=rad+1;
	}
	curval.innerHTML=rad;
}
var decr = function()
{
	if(rad>step)
	{
		rad=rad-step;
	}
	else if(rad>1)
	{
		rad=rad-1;
	}
	curval.innerHTML=rad;
}

inc.addEventListener('click',incr);
dec.addEventListener('click',decr);

