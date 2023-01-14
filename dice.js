function roll()
{
  var num=Math.ceil(Math.random()*6);
  var num1=Math.ceil(Math.random()*6);
   //test alert(num);
   document.getElementById('img0').setAttribute("src","images./dice"+num+".png");
   document.getElementById('img02').setAttribute("src","images./dice"+num1+".png");
if(num>num1)
{
  document.getElementById('refresh').innerHTML="Player 1 wins";
}
else if(num<num1)
{
  document.getElementById('refresh').innerHTML="Player 2 wins";
}
else{
  document.getElementById('refresh').innerHTML="Nobody wins";
}
}
