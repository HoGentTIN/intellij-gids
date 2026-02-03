---
---
# Runnen en debuggen

## 1. Java-code runnen

Let op: JavaFX-projecten ga je via Maven runnen. Instructies hiervoor vind je onder [Een JavaFX-project maken](/intellij-gids/javafx/javafx.md). Onderstaande instructies gelden voor niet-grafische projecten.

Er zijn verschillende manieren om code in een Java-bestand te runnen:

- Open  het bestand in de editor, rechterklik in de code van het bestand, en selecteer "Run 'ClassName.main()'".
- Rechterklik op het bestand in het Project tool window (links), en selecteer "Run 'ClassName.main()'".
- Open  het bestand in de editor, selecteer rechtsboven de runconfiguratie "Current File" in de dropdown en klik op de run-knop (groene driehoek).
- Selecteer rechtsboven de runconfiguratie voor het bestand in de dropdown en klik op de run-knop (groene driehoek).
- In de marge naast de code waar ook de lijnnummers staan (de "gutter") zie je ook run-knoppen waarmee je bv. de main-methode kan runnen.

## 2. Java-code debuggen

Bij elke optie hierboven om te runnen, kun je ook de alternatieve "debug" optie vinden (groene kever-icoon). 

Tijdens het debuggen wordt automatisch het Debugger tool window geopend onder de editor, waarin je alle gebruikelijke debugging-features vindt.

De debugger zal de uitvoering van de code pauzeren net vóór een lijn met een **breakpoint** bereikt wordt. Breakpoints kun je in de marge van de code ("gutter") op de lijnnummers plaatsen. Klik op het lijnnummer om een breakpoint te introduceren.

Met `F8` (Step over) kun je de applicatie regel per regel laten uitvoeren nadat een breakpoint werd bereikt. 