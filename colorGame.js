var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var clickedColor;
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function()
								 {
								 	easyBtn.classList.add("selected");
								 	hardBtn.classList.remove("selected");
								 	numSquares=3;
								 	colors=generateRandomColors(numSquares);
								 	pickedColor=pickColor();
								 	colorDisplay.textContent=pickedColor;
								 	for(var i=0;i<squares.length;i++)
								 	{
								 		if(colors[i])
								 		{
								 			squares[i].style.background=colors[i];
								 		}
								 		else
								 		{
								 			squares[i].style.background="none";
								 		}
								 							 		
								 	}
								 }
						);

hardBtn.addEventListener("click",function()
								 {
								 	easyBtn.classList.remove("selected");
								 	hardBtn.classList.add("selected");
								 	numSquares=6;
								 	colors=generateRandomColors(numSquares);
								 	pickedColor=pickColor();
								 	colorDisplay.textContent=pickedColor;
								 	for(var i=0;i<squares.length;i++)
								 	{
								 		squares[i].style.background=colors[i];
								 		squares[i].style.background="block";
								 							 		
								 	}
								 }
						);

reset.addEventListener("click",function()
							   {
								   	reset.textContent="New Colors";

								   	message.textContent="";

								   	colors=generateRandomColors(numSquares);

								   	pickedColor=pickColor();

								   	colorDisplay.textContent=pickedColor;

								   	// for(var i=0;i<squares.length;i++)
									   // 	{
									   // 		squares[i].style.background=colors[i];
									   // 	}

									for(var i=0;i<squares.length;i++)
								 	{
								 		if(colors[i])
								 		{
								 			squares[i].style.background=colors[i];
								 		}
								 		else
								 		{
								 			squares[i].style.background="none";
								 		}
								 							 		
								 	}	

									 h1.style.background="steelblue";						   
							   }
					  );

for(var i=0;i<colors.length;i++)
{
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function()
										{
											clickedColor=this.style.background;
											if(clickedColor==pickedColor)
											{
												message.textContent="Correct";
												reset.textContent="Play Again?";
												colorChange(clickedColor);
												h1.style.background=clickedColor;
											}
											else
											{
												message.textContent="Try Again";
												this.style.background="#232323";
											}
											
										}
								);
}

function colorChange(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}
function pickColor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		arr.push("rgb("+r+", "+g+", "+b+")");
	}
	return arr;
}