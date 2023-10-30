import { Faq } from './Faq'
import './faqPage.css'
export function FaqPage(){
    return(
        <div className='faq-container'>
            <div className='text-container'>
                <h1 className='main-title'>Gyakori Kérdések</h1>
                <div className='faq-text'>
                    <Faq question={"Hol találom a megvásárolható termékeket?"} answer={"A navigációs sávon (az oldal tetején található) kattintson a Kínálat gombra."}/>
                    <h2 className='cim'>Hogyan tudom megkezdeni a vásárlást?</h2>
                    <p className='text'>Jelentkezzen be a navigációs sávon található Bejelentkezés gombbal.</p>
                    <h2 className='cim'>Hogyan tudok bejelentkezni?</h2>
                    <p className='text'>A navigációs sávon (az oldal tetején található) kattintson a Bejelentkezés gombra</p>
                    <h2 className='cim'>Problémám akadt a rendeléssel kapcsolatban.</h2>
                    <p className='text'>Kattintson az Ügyintézés gombra.</p>
                    <h2 className='cim'>Hol tudom követni a rendelésemet?</h2>
                    <p className='text'>Kattintson a Rendeléskövetés gombra a navigációs sávon.</p>
                    <h2 className='cim'>Hogyan tudok saját terméket eladni?</h2>
                    <p className='text'>Kattintson az Árusítás gombra a navigációs sávon</p>
                </div>
            </div>
        </div>
        
    )
}