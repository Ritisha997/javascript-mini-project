const art = document.querySelectorAll(".articles");
const btn = document.querySelectorAll(".btn");
const about = document.querySelectorAll(".content");
const btns = document.querySelector(".btns");
const name = document.getElementById("name");
const birth = document.getElementById("birth");
const store = document.getElementById("store");
const qualifications = document.getElementById("qualifications");
const aggregate = document.getElementById("aggregate");
const parent = document.querySelector(".parent");
const arr = document.querySelectorAll(".check");
const header = document.querySelector(".header");
const article = document.querySelector(".article");
const main = document.querySelector(".main");
const eve = document.getElementById("event");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const project = document.getElementById("project");
const certificate = document.getElementById("certificate");
const hobbies = document.getElementById("hobbies");
const nationality = document.getElementById("nationality");
const email = document.getElementById("email");

let str = [];

header.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    console.log(id);

    if (id) {
        art.forEach(function (item) {

            item.classList.remove("active-dis");
        })

        const element = document.getElementById(id);
        console.log(element)
        element.classList.add("active-dis");

    }
});

parent.addEventListener("click", function (e) {
    const targets = e.target.parentNode;
    const flag = e.target.dataset.set;
    console.log(targets.dataset.set);
    if (flag) {
        targets.classList.remove("active");
        targets.nextElementSibling.classList.add("active");

        //console.log(str);
    }
})
store.addEventListener("click", function () {
    arr.forEach(function (i) {
        if (i.checked) {
            str.push(i.value);
        }

        // arr.filter((item, 
        //     index) => arr.indexOf(item) === index);

    });

    // arr.filter((item, 
    //     index) => arr.indexOf(item) === index);

    str = [...new Set(str)];
})

//console.log(btns);

btns.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    // console.log(id);

    if (true) {
        about.forEach(function (item) {
            console.log(about)
            item.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});



store.addEventListener("click", function () {

    const user = {
        name: name.value,
        birth: birth.value,
        qualifications: qualifications.value,
        aggregate: aggregate.value,
        arr: str,
        email: email.value,
        nationality: nationality.value,
        hobbies: hobbies.value,
        project: project.value,
        certificate: certificate.value
    
    }
    console.log(user);
    sessionStorage.setItem("obj1", JSON.stringify(user));
})
// main.addEventListener("click", function () {
//     let user = sessionStorage.getItem("obj1");
//     user = JSON.parse(user);
//     h1.textContent = user.name;
//     console.log(h1);
// })

main.addEventListener("click", function () {
        let user = sessionStorage.getItem("obj1");
        user = JSON.parse(user);
function diplayMenuItems(menuItems) {
    
      // console.log(item);
  
      return `<section class="grid-container">
      <div class="self">
        <h1>${user.name}</h1>
        <p>${user.email}</p>
      </div>
      <div class="objective">
        <h3>OBJECTIVE</h3>
      </div>
      <div class="objective-content">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis incidunt ut 
          odit nisi debitis dicta sed, maiores sunt necessitatibus inventore libero rerum aspernatur
           placeat, consectetur id voluptates nesciunt consequatur voluptatem!</p>
      </div>
      <div class="education">
        <h3>EDUCATION</h3>
      </div>
      <div class="education-content line">
        <p><strong>Qualification:</strong>   ${user.qualifications}</p>
        <p><strong>Aggregate:</strong>   ${user.aggregate}</p>
      </div>
      <div class="developer">
        <h3>SKILLS</h3>
      </div>
      <div class="developer-content">
        <p><strong>Technical Skills:</strong>   ${user.arr}</p>
      </div>
      <div class="master">
        <h3>PROJECTS & CERTIFICATE</h3>
      </div>
      <div class="master-content line">
       <p><strong>Projects:</strong>   ${user.project}.</p>
       <p><strong>Certificate:</strong>   ${user.certificate}</p>
      </div>
      <div class="information">
        <h3>PERSONAL INFO</h3>
      </div>
      <div class="information-content line">
        <p><strong>D.O.B:</strong>   ${user.birth}</p>
        <p><strong>Nationality:</strong>   ${user.nationality}</p>
        <p><strong>Hobbies:</strong>   ${user.hobbies}</p>
      </div>
    </section>`;
    };
    
    // console.log(displayMenu);
  
 eve.innerHTML = diplayMenuItems(user);
});