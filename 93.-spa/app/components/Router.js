import { ajax } from '../helpers/ajax.js';
import api from '../helpers/wp_api.js';
import { PostCard } from './PostCard.js';
import { Post } from './Post.js';
import { SearchCard } from './SearchCard.js';
import { ContactForm } from './ContactForm.js';

export async function Router(){
    let { hash } = location;
    let $main = document.getElementById("main");
    //console.log(hash);

    $main.innerHTML = null;


    if(!hash || hash === "#/"){
        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                //console.log(posts);
                let html = "";
                posts.forEach((post) => (html += PostCard(post)));
                $main.innerHTML = html;
            }
        })
        //console.log(api.POST);
    } else if (hash.includes("#/search")){
        let query = localStorage.getItem("wpSearch");

        if(!query){
            document.querySelector(".loader").style.display = "none";
            return false;
        }

        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) => {
                console.log(search);
                let html = "";

                if(search.length === 0){
                    html = `
                        <p class="error">
                            No existen resultados de búsqueda para el termino
                            <mark>${query}</mark>
                        </p>
                    `;
                } else {
                    search.forEach(post => html += SearchCard(post));
                }

                $main.innerHTML = html;
            }
        });



    } else if (hash === "#/contacto"){
        $main.appendChild(ContactForm());
    } else {
        await ajax({
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {
                //console.log(posts);
                $main.innerHTML = Post(post);
            }
        })
    };

    document.querySelector(".loader").style.display = "none";

};