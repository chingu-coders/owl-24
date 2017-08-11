/**
 * Theme - Stylesheet Generator for Reddit
 * Authors: Sriram Krishnan, James Kerrane, Devonnae Williams
 * Created: 7/20/2017
 * Team: Owl 24
 * Part of the Chingu Cohort
*/

document.getElementById('Themes').addEventListener('change', function () {
    var style = this.value == 1 ? 'block' : 'none';
    document.getElementById('Legere_Hidden').style.display = style;
});

document.getElementById('Themes').addEventListener('change', function () {
    var style = this.value == 2 ? 'block' : 'none';
    document.getElementById('Eddited_Hidden').style.display = style;
});     
     
