<html>

<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <meta http-equiv="x-ua-compatible" content="IE=edge" />
    <title>Clickers</title>
</head>

<body>
    <header>
    <div id="elements">
        <img id="heart" src="candy-hearts.svg" alt="petit coeur" />
        <img id="lollypop" src="lolly2.svg" alt="petit coeur" />
        <div id="audio-player-container">
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js">
            </script>
            <lottie-player onclick="PlayMusic()" src="https://assets2.lottiefiles.com/packages/lf20_NUz0ZU.json"  background="transparent"  speed="1"  style="width: 50px; height: 50px;"  loop autoplay>
                <input class="audio" type="button" value="PLAY" onclick="play4()" >
                <audio id="audio-music" src="back_music.mp3" loop>
                </audio>
            </lottie-player>
        </div>
    </div>

    </header>
    <div id="center">
        <button id="click-me" onclick="newClick()">Click</button>
        
        <div id="display-score"></div>
        <div id="displayValueClick"><span id="valueClick"></span>/click </div>
        
        <div id="displayInc"><span id="inc"></span> click/s auto</div>
        <div id="bonus">
            <div class="card" title="click value +2">
                <button id="smallAdd" onclick="small()">Upgrade Basic Click</button>
                <p class="prix">Button price <br><span id="prixsmall"></span> ck</p>
            </div>
            <div class="card" title="add 2ck/S">
                <button id="mediumAdd" onclick="medium()">Auto Add Click lv.1</button>
                <p class="prix">Button price <br><span id="prixmedium"></span> ck</p>
            </div>
            <div class="card" title=" ck/S multiply by 2">
                <button id="bigAdd" onclick="big()">Multiply Auto Click lv.2</button>
                <p class="prix">Button price <br><span id="prixbig"></span> ck</p>
            </div>
        </div>
        <div id="reset">
            <button id="btnreset" onclick="reset()">Reset</button>
        </div>
    </div>
    <footer>
        <input class="audio" type="button" value="PLAY" >
        <audio id="audio-click" src="game.wav"></audio>
        <input class="audio" type="button" value="PLAY" onclick="play2()">
        <audio id="audio-up" src="error.wav"></audio>
        <input class="audio" type="button" value="PLAY" onclick="play3()">
        <audio id="audio-cartoon" src="cartoon.wav"></audio>

        <script defer type="text/javascript" src="script.js"></script>

    </footer>
</body>

</html>