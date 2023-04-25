// flag
let pointer = "";
const flag = document.querySelector(".flag");
const box = document.querySelectorAll(".box");
const smile = document.querySelector(".smile");
const text = document.querySelector(".num");
let count = 10;
let num = [];
let score = 0;
// let all = [];
let check = 0;
let add = 0;
const topMid = [1, 2, 3, 4, 5, 6, 7];
const botMid = [73, 74, 75, 76, 77, 78, 79];
const rightMid = [17, 26, 35, 44, 53, 62, 71];
const leftMid = [9, 18, 27, 36, 45, 54, 63];
const mid = [
  10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 25, 28, 29, 30, 31, 32,
  33, 34, 37, 38, 39, 40, 41, 42, 43, 46, 47, 48, 49, 50, 51, 52, 55, 56, 57,
  58, 59, 60, 61, 64, 65, 66, 67, 68, 69, 70,
];

// for (let i = 0; i < box.length; i++) {
//   all.push(i);
// }

for (let i = 0; i < box.length; i++) {
  if (num.length !== 10) {
    const randomNum = Math.floor(Math.random() * 81);
    if (!num.includes(randomNum)) {
      num.push(randomNum);
      // box[randomNum].textContent = randomNum;
      // box[randomNum].textContent = "💣";
      // box[randomNum].classList.add("hide");
    }
  }
}

console.log(num);

flag.addEventListener("click", () => {
  if (pointer === "") {
    pointer = "🚩";
    flag.style.backgroundColor = "rgb(160, 160, 160)";
  } else {
    pointer = "";
    flag.style.backgroundColor = "rgb(215, 216, 218)";
  }
});

