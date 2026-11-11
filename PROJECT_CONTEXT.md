# MaddeArt – projektkontext

Senast granskad: 2026-11-11

## Syfte

Vi bygger en professionell, responsiv och tillgänglig portfolio för fotografen Madeleine Dalla. Madeleine ska på sikt kunna uppdatera projekt, bilder och konsttryck själv.

Den nuvarande webbplatsen, https://www.madeleinedalla.art/, är referens för innehåll och projekt. Zip-filen `madeleine-dalla-src.zip` är referens för visuell layout. Den nya implementationen ska vara tydligare och enklare att använda än den nuvarande webbplatsen. Kopiera inte referensprojektets färdiga komponenter.

All ny projektkod hör hemma i `maddeart-page`. Ändra inte referensprojektet.

## Nuvarande kodläge

Den aktuella koden motsvarar innehållet i commit `3408a54`. Git-historiken innehåller därefter en React Router-commit (`0dbf61d`) och en återställningscommit (`543095f`). Router-versionen finns även kvar på backupgrenen `backup-react-router-projects-0dbf61d`. Inga commits raderades.

Kontrollera alltid `git status` och de senaste commitsen i en ny konversation; denna status kan ha ändrats.

## Teknikstack och drift

- React, TypeScript, Vite och vanlig CSS.
- npm, ESLint, Git och GitHub.
- GitHub-repo: https://github.com/rcilomba/maddeart-portfolio
- Förhandsversion: https://maddeart-portfolio.netlify.app/
- Bilderna i nuvarande datafiler hämtas från `images.prismic.io`.
- `react-router` finns i `package.json` som version 8.5.1, men används inte i den återställda koden. Den versionen kräver nyare Node än utvecklarens senast uppgivna Node 22.15.0. Lös versionsfrågan innan routing införs igen.

`README.md` är fortfarande Vites malltext och beskriver inte MaddeArt.

## Det som fungerar i koden

- En startsida med introduktion, fem utvalda projekt, Limited Editions, arkivförhandsvisning och en sektion med alla projekt.
- Projektdata för 14 projekt finns i `src/data/projects.ts`. Fältet `featured` markerar de fem projekt som visas i den utvalda sektionen.
- `ProjectCard` och `AllProjects` återanvänder samma projektdata.
- `ImageDialog` öppnar ett projekt och bläddrar mellan dess bilder med knappar, piltangenter och miniatyrer. Bildräknaren visas när projektet har flera bilder.
- Baldrsdatter har tre bilder i sin `images`-lista. Övriga projekt visar för närvarande omslagsbilden i dialogen.
- Skip-länk, synliga fokusmarkeringar, bildbeskrivningar och tangentbordsstöd har lagts till.
- `EditionCard` visar konsttrycket Beneath the Surface. Förfrågningar är avstängda med `enquiriesEnabled: false` i `src/data/edition.ts`. Mejladressen där är en testadress.
- En lokal produktionsbyggnad och lintkontroll fungerade vid återställningen.

## Viktiga filer

- `src/App.tsx`: sidans nuvarande struktur, projektval och bilddialog.
- `src/data/projects.ts`: projekt, omslagsbilder, alt-texter och galleribilder.
- `src/data/edition.ts`: data och förfrågningsstatus för konsttrycket.
- `src/components/ProjectCard.tsx`: projektkort.
- `src/components/AllProjects.tsx`: översikt över alla projekt.
- `src/components/ImageDialog.tsx`: bildvisare och gallerinavigation.
- `src/components/EditionCard.tsx`: konsttryck.
- `src/App.css` och `src/index.css`: komponentstilar och globala stilar.
- `src/main.tsx`: startar React-appen.

## Viktiga beslut

