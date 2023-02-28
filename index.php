<html>
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" type="text/css" 
            href="style.css" />
            <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <title>Clickers</title>
    </head>
    <body>
        <header>

        </header>
        <div id="center">
            <button id="click-me" onclick="newClick()">Click</button>
                <div id="display-score"></div>
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
        <input class="audio" type="button" value="PLAY" onclick="play()">
        <audio id="audio-click" src="game.wav"></audio>
        <input class="audio" type="button" value="PLAY" onclick="play2()">
        <audio id="audio-up" src="error.wav"></audio>


        <script defer type="text/javascript" src="script.js"></script>

        </footer>
    </body>
</html>