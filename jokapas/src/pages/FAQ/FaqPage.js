import { Faq } from './Faq'
import './faqPage.css'
export function FaqPage(){
    return(
        <div className='faq-container'>
            <div className='text-container'>
                <h1 className='main-title'>Gyakori Kérdések</h1>
                <div className='faq-text'>
                    <Faq question={"Hol találom a megvásárolható termékeket?"} answer={"A navigációs sávon (az oldal tetején található) kattintson a Kínálat gombra."}/>
                    <Faq question={"Hogyan tudom megkezdeni a vásárlást?"} answer={"Jelentkezzen be a navigációs sávon található Bejelentkezés gombbal."}/>
                    <Faq question={"Hogyan tudok bejelentkezni?"} answer={"A navigációs sávon (az oldal tetején található) kattintson a Bejelentkezés gombra."}/>
                    <Faq question={"Problémám akadt a rendeléssel kapcsolatban."} answer={"Kattintson az Ügyintézés gombra."}/>
                    <Faq question={"Hol tudom követni a rendelésemet?"} answer={"Kattintson a Rendeléskövetés gombra a profilján belül."}/>
                    <Faq question={"Hogyan tudok saját terméket eladni?"} answer={"Kattintson az Árusítás gombra a navigációs sávon."}/>
                </div>
            </div>
        </div>
        
    )
}