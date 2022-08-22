
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        const styles = e.currentTarget.classList;

        if (styles.contains("Incrementar")) {
            count++;
        }
        if (styles.contains("Disminuir")) {
        count--;
        }
        if (styles.contains("Reiniciar")) {
        count = 0;
        }
        
        
        if (count > 0) {
        value.style.color = "green";
        }
        if (count < 0) {
        value.style.color = "red";}
        if (count === 0){
         value.style.color = "Yellow";
        }
      
        value.textContent = count;
    });
});