import React, { useEffect } from "react";
// import {useNavigate} from "react-router-dom";
import './style55.css';
import {Link} from 'react-router-dom';
import logo from '../assets/LOGO TRANSP.png';

function Home (){
    
        //  const navigate = useNavigate();

         useEffect(() =>{
        let menu = document.querySelector('#menu-bar');
        let navbar = document.querySelector('.navbar');
        let header = document.querySelector('.header-2');
    
    
        menu.addEventListener('click', () =>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
        
    });
    
        window.onscroll = () =>{
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        
    
        if(window.scrollY > 150){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    
    }
        }
        )

        return(
        
        <div>

            <header>

    
<div class="header">

    <a href="#1" class="logo">La Maison Orientale</a>
    <a href="/homeANG" class="btn"  >English</a>

    {/* <form action="" class="search-box-container">
        <input type="search" id="search-box" placeholder="Trouvez votre produit..." />
        <label for="search-box" class="fas fa-search"></label>
    </form> */}

</div>

<div class="header-2">

    <div id="menu-bar" class="fas fa-bars"></div>

    <nav class="navbar">
        <a href="/products">Catalogue</a>
        <a href="#category">Categories</a>
        <a href="#contact">Nous Contacter</a>
        <a href="#footer">A Propos de Nous</a>
    </nav>

    <div class="icons">
        <a href="/" class="fas fa-home"></a>
        
        <a href="/cart" class="fas fa-shopping-cart"></a>
    </div>

</div>

{/* <a href="#5"><img class="logom" src="assets/IMAGE/LOGO TRANSP.png" alt="" /></a> */}



</header>
{/* <!--FIN ENTENTE--> */}

{/* <!--DEBUT HOME--> */}
<section class="home" id="home">

<div class="image">
    <img src="assets/IMAGE/couverture logo.png" alt="COVER" />
</div>

{/* <div class="content">
    <span>Touts vos produits comme a la maison</span>
    <h3>Epicerie du Moyen-Orient</h3>
    <a href="#5" class="btnn">COMMANDEZ MAINTENANT</a>
</div> */}

</section>


{/* <!--FIN HOME-->

<!--DEBUT CATEGORIE--> */}

<section class="category" id="category">

<h1 class="heading"> MAGASINEZ PAR <span>CATEGORIES</span></h1>

<div class="box-container">
    <div class="box">
        <h3>Fruits / legumes</h3>
        <img src="assets/IMAGE/fruit et legume.jpeg" alt="fruit et legumes" />
        <a href="/products" class="btn"  >Commandez</a>
        {/* onClick={() => {navigate("/store")}} */}
    </div>
    <div class="box">
        <h3>Laiterie</h3>
        <img src="assets/IMAGE/lait et oeuf.jpg" alt="lait" />
        <a href="/products" class="btn" >Commandez</a>    </div>
    <div class="box">
        <h3>Garde-Manger</h3>
        <img src="assets/IMAGE/pates.jpg" alt="pates" />
        <a href="/products" class="btn" >Commandez</a>    </div>
    <div class="box">
        <h3>Boucherie</h3>
        <img src="assets/IMAGE/viande.jpeg" alt="fruit et legumes" />
        <a href="/products" class="btn" >Commandez</a>    </div>
</div>

</section>

{/* <!--FIN CATEGORIE-->

<!-- DEBUT CONTACT--> */}
<section class="contact" id="contact">
<h1 class="heading"> <span> Nous</span> Contacter</h1>
<form action="">
    <div class="inputBox">
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Adresse mail" />
    </div>

    <div class="inputBox">
        <input type="text" placeholder="Numero" />
        <input type="text" placeholder="Sujet" />
    </div>

    <textarea placeholder="Votre message..." name="" id="" cols="30" rows="10"></textarea>

    <input type="submit" value="Envoyer" class="btn" />
</form>
</section >
{/* <!-- FIN CONTACT-->

<!-- DEBUT ABOUT US--> */}

<section class="footer" id="footer">
<h1 class="heading"> <span> LA MAISON ORIENTALE :</span> C'EST QUI ? </h1>

<div class="box-container">

    <div class="box">
        {/* <a href="#11"><img class="logom2" src="assets/IMAGE/LOGO TRANSP.png" alt="" /></a> */}
        <p>La Maison Orientale est une épicerie générale où nous importons des produits de tout le Maghreb et du Moyen-Orient. Nous offrons une grande diversité de produits, en passant par la viande, les épices, les gâteaux, les produits laitiers et tant d'autres.</p>
        <p> Nos heures d'ouvertures sont du Lundi au Dimanche de 10h a 21h.</p>
        <div class="share">
            <a href="https://www.facebook.com/La-maison-orientale-Gatineau-108019088452848" class="btn fab fa-facebook-f"></a>
            <a href="https://www.instagram.com/lamaisonorientale.gatineau/" class="btn fab fa-instagram"></a>
            <a href="https://www.google.com/search?client=firefox-b-d&q=la+maison+orientale+gatineau" class="btn fab fa-google"></a>
        </div>
        
    </div>


    {/* <div class="box">
    <h3> Nos heures d'ouvertures</h3>
    <div class="open">
        <h4>Lundi : 10h-21h</h4>
        <h4>Mardi : 10h-21h</h4>
        <h4>Mercredi : 10h-21h</h4>
        <h4>Jeudi : 10h-21h</h4>
        <h4>Vendredi : 10h-21h</h4>
        <h4>Samedi : 10h-21h</h4>
        <h4>Dimanche : 10h-21h</h4>
    </div>
    
</div> */}

<div class="box">
<iframe style={{width: "200%", height: "200%"}} src="https://maps.google.com/maps?q=697%20boulevard%20saint%20jospeh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
 
</div>

</div>
</section>



{/* <!-- FIN ABOUT US--> */}
<script src="assets/script.js" ></script>

        </div>
            
        );
    }

   

    



export default Home;