import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Post from "@/components/Post.jsx/Post";

export default function Galeria(){
    return(
        <>
        <Header/>
        <h1>Fotos da Galeria</h1>
        <Card nome = "Kauã" />
        <Post titulo = "Titulo em props"/>
        <Footer/>
        </>
    )
}