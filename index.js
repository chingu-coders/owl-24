/**
 * Theme - Stylesheet Generator for Reddit
 * Authors: Sriram Krishnan, James Kerrane, Devonnae Williams
 * Created: 7/20/2017
 * Team: Owl 24
 * Part of the Chingu Cohort
*/

function unhide(clickedButton, divID) {
var item = document.getElementById(divID);
if (item) {
    if(item.className=='hidden'){
        item.className = 'unhidden' ;
        clickedButton.value = 'Back'
    }else{
        item.className = 'hidden';
        clickedButton.value = 'Legere'
    }
}
}
    
 $(function(){

 	$('#legere').click(function(){

 	//	$('#about').toggle();

		 	
 		$("#about").load("/legere.html");
 	});
 	
 });      
     
