const tri = document.querySelector("#can");
const ctx = tri.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("a", 40, 200);
ctx.fillText("b", 180, 350);
ctx.fillText("c", 300, 200);
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 300);
ctx.lineTo(300, 300);
ctx.closePath();
ctx.lineWidth = 10;
ctx.strokeStyle = "red";
ctx.stroke();
const selector = document.getElementById("lab2-selector");
const task1 = document.querySelector(".triangel-task");
const task2 = document.querySelector(".task2");
selector.addEventListener("change", function (e) {
  if (selector.value === "0") {
    task1.style.display = "block";
    task2.style.display = "none";
  } else if (selector.value === "1") {
    task1.style.display = "none";
    task2.style.display = "block";
    run_task2();
  }
});
const con2 = document.querySelector("#can2");
const ctx2 = con2.getContext("2d");
function run_task2() {
  var startX = 50;
  var startY = 50;
  var endX = 100;
  var endY = 100;
  var amount = 0;
  let y, z;
  let interval = setInterval(function () {
    amount += 0.05;
    ctx2.clearRect(0, 0, con2.width, con2.height);
    ctx2.strokeStyle = "black";
    ctx2.moveTo(startX, startY);
    ctx2.lineTo(
      (y = startX + (endX - startX) * amount),
      (z = startY + (endY - startY) * amount)
    );
    console.log(y == con2.width, z);
    if (Math.floor(y) >= con2.width && Math.floor(z) >= con2.height) {
      clearInterval(interval);
      this.alert("animation end");
    }
    ctx2.stroke();
  }, 20);
}
