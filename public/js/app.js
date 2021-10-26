console.log("Client side javascript!");

//select the weather form
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
//access the paragraph by ids. starts with #
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault(); //prevents browser from refreshing

  const location = search.value; //store the location from search field

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
