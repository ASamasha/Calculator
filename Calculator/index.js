
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentInput = "0";

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.classList.contains("clear")) {
          currentInput = "0";
        } else if (button.classList.contains("del")) {
          currentInput = currentInput.slice(0, -1) || "0";
        } else if (button.classList.contains("equal")) {
          try {
            currentInput = eval(currentInput.replace("×", "*").replace("÷", "/"));
          } catch {
            currentInput = "Error";
          }
        } else {
          if (currentInput === "0" && !isNaN(value)) {
            currentInput = value; // Replace leading 0
          } else {
            currentInput += value;
          }
        }
        display.textContent = currentInput;
      });
    });
  