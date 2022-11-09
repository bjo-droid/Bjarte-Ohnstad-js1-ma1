// Question 1

const cat = {
  complaint: function () {
    console.log("Meow!");
  },
};

// Question 2

const theHeading = document.querySelector("h3");
theHeading.innerHTML = "Updated heading";

// Question 3

theHeading.style.fontSize = "2em";

// Question 4

theHeading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function catName(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catName(cats);

// Question 8

function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age unknow";
    if (cats[i].age) {
      catAge = cats[i].age;
    }
    html += `<div class="cats">
                    <h5>${cats[i].name}</h5>
                    <p>Age: ${catAge}</p>
                </div>`;
  }
  return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
