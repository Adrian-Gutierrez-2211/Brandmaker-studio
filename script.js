  window.onload = function () {
    const age = prompt("Please enter your age:");

    if (age <= 15) {
      alert("Sorry, you must be older than 15 to access this page.");
      window.location.href = "myfirstproject.html";
    } else {
      alert("Welcome!");
 }
 };

 let limit = prompt("Enter the limit for the table of 3:");
 limit = parseInt(limit);
 for (let i = 0; i <= limit; i++) {
   console.log(`3 x ${i} = ${3 * i}`);
 }
 let j = 0;
 while (j <= limit) {
  console.log(`3 x ${j} = ${3 * j}`);
   j++;
}

function verifyEmail() {
  const email = document.getElementById("email").value;
  if (email.includes("@") && email.includes(".")) {
    alert("Verification email has been sent to " + email);
  } else {
    alert("Please enter a valid email.");
  }
}

let random = Math.floor(Math.random() * 101);
function guessNumber(number, random) {
  number = parseInt(number);
  if (number >= 0 && number <= 100) {
    if (number === random) {
      document.getElementById("answer").innerHTML = "Congrats! This is the number!";
    } else {
      document.getElementById("answer").innerHTML = "Oh no! It's not the number. Try again.";
    }
  } else {
    document.getElementById("answer").innerHTML = "Please, type a valid number.";
  }
}
