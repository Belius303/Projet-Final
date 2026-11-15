import React, { useEffect } from "react";
// import {useNavigate} from "react-router-dom";
import './style55.css';
import {Link} from 'react-router-dom';

function HomeANG (){
    
        //  const navigate = useNavigate();

         useEffect(() => {
        const menu = document.querySelector('#menu-bar');
        const navbar = document.querySelector('.navbar');
        const header = document.querySelector('.header-2');

        const toggleMenu = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };

        const onScroll = () => {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
            header.classList.toggle('active', window.scrollY > 150);
        };

        menu.addEventListener('click', toggleMenu);
        window.addEventListener('scroll', onScroll);

        return () => {
            menu.removeEventListener('click', toggleMenu);
            window.removeEventListener('scroll', onScroll);
        };
    }, [])

        return(
        
        <div>

            <header>

    
<div className="header">

    <a href="#1" className="logo">La Maison Orientale</a>
    <Link to="/" className="btn"  >Français</Link>

    {/* <form action="" className="search-box-container">
        <input type="search" id="search-box" placeholder="Trouvez votre produit..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
    </form> */}

</div>

<div className="header-2">

    <div id="menu-bar" className="fas fa-bars"></div>

    <nav className="navbar">
        <Link to="/products">Catalogs</Link>
        <a href="#category">Categories</a>
        <a href="#contact">Contact us</a>
        <a href="#footer">About us</a>
    </nav>

    <div className="icons">
        <Link to="/" className="fas fa-home"></Link>
        
        <Link to="/cart" className="fas fa-shopping-cart"></Link>
    </div>

</div>

{/* <a href="#5"><img className="logom" src="/assets/IMAGE/LOGO TRANSP.png" alt="" /></a> */}



</header>
{/* <!--FIN ENTENTE--> */}

{/* <!--DEBUT HOME--> */}
<section className="home" id="home">

<div className="image">
    <img src="/assets/IMAGE/couverture logo.png" alt="COVER" />
</div>

{/* <div className="content">
    <span>Touts vos produits comme a la maison</span>
    <h3>Epicerie du Moyen-Orient</h3>
    <a href="#5" className="btnn">COMMANDEZ MAINTENANT</a>
</div> */}

</section>


{/* <!--FIN HOME-->

<!--DEBUT CATEGORIE--> */}

<section className="category" id="category">

<h1 className="heading"> SHOP BY <span>CATEGORIES</span></h1>

<div className="box-container">
    <div className="box">
        <h3>Fruits and vegetables</h3>
        <img src="/assets/IMAGE/fruit et legume.jpeg" alt="fruit et legumes" />
        <Link to="/products" className="btn"  >Order</Link>
        {/* onClick={() => {navigate("/store")}} */}
    </div>
    <div className="box">
        <h3>Dairy</h3>
        <img src="/assets/IMAGE/lait et oeuf.jpg" alt="lait" />
        <Link to="/products" className="btn" >Order</Link>    </div>
    <div className="box">
        <h3>Pantry</h3>
        <img src="/assets/IMAGE/pates.jpg" alt="pates" />
        <Link to="/products" className="btn" >Order</Link>    </div>
    <div className="box">
        <h3>Butcher's shop</h3>
        <img src="/assets/IMAGE/viande.jpeg" alt="fruit et legumes" />
        <Link to="/products" className="btn" >Order</Link>    </div>
</div>

</section>

{/* <!--FIN CATEGORIE-->

<!-- DEBUT CONTACT--> */}
<section className="contact" id="contact">
<h1 className="heading"> <span> Contact</span> Us</h1>
<form onSubmit={(e) => e.preventDefault()}>
    <div className="inputBox">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
    </div>

    <div className="inputBox">
        <input type="text" placeholder="Number" />
        <input type="text" placeholder="Subject" />
    </div>

    <textarea placeholder="Your message..." name="" id="" cols="30" rows="10"></textarea>

    <input type="submit" value="Send" className="btn" />
</form>
</section >
{/* <!-- FIN CONTACT-->

<!-- DEBUT ABOUT US--> */}

<section className="footer" id="footer">
<h1 className="heading"> <span> LA MAISON ORIENTALE :</span> WHO IS IT ? </h1>

<div className="box-container">

    <div className="box">
        {/* <a href="#11"><img className="logom2" src="/assets/IMAGE/LOGO TRANSP.png" alt="" /></a> */}
        <p>La Maison Orientale is a general grocery store where we import products from all over the Maghreb and the Middle East. We offer a wide variety of products, including meat, spices, cakes, dairy products and many more.</p>
        <p> Our opening hours are Monday to Sunday from 10 a.m. to 9 p.m.</p>
        <div className="share">
            <a href="https://www.facebook.com/La-maison-orientale-Gatineau-108019088452848" className="btn fab fa-facebook-f"></a>
            <a href="https://www.instagram.com/lamaisonorientale.gatineau/" className="btn fab fa-instagram"></a>
            <a href="https://www.google.com/search?client=firefox-b-d&q=la+maison+orientale+gatineau" className="btn fab fa-google"></a>
        </div>
        
    </div>


    {/* <div className="box">
    <h3> Nos heures d'ouvertures</h3>
    <div className="open">
        <h4>Lundi : 10h-21h</h4>
        <h4>Mardi : 10h-21h</h4>
        <h4>Mercredi : 10h-21h</h4>
        <h4>Jeudi : 10h-21h</h4>
        <h4>Vendredi : 10h-21h</h4>
        <h4>Samedi : 10h-21h</h4>
        <h4>Dimanche : 10h-21h</h4>
    </div>
    
</div> */}

<div className="box">
<iframe style={{width: "200%", height: "200%"}} src="https://maps.google.com/maps?q=697%20boulevard%20saint%20jospeh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
 
</div>

</div>
</section>



{/* <!-- FIN ABOUT US--> */}

        </div>
            
        );
    }

   

    



export default HomeANG;