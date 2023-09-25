
let toggle = document.getElementById("toggle");
let label = document.getElementById("label");

let isDarkMode = localStorage.getItem("darkMode") === "true";


if (isDarkMode) 
{
    document.body.classList.add("dark_modee");
    label.innerHTML = `<i class='bx bxs-sun'></i>`;
    toggle.checked = true;
}

toggle.addEventListener("change", (event) => 
{
    let estadoModoOscuro = event.target.checked;

    localStorage.setItem("darkMode", estadoModoOscuro);

    document.body.classList.toggle("dark_modee", estadoModoOscuro);

    if (estadoModoOscuro) 
    {
        label.innerHTML = `<i class='bx bxs-sun'></i>`;
    } 
    else 
    {
        label.innerHTML = `<i class='bx bx-moon'></i>`;
    }
});