function selectBox() {
  // Remove 'selected' class from all boxes
  box.forEach((box) => box.classList.remove("selected"));

  // Add 'selected' class to the clicked box
  this.classList.add("selected");

  // Show only the text content of the clicked box
  if (pointer === "🚩" && this.textContent === "") {
    this.textContent = "🚩";
    count--;
    text.textContent = count;
    for (let i = 0; i < box.length; i++) {
      if (box[i] === this) {
        if (num.includes(i)) {
          score++;
        }
      }
    }
    if (score === 10 && text.textContent === "0") {
      smile.textContent = "😎";
      document.querySelector(".vic").style.visibility = "visible";
    }
  } else if (pointer === "🚩" && this.textContent === "🚩") {
    this.textContent = "";
    count++;
    text.textContent = count;
    for (let i = 0; i < box.length; i++) {
      if (box[i] === this) {
        if (num.includes(i)) {
          score--;
        }
      }
    }
  }

 
  // number set
  for (let i = 0; i < box.length; i++) {
    if (box[i].classList.contains("selected")) {
      // corner top left
      if (i === 0 && !num.includes(i) && pointer !== "🚩") {
        
        if (num.includes(i + 1)) {
          check++;
        }
        if (num.includes(i + 9)) {
          check++;
        }
        if (num.includes(i + 10)) {
          check++;
        }
        
        if (check === 0 && box[i].textContent !== "🚩") {
          
          box[i].classList.add("hide");
          if (box[i + 1].textContent !== "🚩") {
            box[i + 1].classList.add("hide");
          }
          if (box[i + 9].textContent !== "🚩") {
            box[i + 9].classList.add("hide");
          }
          if (box[i + 10].textContent !== "🚩") {
            box[i + 10].classList.add("hide");
          }
        } else if (box[i].textContent !== "🚩") {
          box[i].textContent = check;
          check = 0;
        }
      }

      // corner top right
      if (i === 8 && !num.includes(i) && pointer !== "🚩") {
        if (num.includes(i - 1)) {
          check++;
        }
        if (num.includes(i + 9)) {
          check++;
        }
        if (num.includes(i + 8)) {
          check++;
        }
        if (check === 0 && box[i].textContent !== "🚩") {
          box[i].classList.add("hide");
          if (box[i - 1].textContent !== "🚩") {
            box[i - 1].classList.add("hide");
          }
          if (box[i + 8].textContent !== "🚩") {
            box[i + 8].classList.add("hide");
          }
          if (box[i + 9].textContent !== "🚩") {
            box[i + 9].classList.add("hide");
          }
        } else if (box[i].textContent !== "🚩") {
          box[i].textContent = check;
          check = 0;
        }
      }

      // corner bottom left
      if (i === 72 && !num.includes(i) && pointer !== "🚩") {
        if (num.includes(i + 1)) {
          check++;
        }
        if (num.includes(i - 9)) {
          check++;
        }
        if (num.includes(i - 8)) {
          check++;
        }
        if (check === 0 && box[i].textContent !== "🚩") {
          box[i].classList.add("hide");
          if (box[i + 1].textContent !== "🚩") {
            box[i + 1].classList.add("hide");
          }
          if (box[i - 9].textContent !== "🚩") {
            box[i - 9].classList.add("hide");
          }
          if (box[i - 8].textContent !== "🚩") {
            box[i - 8].classList.add("hide");
          }

        } else if (box[i].textContent !== "🚩") {
          box[i].textContent = check;
          check = 0;
        }
      }

      // corner bottom right
      if (i === 80 && !num.includes(i) && pointer !== "🚩") {
        if (num.includes(i - 1)) {
          check++;
        }
        if (num.includes(i - 9)) {
          check++;
        }
        if (num.includes(i - 10)) {
          check++;
        }
        if (check === 0 && box[i].textContent !== "🚩") {
          box[i].classList.add("hide");
          if (box[i - 1].textContent !== "🚩") {
            box[i - 1].classList.add("hide");
          }
          if (box[i - 10].textContent !== "🚩") {
            box[i - 10].classList.add("hide");
          }
          if (box[i - 9].textContent !== "🚩") {
            box[i - 9].classList.add("hide");
          }

        } else if (box[i].textContent !== "🚩") {
          box[i].textContent = check;
          check = 0;
        }
      }

      // top mid
      if (topMid.includes(i) && !num.includes(i) && pointer !== "🚩") {
        if (num.includes(i - 1)) {
          check++;
        }
        if (num.includes(i + 1)) {
          check++;
        }
        if (num.includes(i + 9)) {
          check++;
        }
        if (num.includes(i + 10)) {
          check++;
        }
        if (num.includes(i + 8)) {
          check++;
        }
        if (check === 0 && box[i].textContent !== "🚩") {
          box[i].classList.add("hide");
          if (box[i + 1].textContent !== "🚩") {
            box[i + 1].classList.add("hide");
          }
          if (box[i - 1].textContent !== "🚩") {
            box[i - 1].classList.add("hide");
          }
          if (box[i + 10].textContent !== "🚩") {
            box[i + 10].classList.add("hide");
          }
          if (box[i + 9].textContent !== "🚩") {
            box[i + 9].classList.add("hide");
          }
          if (box[i + 8].textContent !== "🚩") {
            box[i + 8].classList.add("hide");
          }

        } else if (box[i].textContent !== "🚩") {
          box[i].textContent = check;
          check = 0;
        }
      }

      // bottom mid
      if (botMid.includes(i) && !num.includes(i) && pointer !== "🚩") {
        if (num.includes(i - 1)) {
          check++;
        }
        if (num.includes(i + 1)) {
          check++;
        }
        if (num.includes(i - 9)) {
          check++;
        }
        if (num.includes(i - 10)) {
          check++;
        }
        if (num.includes(i - 8)) {
          check++;
        }
        if (check === 0 && box[i].textContent !== "🚩") {
          box[i].classList.add("hide");
          if (box[i + 1].textContent !== "🚩") {
            box[i + 1].classList.add("hide");
          }
          if (box[i - 1].textContent !== "🚩") {
            box[i - 1].classList.add("hide");
          }
          if (box[i - 10].textContent !== "🚩") {
            box[i - 10].classList.add("hide");
          }
          if (box[i - 9].textContent !== "🚩") {
            box[i - 9].classList.add("hide");
          }
          if (box[i - 8].textContent !== "🚩") {
            box[i - 8].classList.add("hide");
          }

        } else if (box[i].textContent !== "🚩") {
          box[i].textContent = check;
          check = 0;
        }
      }

      // left mid
      if (leftMid.includes(i) && !num.includes(i) && pointer !== "🚩") {
        if (num.includes(i - 8)) {
          check++;
        }
        if (num.includes(i + 1)) {
          check++;
        }
        if (num.includes(i - 9)) {
          check++;
        }
        if (num.includes(i + 10)) {
          check++;
        }
        if (num.includes(i + 9)) {
          check++;
        }
        if (check === 0 && box[i].textContent !== "🚩") {
          box[i].classList.add("hide");
          if (box[i + 1].textContent !== "🚩") {
            box[i + 1].classList.add("hide");
          }
          if (box[i + 10].textContent !== "🚩") {
            box[i + 10].classList.add("hide");
          }
          if (box[i + 9].textContent !== "🚩") {
            box[i + 9].classList.add("hide");
          }
          if (box[i - 8].textContent !== "🚩") {
            box[i - 8].classList.add("hide");
          }
          if (box[i - 9].textContent !== "🚩") {
            box[i - 9].classList.add("hide");
          }

        } else if (box[i].textContent !== "🚩") {
          box[i].textContent = check;
          check = 0;
        }
      }

      // right mid
      if (rightMid.includes(i) && !num.includes(i) && pointer !== "🚩") {
        if (num.includes(i - 1)) {
          check++;
        }
        if (num.includes(i - 9)) {
          check++;
        }
        if (num.includes(i + 9)) {
          check++;
        }
        if (num.includes(i - 10)) {
          check++;
        }
        if (num.includes(i + 8)) {
          check++;
        }
        if (check === 0 && box[i].textContent !== "🚩") {
          box[i].classList.add("hide");
          if (box[i - 1].textContent !== "🚩") {
            box[i - 1].classList.add("hide");
          }
          if (box[i - 10].textContent !== "🚩") {
            box[i - 10].classList.add("hide");
          }
          if (box[i - 9].textContent !== "🚩") {
            box[i - 9].classList.add("hide");
          }
          if (box[i + 9].textContent !== "🚩") {
            box[i + 9].classList.add("hide");
          }
          if (box[i + 8].textContent !== "🚩") {
            box[i + 8].classList.add("hide");
          }

        } else if (box[i].textContent !== "🚩") {
          box[i].textContent = check;
          check = 0;
        }
      }

      // mid
      if (mid.includes(i) && !num.includes(i) && pointer !== "🚩") {
        if (num.includes(i - 1)) {
          check++;
        }
        if (num.includes(i + 1)) {
          check++;
        }
        if (num.includes(i + 9)) {
          check++;
        }
        if (num.includes(i - 10)) {
          check++;
        }
        if (num.includes(i + 8)) {
          check++;
        }
        if (num.includes(i + 10)) {
          check++;
        }
        if (num.includes(i - 9)) {
          check++;
        }
        if (num.includes(i - 8)) {
          check++;
        }
        if (check === 0 && box[i].textContent !== "🚩") {
          box[i].classList.add("hide");
          if (box[i - 1].textContent !== "🚩") {
            box[i - 1].classList.add("hide");
          }
          if (box[i - 10].textContent !== "🚩") {
            box[i - 10].classList.add("hide");
          }
          if (box[i + 9].textContent !== "🚩") {
            box[i + 9].classList.add("hide");
          }
          if (box[i + 8].textContent !== "🚩") {
            box[i + 8].classList.add("hide");
          }
          if (box[i - 9].textContent !== "🚩") {
            box[i - 9].classList.add("hide");
          }
          if (box[i + 1].textContent !== "🚩") {
            box[i + 1].classList.add("hide");
          }
          if (box[i + 10].textContent !== "🚩") {
            box[i + 10].classList.add("hide");
          }
          if (box[i - 8].textContent !== "🚩") {
            box[i - 8].classList.add("hide");
          }
          
        } else if (box[i].textContent !== "🚩") {
          box[i].textContent = check;
          check = 0;
        }
      }
    }
  }

  // bomb check
  if (pointer === "" && this.textContent !== "🚩") {
    for (let i = 0; i < box.length; i++) {
      if (box[i].classList.contains("selected")) {
        if (num.includes(i)) {
          for (let j = 0; j < box.length; j++) {
            if (num.includes(j)) {
              box[j].textContent = "💣";
            }
          }
          box[i].textContent = "💥";
          smile.textContent = "🤕";
          document.querySelector(".vic-h1").textContent = "Defeat!";
          document.querySelector(".vic").style.visibility = "visible";
        }
      }
    }
  }
}

// Add event listener to each box
box.forEach((box) => box.addEventListener("click", selectBox));
