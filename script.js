// Change the text content
document.getElementById("textButton").onclick = function () {
    document.getElementById("message").textContent = "You clicked the button!";
    document.getElementById("message").style.color = "green"; // Change text color
  };
  
  // Add or remove a box
  document.getElementById("boxButton").onclick = function () {
    const boxArea = document.getElementById("boxArea");
    const box = document.getElementById("myBox");
  
    if (box) {
      boxArea.removeChild(box); // Remove box if it exists
    } else {
      const newBox = document.createElement("div");
      newBox.id = "myBox";
      newBox.textContent = "I am a new box!";
      newBox.style.width = "200px";
      newBox.style.height = "100px";
      newBox.style.backgroundColor = "lightblue";
      newBox.style.marginTop = "10px";
      newBox.style.textAlign = "center";
      newBox.style.lineHeight = "100px";
      boxArea.appendChild(newBox); // Add new box
    }
  };
  