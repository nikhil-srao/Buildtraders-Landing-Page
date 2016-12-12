$(document).ready(function(){
  $("#form_submit").click(function(){
    // event.preventDefault();
 console.log("befikre");
    var name = $("#name").val();
    var phno = $("#mobile").val();
    var material = $("#material").val();
    var quantity = $("#quantity").val();
    var email = $("#email").val();
    var location = $("#loc").val();
    if(name==''||email==''||material==''|quantity==''||loc==''||phno=='')
    {
        alert("Please Fill All Fields");
    }
    else{
      $.ajax({
      type: "POST",
      url: "tmtsteel_form.php",
      data: {
          name1 : name, phno : phno, material1 : material , quantity1 : quantity, email1 : email, location1 : location
      },
      cache: false,
      success: function(result){
        alert(result);
        }
    });
  }
  return false;
  });
});
