export function ContactForm(){
    const $form = document.createElement("form");
    const $styles = document.getElementById("dynamic-styles");

    $form.classList.add("contact-form");

    $styles.innerHTML = `
    .contact-form {
        --form-ok-color: #4caf50;
        --form-error-color: #f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
    
    .contact-form > * {
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
    }
    
    .contact-form textarea {
        resize: none;
    }
    
    .contact-form legend,
    .contact-form-response {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }
    
    .contact-form input,
    .contact-form textarea {
        font-size: 1rem;
        font-family: sans-serif;
    }
    
    .contact-form input[type="submit"]{
        width: 50%;
        font-weight: bold;
        cursor: pointer;
    }
    
    .contact-form *::placeholder {
        color: #000;
    }
    
    .contact-form [required]:valid {
        border: thin solid var(--form-ok-color);
    }
    
    .contact-form [required]:invalid {
        border: thin solid var(--form-error-color);
    }
    
    .contact-form-error {
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #fff;
        transition: all 800ms ease;
    }
    
    .contact-form-error.is-active {
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
    }
    
    .contact-form-loader {
        text-align: center;
    }
    
    .none {
        display: none;
    }
    
    @keyframes show-message {
        0% {
            visibility: hidden;
            opacity: 0;
        }
    
        100% {
            visibility: visible;
            opacity: 1;
        }
    }

    `;

    $form.innerHTML = `
        <legend>Envianos tus Comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu Nombre" title="Nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
        <input type="email" name="email" placeholder="Escribe tu Correo" title="Email Incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
        <input type="text" name="subject" placeholder="Asunto a Tratar" title="El asunto es requerido" required>
        <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus Comentarios" data-pattern="^.{1,255}$" title="Tu comentario no debe exceder los 255 caracteres" required></textarea>
        <input type="submit" value="Enviar">
        <div class="contact-form-loader none">
            <img src="app/assets/loader.svg" alt="Cargando">
        </div>
        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
    `;

    function validationsForm(){
        const $form = document.querySelector(".contact-form");
        const $inputs = document.querySelectorAll(".contact-form [required]");
        //console.log($inputs);
        $inputs.forEach(input => {
            const $span = document.createElement("span");
            $span.id = input.name;
            $span.textContent = input.title;
            $span.classList.add("contact-form-error", "none")
            input.insertAdjacentElement("afterend", $span);
        })
    
        document.addEventListener("keyup", (e) => {
            if(e.target.matches(".contact-form [required]")){
                let pattern = e.target.pattern || e.target.dataset.pattern;
                //console.log(e.target, pattern);
                // validaciones
                if(pattern && e.target.value !== ""){
                    //console.log("El input tiene patron")
                    let regex = new RegExp(pattern);
                    return !regex.exec(e.target.value)?
                    document.getElementById(e.target.name).classList.add("is-active") :
                    document.getElementById(e.target.name).classList.remove("is-active")
                }
    
                if(!pattern){
                    //console.log("El input NO tiene patron")
                    return e.target.value === ""?
                    document.getElementById(e.target.name).classList.add("is-active") :
                    document.getElementById(e.target.name).classList.remove("is-active")
                }
            }
        })
    
        document.addEventListener("submit", e => {
            e.preventDefault();
            const $loader = document.querySelector(".contact-form-loader");
            const $response = document.querySelector(".contact-form-response");
            $loader.classList.remove("none");
    
            fetch("send-main.php", {
                method: "POST",
                body: new FormData(e.target),
                mode: "cors"
            })
                .then(res => res.ok? res.json() : Promise.reject(res))
                .then(json => {
                    console.log(json);
                    $loader.classList.add("none");
                    $response.classList.remove("none");
                    $response.innerHTML = `<p>${json.message}</p>`;
                    $form.reset();
                })
                .catch(err => {
                    console.log(err);
                    let message = err.statusText || "Ocurrio un Error al Enviar, intenta nuevamente";
                    $response.innerHTML = `<p>Error ${err.status} : ${message}</p>`;
                })
                .finally(() => setTimeout(() => {
                    $response.classList.add("none");
                    $response.innerHTML = "";
                }, 3000))
        });
    };

    setTimeout(() => validationsForm(), 100)

    return $form;
};