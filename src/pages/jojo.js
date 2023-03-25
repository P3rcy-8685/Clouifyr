import Navbar from "../components/Navbar";
import CoverImage from "../components/coverImage";
import GameName from "../components/gameName";
import Button from "../components/Button";

export default function JoJo() {
    return (
        <>
            <Navbar />
            <CoverImage src={"/next.svg"} />
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "5rem", marginRight: "5rem"}}>
                <div style={{maxWidth: "65%", margin: '1rem'}}>
                <GameName name={"JoJo"} tagline={"Jojo's Bizarre Adventure"} content={`JoJo's Bizarre Adventure is a long-running manga series created by Hirohiko Araki that has been adapted into various anime series and other media. The story follows the Joestar family, whose various members possess unique abilities that they use to battle supernatural foes and save the world from various threats.\n\nThe series is divided into multiple parts, each of which follows a different member of the Joestar family and their allies as they face off against different enemies. These enemies are typically other Stand users, people who possess supernatural abilities that are linked to a physical manifestation of their inner psyche called a Stand.`}/>
                </div>
                <div style={{marginTop: '1rem', marginLeft: '1rem'}}>
                    <Button>Boom</Button>
                </div>
                </div>
        </>
    )
}
