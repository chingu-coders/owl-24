/**
 * Theme - Stylesheet Generator for Reddit
 * Authors: Sriram Krishnan, James Kerrane, Devonnae Williams
 * Created: 7/20/2017
 * Team: Owl 24
 * Part of the Chingu Cohort
*/

document.getElementById('Themes').addEventListener('change', function () {


    document.getElementById('about').className='hidden';

    var el=document.getElementById('Themes');
   
    var style=[];

    for(var i=0;i<el.options.length;i++)
    {
    	 style[i] = el.options[i].value == el.selectedIndex ? 'block' : 'none';
    
    	if(document.getElementById(el.options[i].innerHTML)!==null)	
    	 document.getElementById(el.options[i].innerHTML).style.display = 'none';

    }
 	
 	document.getElementById(el.options[el.selectedIndex].innerHTML).style.display = style[el.selectedIndex];    
   
});


	

$('#legere').click(function(){
 alert('test');
  document.getElementById('about').className='unhidden';
  		$("#about").load("legere.html");
 
  });  

$('#FBRT').click(function(){
 document.getElementById('about').className='unhidden';
  		$("#about").load("fbrt.html");
 
  }); 