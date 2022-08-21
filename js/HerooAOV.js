function searchfunc() {
    let menusearch = document.querySelector("#searchValue");
    let menuitems = Array.from(document.querySelectorAll('.hero-box'));
    /*let menuitems = document.querySelector('.hero-box');
  if (menuitems) {
            let text= el.innerText;
            console.log(text);
        }*/
    /*menusearch.value=menusearch.value.toLowerCase();*/
    menuitems.forEach(filter => {
        /*let text= el.innerText;*/
        let text = filter.getAttribute('data-name');
        if (text.indexOf(menusearch.value)>-1) {
            /*document.querySelector('.hero').style.display="none";*/
            filter.style.display = "";
            /*document.querySelector('.hero').style.display="none";*/
        } else {
            filter.style.display = "none";
        }
    });
}
/*function zoonout(image){
  document.querySelector('.container').toggle.style.display="flex";
}*/
/*var container = document.querySelector('.container');
      hinhtuong.onclick = function(){
        container.classList.toggle('on');
      };*/
/*function zoomout(image){
  var vin = image.src;
  document.getElementById('baohieu').src = vin;
}*/
/*function zoomout(image){
    var vinh = image.src;
}*/
function zoomout(image) {
    var vinh = image.src;
    document.getElementById('baohieu').src = vinh;
    document.getElementById("top").onclick = function(){
      document.getElementById
        ('pickblues1').src = vinh;
    };
    document.getElementById("jung").onclick = function(){
      document.getElementById
        ('pickblues2').src = vinh;
    };
    document.getElementById("mid").onclick = function(){
      document.getElementById
        ('pickblues3').src = vinh;
    };
    document.getElementById("ad").onclick = function(){
      document.getElementById
        ('pickblues4').src = vinh;
    };
    document.getElementById("sp").onclick = function(){
      document.getElementById
        ('pickblues5').src = vinh;
    };
    document.getElementById("redtop").onclick = function(){
      document.getElementById
        ('pickreds1').src = vinh;
    };
    document.getElementById("redjung").onclick = function(){
      document.getElementById
        ('pickreds2').src = vinh;
    };
    document.getElementById("redmid").onclick = function(){
      document.getElementById
        ('pickreds3').src = vinh;
    };
    document.getElementById("redad").onclick = function(){
      document.getElementById
        ('pickreds4').src = vinh;
    };
    document.getElementById("redsp").onclick = function(){
      document.getElementById
        ('pickreds5').src = vinh;
    };
    banblue1.onclick = function() 
    {
        document.getElementById
        ('banblue1').src = vinh;
    };
    banblue2.onclick = function() 
    {
        document.getElementById
        ('banblue2').src = vinh;
    };
    banblue3.onclick = function() 
    {
        document.getElementById
        ('banblue3').src = vinh;
    };
    banblue4.onclick = function() 
    {
        document.getElementById
        ('banblue4').src = vinh;
    };
    banred1.onclick = function() 
    {
        document.getElementById
        ('banred1').src = vinh;
    };
    banred2.onclick = function() 
    {
        document.getElementById
        ('banred2').src = vinh;
    };
    banred3.onclick = function() 
    {
        document.getElementById
        ('banred3').src = vinh;
    };
    banred4.onclick = function() 
    {
        document.getElementById
        ('banred4').src = vinh;
    };
}
/*function zoomout(image){
  var vinh = image.src;
  document.getElementById('hinhtuong').src = vinh;
}*/
/*var vinh= "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"*/
/*document.getElementById('hinhtuong').src = vinh;*/