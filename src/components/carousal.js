import 'react-multi-carousel/lib/styles.css';
import Panel from "./carComp";
import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import games from "./games.js";
import axios from 'axios';

const Carousal = () => {
    useEffect(() => {
        const onPageLoad = async () => {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                  });
                  console.log("Using account: ", accounts[0]);
                  const provider = new providers.Web3Provider(window.ethereum);
                  const signer = provider.getSigner(accounts[0]);
                  const addToChain = new ethers.Contract(
                    "0x44D7bc6f4CAE9dA760789B6Bc4A99F36513183cc",
                    ABI,
                    provider
                  );
                const response = await axios.get('http://localhost:3000/api/games');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        if (document.readyState === 'complete') {
            onPageLoad();
          } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
          }
        }, [])    
    return (
        <div>
            <Carousel wrapAround={true} slidesToShow={3} autoplay={true}  cellSpacing={20}>
                {games.map((game,index) => (
                    <div className='panel-div' key={index}>
                    <a href="/jojo">
                        <Panel image={game.image} name={game.name} description={game.discription}/>
                    </a>

                    </div>
                ))}
            </Carousel>
        </div>

    )
}
export default Carousal;