window.addEventListener("load", function(){
    let json = []
    let index = 0
    let item = ''
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
        let firstName = json[1].firstName;
        function(){
        document.getElementsByClassName("astronaut").innerHTML = `
        <div class="bio">
           <h3>${firstName}</h3>
           <ul>
              <li>Hours in space: 190</li>
              <li>Active: false</li>
              <li>Skills: Physician, Chemical Engineer</li>
           </ul>
        </div>
        <img class="avatar" src="images/mae-jemison.jpg">`}
        })
        });


})