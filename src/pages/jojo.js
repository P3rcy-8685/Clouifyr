import Navbar from "../components/Navbar";
import CoverImage from "../components/coverImage";
import GameName from "../components/gameName";
import Button from "../components/Button";
import Carousel from "nuka-carousel/lib/carousel";
import { providers, ethers } from "ethers";
 import * as PushAPI from "@pushprotocol/restapi";
import axios from "axios";
   const pAPI =
     "8f82fd226faa4c31ecac94e99d79ad7b0fa93912c7d9fcbfd5cd16dbbf72bee6";
   const Pkey = `0x${pAPI}`;

   const unsubscribeNotifcation = async () => {
     console.log("push called");
     const signer = new ethers.Wallet(Pkey);
     try {
       const apiResponse = await PushAPI.payloads.sendNotification({
         signer,
         type: 3, // subset
         identityType: 2, // direct payload
         notification: {
           title: `[SDK-TEST] notification TITLE:`,
           body: `[sdk-test] notification BODY`,
         },
         payload: {
           title: `Playing`,
           body: `you are playing`,
           cta: "",
           img: "",
         },
         recipients: "eip155:5:0xD4819586cBB21B3A819100040163C56210021899", // recipients addresses
         channel: "eip155:5:0x1bFcc9ED329748D3e1D9844CeEFeb30b8434aA26", // your channel address
         env: "staging",
       });
       console.log("API repsonse: ", apiResponse);
     } catch (err) {
       console.error("Error: ", err);
     }
   };

const start= async()=>{
    console.log("start clicked")
    const response = await axios.get("http://20.197.4.167:3000/play", {
      params: {
        appName: "name",
      },
    });
    await unsubscribeNotifcation();
    console.log(response)
    console.log("hue hue")
}

export default function JoJo() {
    return (
        <>
            <Navbar />
            <CoverImage src={"/banner.jpg"} />
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "5rem", marginRight: "5rem", marginBottom: "3.5rem" }}>
                <div style={{ maxWidth: "65%", margin: '1rem' }}>
                    <GameName name={"JoJo"} tagline={"Jojo's Bizarre Adventure"} content={`JoJo's Bizarre Adventure is a long-running manga series created by Hirohiko Araki that has been adapted into various anime series and other media. The story follows the Joestar family, whose various members possess unique abilities that they use to battle supernatural foes and save the world from various threats.\n\nThe series is divided into multiple parts, each of which follows a different member of the Joestar family and their allies as they face off against different enemies. These enemies are typically other Stand users, people who possess supernatural abilities that are linked to a physical manifestation of their inner psyche called a Stand.`} />
                </div>
                <div style={{ marginTop: '1rem', marginLeft: '1rem' }}>
                    <Button onClick={start}>Play Game</Button>
                </div>
            </div>
            <div style={{marginBottom: "2rem"}}>
            <Carousel wrapAround={true} slidesToShow={3} cellSpacing={20} autoplay={true} defaultControlsConfig={{nextButtonStyle: {display: "none"}, prevButtonStyle: {display: "none"}}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src="/200.jpg" />
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src="/200.jpg" />
                </div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src="/200.jpg" />
                </div>
            </Carousel>
            </div>
        </>
    )
}
