{
    // Pfad, in dem die Applikationsdateien liegen
    appDir: '../www',

    // Ziel-Pfad f�r die optimierten Dateien (alles aus dem Quellpfad wird dorthin kopiert)
    dir: '../www-built',

    // Relativer Pfad zu den Require-Angaben innerhalb von appDir
    // require(['module1']) => '../www' (appDir) + 'js/' (baseDir) + 'module1.js'
    baseUrl: 'js/',

    // Verschachtelte Abh�ngigkeiten ebenfalls aufl�sen
    findNestedDependencies: true,

    // Einzeldateien, die zusammengefasst wurden aus dem Zielverzeichnis entfernen
    removeCombined: true,

    // Zu Demonstrationszwecken findet keine Minifizierung der Zeildatei statt
    optimize: 'none',

    // Name der zusammengefassten Datei im Zielverzeichnis
    name: 'main'
}
