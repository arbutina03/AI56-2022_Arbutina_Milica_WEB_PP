document.addEventListener("DOMContentLoaded", function () {
    // Selektuje SVE slike na stranici
    const slike = document.querySelectorAll("img");

    slike.forEach(function (slika) {
        slika.addEventListener("click", function (event) {
            // Uzimamo src slike
            const src = slika.src.toLowerCase();

            // Ako je SVG – preskoči (dozvoli default ponašanje, npr. link za logo)
            if (src.endsWith(".svg")) {
                return;
            }

            // Ako NIJE svg, spreči default klik ako je linkovana slika
            event.preventDefault();

            // Otvori sliku u novoj kartici
            window.open(slika.src, "_blank");
        });
    });
});