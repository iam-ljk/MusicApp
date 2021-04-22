import { v4 as uuidv4} from "uuid";

function chillHop() {
    return [
        {
            name : "Kinsfolk",
            cover : "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist : "Aarigod",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=12997",
            color : ["#F9F9F9","##000000"],
            id : uuidv4(),
            active : true,
        },
        {
            name : "Maple",
            cover : "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist : "Arbour, Aarigod",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=13015",
            color : ["#F9F9F9","##000000"],
            id : uuidv4(),
            active : false,
        },
        {
            name : "Willow",
            cover : "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
            artist : "Philanthrope, Brock Berrigan, The Field Tapes",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=10262",
            color : ["#F9F9F9","##000000"],
            id : uuidv4(),
            active : false,
        },
        {
            name : "Home Court",
            cover : "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
            artist : "Blue Wednesday, Shopan",
            audio : "https://mp3.chillhop.com/serve.php/?mp3=12997",
            color : ["#713625","#96736D"],
            id : uuidv4(),
            active : false,
        },
    ]
}

export default chillHop;