- Startsidan ska visa fem utvalda projekt. Alla 14 ska senare få en separat projektöversikt på `/projects`. I nuvarande kod ligger översikten fortfarande på startsidan; länken använder `#all-projects`.
- Varje projekt ska kunna innehålla flera fotografier och på sikt få en tydlig, delbar projektsida. De flesta gallerierna är ännu inte kompletta.
- Prismic är förstahandsval för CMS om Madeleines befintliga konto, innehållsmodell, arbetsflöde och kostnader fungerar för den nya sidan. Sanity är ett alternativ, inget beslutat byte. Prismic-bildadresser bevisar inte ensamma hur hela webbplatsen administreras.
- Netlify används för förhandsversionen. GoDaddy kan senare användas för att peka Madeleines domän mot den nya sidan. Dokumentera befintliga DNS-poster innan någon domänändring, särskilt poster för e-post. Den gamla sidan ska kunna återställas genom att återställa tidigare DNS-värden.
- Högupplösta original och tryckfiler ska hållas privata. Fotografier som visas i en webbläsare kan inte skyddas helt mot nedladdning.
- Ingen kundvagn eller onlinebetalning planeras. En framtida förfrågningsfunktion ska använda bekräftad kontaktadress och korrekta verk-, storleks- och prisuppgifter.
- Blockchain-delen är en separat LIA-prototyp i `blockchain-demo`, utan beroende från webbplatsen eller CMS. Den är inte byggd ännu.

## Kvar att göra

1. Bygg en separat `/projects`-sida utan att ändra startsidans avsedda design. Välj först en React Router-version som stöder utvecklarens Node-version. Kontrollera även direktladdning på Netlify.
2. Bygg tydliga, delbara projektsidor och fyll på varje projekts bildlista i rätt ordning med granskade alt-texter.
3. Granska mobilnavigation, bildstorlekar, kontrast, fokus och andra tillgänglighetsdetaljer i webbläsare.
4. När Madeleine ger åtkomst: undersök Prismic och bekräfta vilket innehåll hon ska kunna redigera. Koppla sedan frontend till valt CMS.
5. Bekräfta priser, upplagor, storlekar, tillgänglighet och kontaktflöde med Madeleine innan förfrågningar aktiveras.
6. Slutför designen mot zip-referensen, granska innehållet och testa publicerad version.
7. Bygg och dokumentera den fristående blockchain-prototypen för LIA.

## Så arbetar vi tillsammans

- Svara på svenska.
- Arbeta med en tydlig uppgift i taget och förklara kort varför den behövs.
- Ge exakta filnamn och kodsnuttar med begränsade luckor som utvecklaren själv fyller i.
- Granska utvecklarens kod och ge konkreta rättningar. Ge komplett kod när utvecklaren ber om det.
- Hoppa över rutinmässiga kontrollfrågor; utvecklaren vill komma framåt.
- Kontrollera arbetskatalogen före terminalkommandon. Git Bash använder `pwd`, inte PowerShell-kommandot `Get-Location`.
- Kör `npm run build` och `npm run lint` efter betydande kodändringar.
- Förklara när en `git push` även kan utlösa en Netlify-publicering. Committa inte testadresser eller obekräftade affärsuppgifter som aktiva funktioner.
- I en ny konversation: läs först denna fil och kontrollera aktuell kod och Git-status. Föreslå nästa steg innan större kodändringar görs.
- Uppdatera denna fil efter större funktioner, viktiga tekniska beslut eller ändringar i projektets omfattning, men inte efter varje liten kodändring.
- Skilj alltid mellan planerade och färdiga funktioner. Kontrollera koden innan något rapporteras som implementerat.

## För en ny Codex-konversation

Läs denna fil och granska därefter aktuell kod, `git status` och de senaste commitsen. Låt koden och Git-status avgöra vad som faktiskt är gjort; denna fil är en ögonblicksbild. Föreslå nästa steg innan större kodändringar görs. Fortsätt med en uppgift i taget och uppdatera projektkontexten när större funktioner, viktiga beslut eller projektets omfattning ändras.
