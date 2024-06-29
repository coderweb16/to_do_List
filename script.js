const arrayIconos = [
    // Icono usuario
    'bx bx-user-check bx-md', 'bx bxs-user-detail bx-md',
    // Icono plus
    'bx bx-list-check bx-md', 'bx bx-list-plus bx-md',
    // Icono ajustes
    'bx bx-cog bx-md', 'bx bxs-cog bx-md'
]

const svg__usu = document.getElementById("svg__usu");
const svg__tNu = document.getElementById("svg__tNu");
const svg__aju = document.getElementById("svg__aju");
const cuerpos = document.querySelectorAll(".cuerpo");
const botones = document.querySelectorAll(".btnMenu");

botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        // Remove expanded class from all cuerpos
        cuerpos.forEach(cuerpo => cuerpo.classList.remove("cExpandido"));
        // Add expanded class to the corresponding cuerpo
        cuerpos[index].classList.add("cExpandido");
        // Reset icon classes
        svg__usu.className = arrayIconos[0];
        svg__tNu.className = arrayIconos[2];
        svg__aju.className = arrayIconos[4];
        // Change the class of the clicked button's icon
        switch (index) {
            case 0:
                svg__usu.className = arrayIconos[1];
                break;
            case 1:
                svg__tNu.className = arrayIconos[3];
                break;
            case 2:
                svg__aju.className = arrayIconos[5];
                break;
        };
    });
});