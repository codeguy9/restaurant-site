 /* function openNav() {
  document.getElementById(".menu").style.display = "flex";
 };


 function closeNav() {
    document.getElementById(".menu").style.display = "none";
  }  */

  /* const toggleButton = document.querySelector('.toggle-button');
  const menuLinks = document.querySelector('.menu');

  toggleButton.click(function {
    menuLinks.style.width = '7em';
  })  */
      
   

        $(document).ready(function() {
            $('.toggle-button').click(function() {
                $('.menu').toggle();
        })
            
     
  });  

        $(function() {
            $('.closebtn').click(function() {
                $('.menu').hide();
            })
        })
  
