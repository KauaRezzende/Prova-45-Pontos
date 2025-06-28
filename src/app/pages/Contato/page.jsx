import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Post from "@/components/Post.jsx/Post";

export default function Contato(){
    return(
        <>
        <Header/>
        <h1>Entre em contato</h1>
        <Card nome = "Kauã" />
        <Post titulo = "Props"/>
        <Footer/>
        </>
    )
}