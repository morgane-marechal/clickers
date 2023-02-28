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
                <div id="bonus">
                    <div class="card" title="valeur du click +1">
                        <button id="smallAdd" onclick="small()">Petit Add</button>
                        <p class="prix">Prix du bouton <br><span id="prixsmall"></span> ck</p>
                    </div>
                    <div class="card" title="incrément/S x 2">
                        <button id="mediumAdd" onclick="medium()">Medium Add</button>
                        <p class="prix">Prix du bouton <br><span id="prixmedium"></span> ck</p>
                    </div>
                    <div class="card" title="incrément/S x 3">
                        <button id="bigAdd" onclick="big()">Big Add</button>
                        <p class="prix">Prix du bouton <br><span id="prixbig"></span> ck</p>
                    </div>
                </div>
                <div id="reset">
                    <button id="btnreset" onclick="reset()">Reset</button>
                </div>
        </div>
        <footer>
        <script defer type="text/javascript" src="script.js"></script>

        </footer>
    </body>
</html>