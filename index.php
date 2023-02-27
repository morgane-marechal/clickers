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
            <div id="display-score">
        </div>

        <div id="bonus">
            <div class="card">
                <button id="smallAdd" onclick="small()">Petit Add</button>
                <p class="prix">Prix du bouton: <span id="prixsmall"></span> </p>
            </div>
            <div class="card">
                <button id="mediumAdd" onclick="medium()">Medium Add</button>
                <p class="prix">Prix du bouton: <span id="prixmedium"></span></p>
            </div>
            <div class="card">
                <button id="bigAdd" onclick="big()">Big Add</button>
                <p class="prix">Prix du bouton: <span id="prixbig"></p>
            </div>
        </div>


        </div>
        <footer>
        <script defer type="text/javascript" src="script.js"></script>

        </footer>
    </body>
</html>