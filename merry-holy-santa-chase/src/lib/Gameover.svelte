<script>

    import {get} from "svelte/store"
    import {CountStore, PlayerName, ScoreInDb, ScoreID} from "./store.js"
    import Ranking from "./Ranking.svelte"
    import Retry from "./Retry.svelte"
    import {initializeApp} from "firebase/app";
    import {getFirestore, addDoc, collection, getDocs} from "firebase/firestore"
    import {familyVersion} from "./config.js"

    const firebaseConfig = {
        apiKey: "AIzaSyBpOgtLkUIXsLaHmqZHoqVV_0D3dCfVlVk",
        authDomain: 'merry-holy-santa-chase.firebaseapp.com',
        projectId: 'merry-holy-santa-chase',
        storageBucket: 'merry-holy-santa-chase.appspot.com',
        messagingSenderId: '1050325198070',
        appId: '1:1050325198070:web:2efd1e961bf1c135af38d7',
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  
    const dataCollection = familyVersion ? "userscores-family" : "userscores"
    const name = get(PlayerName)
    const count = get(CountStore) 
    const scoreSaved = get(ScoreInDb)
    const scoreID = get(ScoreID)
    const gameResult = {"name": name, "score": count, "new": true}
    
    const getDataFromDb = async () => {

        // get scores from database
        const querySnapshot = await getDocs(collection(db, dataCollection));
        const userScores = querySnapshot.docs.map((d) => {
            const response = d.data()
            if (d.id === scoreID) {response.new = true};
            return response
        })

        // compute top ten high score
        const scores = !scoreSaved ? [...userScores, gameResult] : [...userScores]
        const topTen = scores.sort((a,b) => {return b.score - a.score}).slice(0,10)
        // fill up to ten if needed
        if (topTen.length < 10) {
            const diff = 10 - topTen.length;
            for (let i of Array(diff).fill()) {
                topTen.push({"name":"--", "new": false, "score":"--"})
            }
        }
        const isTopTen = topTen.some(e=>e.new === true)

        // write game result to database if not exists and name value not empty
        if (gameResult.name !== "" && !scoreSaved) {
            const docRef = await addDoc(collection(db, dataCollection), {...gameResult, "new": false})
            ScoreID.set(docRef.id)
            console.log("Game result written to database with ID: ", docRef.id);
            ScoreInDb.set(true)
        } else {
            console.log("No Game result written to database")
        }

        return {topTen, isTopTen}
    }

</script>

<div id="flexbox-wrapper">
    {#await getDataFromDb()}
        ... warte auf das Resultat
    {:then result}
        {#if result.isTopTen && name !== ""}
            <h1>Super {name}!</h1>
            <p>Mit deinen {count} Punkten hast du es in die Top-Ten geschafft. Dein Ergebnis wird dauerhaft gespeichert.</p>
        {:else if result.isTopTen && name === ""}
            <h1>Schade!</h1>
            <p>Mit deinen {count} Punkten hättest du es in die Top-Ten geschafft.</p>
            <p>Leider hast du keinen Namen eingegeben und dein Ergebnis kann nicht gespeichert werden.</p>
        {:else}
            <h1>Schade{name==="" ? "!" : " " + name + "!"}</h1>
            <p>Du hast {count} Punkte erreicht. Das reicht leider nicht für die aktuelle Top-Ten.</p>
        {/if}
        <Ranking topten={result.topTen}/>
        <Retry />
    {:catch error}
        <p style="color: red">{error.message}</p>
        <Retry />
    {/await }
</div>

<style>
    #flexbox-wrapper  {
        max-width: 90vw;
    }
</style>