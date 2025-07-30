
// const button = document.getElementById("btn");
// const userInput = document.getElementById("userInput");
// const body = document.querySelector("body");
// const wisdom =[]
// let i = 0;
// button.addEventListener('click', () =>
// {
//     i++;
//     const userInputValue = userInput.value;
//     wisdom.push({text: userInputValue});
//     if((i % 2) === 0)
//     {
//         localStorage.setItem("wisdom", JSON.stringify(wisdom));
//     }
//     const userText = document.createElement('div');
//     userText.textContent = userInputValue;
//     userInput.value = ''
//     body.append(userText);
// })
// const clearButton = document.getElementById("clear");
// clearButton.addEventListener('click', () =>
// {
//     localStorage.removeItem('wisom')
// })
const input = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const wisdomList = document.getElementById("wisdomList");

let wisdom = [];

// Load from localStorage on page load
const storedWisdom = localStorage.getItem("wisdom");
if (storedWisdom) {
  wisdom = JSON.parse(storedWisdom);
  renderWisdom();
}

addBtn.addEventListener("click", () => {
  const inputText = input.value.trim();
  if (inputText === "") return;

  const newWisdom = { text: inputText, id: Date.now() };
  wisdom.push(newWisdom);
  renderWisdom();

  if (wisdom.length % 2 === 0) {
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
  }

  input.value = "";
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("wisdom");
  wisdom = [];
  renderWisdom();
});

function renderWisdom() {
  wisdomList.innerHTML = "";
  for (let item of wisdom) {
    const li = document.createElement("li");
    li.textContent = item.text;
    li.dataset.id = item.id;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
      wisdom = wisdom.filter(w => w.id !== item.id);
      localStorage.setItem("wisdom", JSON.stringify(wisdom));
      renderWisdom();
    });

    li.appendChild(deleteBtn);
    wisdomList.appendChild(li);
  }
}
