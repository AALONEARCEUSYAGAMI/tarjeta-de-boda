// Fecha de destino para la cuenta regresiva
const targetDate = new Date("Sep 14, 2084 13:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcula el tiempo restante en días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en el elemento con id "countdown"
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "¡La boda ha comenzado!";
    }
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    const title1 = document.getElementById("animated-title");
    if (!title1) {
        console.error("Element with id 'animated-title' not found");
        return;
    }

    const text1 = title1.innerText;
    title1.innerText = ""; // Vacía el texto al inicio

    for (let i = 0; i < text1.length; i++) {
        const span = document.createElement('span');
        span.innerText = text1[i] === " " ? "\u00A0" : text1[i]; // Maneja espacios correctamente
        title1.appendChild(span);
    }

    let i = 0;
    const spans1 = title1.querySelectorAll('span');

    function typeWriter1(callback) {
        if (i < spans1.length) {
            spans1[i].style.visibility = 'visible';
            i++;
            setTimeout(function() {
                typeWriter1(callback);
            }, 70); // Ajusta la velocidad de la animación (en milisegundos)
        } else if (callback) {
            callback(); // Ejecuta la siguiente animación cuando termine la primera
        }
    }

    typeWriter1(function() {
        const title2 = document.getElementById("animated-title2");
        if (!title2) {
            console.error("Element with id 'animated-title2' not found");
            return;
        }

        title2.style.visibility = 'visible'; // Haz visible el título al iniciar la animación
        const text2 = title2.innerText;
        title2.innerText = ""; // Vacía el texto al inicio

        for (let j = 0; j < text2.length; j++) {
            const span = document.createElement('span');
            span.innerText = text2[j] === " " ? "\u00A0" : text2[j]; // Maneja espacios correctamente
            title2.appendChild(span);
        }

        let j = 0;
        const spans2 = title2.querySelectorAll('span');

        function typeWriter2(callback) {
            if (j < spans2.length) {
                spans2[j].style.visibility = 'visible';
                j++;
                setTimeout(function() {
                    typeWriter2(callback);
                }, 70); // Ajusta la velocidad de la animación (en milisegundos)
            } else if (callback) {
                callback(); // Ejecuta la siguiente animación cuando termine la segunda
            }
        }

        typeWriter2(function() {
            const title3 = document.getElementById("animated-title3");
            if (!title3) {
                console.error("Element with id 'animated-title4' not found");
                return;
            }

            title3.style.visibility = 'visible'; // Haz visible el título al iniciar la animación
            const text3 = title3.innerText;
            title3.innerText = ""; // Vacía el texto al inicio

            for (let k = 0; k < text3.length; k++) {
                const span = document.createElement('span');
                span.innerText = text3[k] === " " ? "\u00A0" : text3[k]; // Maneja espacios correctamente
                title3.appendChild(span);
            }

            let k = 0;
            const spans3 = title3.querySelectorAll('span');

            function typeWriter3() {
                if (k < spans3.length) {
                    spans3[k].style.visibility = 'visible';
                    k++;
                    setTimeout(typeWriter3, 70); // Ajusta la velocidad de la animación (en milisegundos)
                }
            }

            typeWriter3();
        });
    });
});

window.addEventListener('load', function() {
    document.getElementById('animatedbox').style.opacity = '1';
});

window.addEventListener('load', function() {
  
        document.querySelector('.whatsapp-button').style.opacity = '1';

});
