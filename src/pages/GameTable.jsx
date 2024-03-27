import avatar1 from "../assets/avatars/1.jpg"
import avatar2 from "../assets/avatars/2.jpg"
import avatar3 from "../assets/avatars/3.jpg"
import avatar4 from "../assets/avatars/4.jpg"
import cardsInHand from "../assets/icons/cards-in-hand.png"
import SampleCard from '../assets/cards/AS.png';
import BackCard from "../assets/cards/gray_back.png"
import "./css/GameTable.css"
import { useParams } from "react-router-dom"
import APIHelper from "../helpers/APIHelper"
import config from "../../config"
import { useEffect, useState } from "react"
function GameTable() {
    const { id } = useParams();
    const [gameData, setGameData] = useState(null)
    const [player1, setPlayer1] = useState(null)
    const [player2, setPlayer2] = useState(null)
    const [player3, setPlayer3] = useState(null)
    const [player4, setPlayer4] = useState(null)
    console.log(id)

    useEffect(() => {
        getGameData()
    }, [])

    async function getGameData() {
        let strBaseUrl = config.BASE_URL + "/game/" + id
        let gameData = await APIHelper.get(strBaseUrl)
        if (gameData.status == "success") {
            setGameData(gameData.data)
            setPlayer1(gameData.data.players[0])
            setPlayer2(gameData.data.players[1])
            setPlayer3(gameData.data.players[2])
            setPlayer4(gameData.data.players[3])
        }
    }


    return (
        <>
            <div style={{ width: '100%' }} className="game-table-container">
                <div className="player-container-top">
                    <div className="player-cards">
                        <h3 className="text-white">
                        {player3 !=null? player3.remaining_cards.length:0}
                        </h3>
                        <img className="cards-in-hand-icon" src={cardsInHand} alt="" />
                    </div>
                    <div className="player-profile">
                        {player3 != null ?
                            <><img className="player-avatar" src={avatar3} alt="" />
                                <h3>{player3.name}</h3></>
                            : ""}
                    </div>
                </div>
                <div className="player-table-center">
                    <div className="player-container-left">
                        <div className="player-profile">
                            {player4 != null ?
                                <><img className="player-avatar" src={avatar4} alt="" />
                                    <h3>{player4.name}</h3></>
                                : ""}
                        </div>
                        <div className="player-cards">
                            <h3 className="text-white">
                            {player4 !=null? player4.remaining_cards.length:0}
                            </h3>
                            <img className="cards-in-hand-icon flip-image" src={cardsInHand} alt="" />
                        </div>
                    </div>
                    <div className="player-table">
                        <img className="dropped-card card-top" src={SampleCard} alt="" />
                        <img className="dropped-card card-left" src={SampleCard} alt="" />
                        <img className="dropped-card card-right" src={SampleCard} alt="" />
                        <img className="dropped-card card-bottom" src={SampleCard} alt="" />
                    </div>
                    <div className="player-container-right">
                        <div className="player-cards">
                            <h3 className="text-white">
                            {player2 !=null? player2.remaining_cards.length:0}
                            </h3>
                            <img className="cards-in-hand-icon" src={cardsInHand} alt="" />
                        </div>
                        <div className="player-profile">
                            {player2 != null ?
                                <><img className="player-avatar" src={avatar2} alt="" />
                                    <h3>{player2.name}</h3></>
                                : ""}
                        </div>

                    </div>
                </div>
                <div className="player-container-bottom">
                    <div className="current-player">
                        <div className="my-cards-container">
                            {
                                player1 !=null ?(
                                    player1.cards.map(function(row){
                                        let strImage = config.MAIN_URL + row.image
                                        console.log(strImage);
                                        return(
                                    <img key={row.id} draggable className="my-card" src={strImage} alt="" />

                                        )
                                    })
                                ):""
                            }
                        </div>
                        <div className="player-profile">
                            {player1 != null ?
                                <><img className="player-avatar" src={avatar1} alt="" />
                                    <h3>{player1.name}</h3></>
                                : ""}
                        </div>
                    </div>

                    <div className="cards-out boxshadow-inset">
                        <img style={{ width: '10%' }} className="dropped-card card-bottom" src={BackCard} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default GameTable
