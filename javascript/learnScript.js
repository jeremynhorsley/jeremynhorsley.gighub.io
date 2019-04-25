function dropdownMenu() {
          var x = document.getElementById("dropdownClick");
          if (x.className === "topnav") {
              x.className += " responsive";
              /*change topnav to topnav.responsive*/
          } else {
              x.className = "topnav";
          }     
      } 

function area(t,w,h,r) {
    if(t == "T") {
        return w*h*0.5;
    }  
}

var skills = [];
function skill(name, years, perc) {
    this.name = name;
    this.years = years;
    this.perc = perc;
    this.greeting = function(){
        return "I have " + this.years + "exp with " + this.name + "and " + this.perc + "confidence";
    }   
}


skills.push(new skill("HTML", 10, 100));
skills.push(new skill("CSS", 10, 100));
skills.push(new skill("Javascript", 8, 95));
            

for ( var i = 0; i < skills.length; i++) {
    var skill =skills[i];
    console.log(skill.greeting());
}


    