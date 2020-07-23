//*****************************1.1********************************

const textOne = document.getElementById("form1");
textOne.addEventListener("submit", part1);

function part1(e) {
  e.preventDefault();

  const inputOne = document.getElementById("text-one").value;
  let arr = ["-"];
  for (let i = 0; i < inputOne.length; i++) {
    if (
      inputOne.indexOf(inputOne.charAt(i)) ===
      inputOne.lastIndexOf(inputOne.charAt(i))
    ) {
      arr.push(inputOne.charAt(i));
    }
  }
  alert(arr[arr.length - 1]);
}

//*****************************1.2********************************

const textTwo = document.getElementById("form2");
textTwo.addEventListener("submit", part2);

function part2(e) {
  e.preventDefault();
  const inputTwo = document.getElementById("text-two").value;
  let newValue = inputTwo.split("").reverse().join("");
  let lastValue = newValue.split(" ").reverse().join(" ");

  alert(lastValue);
}

//*****************************1.3********************************

const textThree = document.getElementById("form3");
textThree.addEventListener("submit", part3);

function part3(e) {
  e.preventDefault();
  const inputThree = document.getElementById("text-three").value;
  let k = 0;
  check = true;
  for (let i = 0; i < inputThree.length; i++) {
    if (k < 0) {
      check = false;
    } else if (inputThree.charAt(i) === "(") {
      k++;
    } else if (inputThree.charAt(i) === ")") {
      k--;
    }
  }
  if (k != 0) {
    check = false;
  }

  alert(check);
}
