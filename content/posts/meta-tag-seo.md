---
title: "Meta tag-ek SEO-hoz: A címkék, amikről érdemes tudni"
date: 2024-05-03
draft: false
tags: ["seo", "statisztika", "trendek"]
description: "Az oldal áttekinti a SEO szempontból legfontosabb meta tageket, megmagyarázva szerepüket és leggyakoribb használati hibákat."
thumbnail: "image/blog/meta-tag-seo/thumbnail.jpg"
ogImage:
  component: BlogOgImage
  props:
    image: image/blog/meta-tag-seo/thumbnail.jpg
    readingMins: 5
slug: "meta-tag-seo"
---


> A meta tag olyan HTML elem, amely információt szolgáltat a weboldal tartalmáról, de nem jelenik meg közvetlenül a weboldalon. Ezek az elemek elsősorban a böngészők és a keresőmotorok számára nyújtanak adatokat az oldal leírásáról, kulcsszavairól, a szerzőről, a karakterkészletről és egyéb metaadatokról. A meta tag-ek a ``<head>`` szekcióban helyezkednek el, és segítik a keresőmotorokat az oldal releváns tartalmának jobb megértésében és indexelésében, valamint befolyásolják az oldal SEO-ját (keresőmotor-optimalizálás). Ezen felül beállíthatnak bizonyos böngészői viselkedést is, például a karakterkészlet meghatározását vagy az oldal frissítési gyakoriságát. 
> 
Ebben a bejegyzésben bemutatom melyek azok a meta tag-ek, amelyek elengedhetetlenek ahhoz, hogy az oldala jó helyezést érjen el a keresőben.

## Title Tag – Az oldal címe
Bár ez konkrétan nem **meta tag**, funkcióját és szerepét tekintve ide soroljuk. Ez határozza meg az oldal címét és fontos információkat nyújt a keresőmotoroknak, arról, hogy miről szól az oldal.

::Bold
  Így néz ki:
::

> `<title>Az oldal címe</title>`

::img
![Meta Title](/image/blog/meta-tag-seo/meta-title.jpg)
::


### Miért fontos a title tag a SEO számára?
Ha rákeresünk valamire a Google-ban, akkor elsőnek ezt a címet fogjuk meglátni, tehát ez jelenti az első benyomást egy oldalról.


> A Google figyelembe veszi az oldal címét, de nem minden esetben azt jeleníti meg a keresőben. Az esetek kb [60%-ában átírja az oldal címét](https://createweb.hu/blog/seo-statisztikak#rangsor-statisztikak) és azt jeleníti meg a találati listában.

### Mire figyeljünk a title tag megadásánál?
-	Minden oldalnak legyen egyedi címe
-	Legyen tömör és leíró jellegű
-	Fogalmazzunk világosan
-	Ne tegyünk írásjelet a cím végére
-	Legyen figyelemfelhívó, de ne kattintásvadász
-	Olyan kulcsszavakat használjunk, amiket a szövegben is többször használunk
-	Ne legyen több mint 60 karakter

### Leggyakoribb hibák a title tagnál

- **Nincs megadva a title tag:**
Könnyen ellenőrizhetjük, hogy meg van-e adva a title tag az oldalunkon. Ennek az egyik legnyilvánvalóbb jele, ha böngészőben csak az oldalunk elérési útját látjuk és nem egy általunk megadott címet.

::img
![No Meta Title](/image/blog/meta-tag-seo/no-meta-title.jpg)


 A másik módja, hogy ellenőrizzük, hogy meg van-e adva és ki van-e töltve rendesen a title tag, ha megnyitjuk az oldalunkat nyomunk egy **F12-es gombot**, ami előhozza a fejlesztői nézetet majd itt megkeressük és megnyitjuk a <head> tag-et. Itt a többi meta tag között látnunk kell a title tag-et is.

::img
![No Meta Title](/image/blog/meta-tag-seo/title-in-code.jpg)


- **Túl hosszú:** Ha túl hosszú a cím, akkor a Google levágja a találati listában, ami ronthatja a felhasználói élményt és a kattintási arányt.

::img
  ![Túl hosszú meta cím](/image/blog/meta-tag-seo/rossz-meta-title.jpg)
  

::img
  ![jó meta cím](/image/blog/meta-tag-seo/jo-meta-title.jpg)
  

- **Több title tag is meg lett adva:** A másik gyakori hiba, ha valami miatt több meta cím is meg van adva az oldalon. Ezt szintén a fejlesztői eszközök előhozásával ellenőrizhetjük, a fentebb bemutatott módon.

- **Több oldalnak is ugyan az a címe** A Google kiemeli, hogy fontos, hogy minden oldalnak egyedi címe legyen.
- **Elavult:** Olyan címek, amiket Google algoritmusa már nem ítél relevánsnak.
pl: Tetőfedés munkadíj, árak 2020
Ha dátumot használunk egy címben, ne felejtsük el aktualizálni a bejegyzést. Ezt a Google külön is értékeli a rangsor összeállításában.

- **Pontatlan cím:** Ha a Google úgy ítéli meg, hogy az oldal címe és tartalma nincs összhangban egymással, akkor kicsi a valószínűsége, hogy találatként jelenítené meg az oldalt egy kapcsolódó lekérdezésre.

## Meta Description – Az oldal leírása

A meta leírás összefoglalja az oldal tartalmát. A keresőmotorok gyakran használják a keresési eredmények kivonataként.

::Bold
Így néz ki:
::
> `<meta name="description" content="Ez az oldal leírása">`

::img
![No Meta Title](/image/blog/meta-tag-seo/meta-description.jpg)

### Miért fontos a meta description a SEO számára?
A meta leírás címkének általában rövid, releváns összefoglalóval kell tájékoztatnia a felhasználókat arról, hogy miről szól egy adott oldal. Célja, hogy felkeltse az érdeklődő figyelmét az oldal felkeresésére.


> A meta leírások nem befolyásolják közvetlenül a rangsorban elért eredményeket. Sokkal inkább marketingeszközként funkcionálnak, ezért itt bátran alkalmazhatunk emotív elemeket és cselekvésre ösztönző felhívásokat, mint például "Fedezze fel", "Tudjon meg többet" vagy "Vásároljon most". Ezek hozzájárulnak ahhoz, hogy a felhasználókat arra ösztönözzük, hogy választásuk éppen az adott weboldalra essen.

### Mire figyeljünk a meta description megadásánál?
- Minden oldalnak legyen egyedi leírása
- Legyen figyelemfelhívó, de ne kattintásvadász
- Ne legyen több mint 150-160 karakter
- A leírás feleljen meg a keresési szándéknak
- Tartalmazzon kulcsszavakat

### Leggyakoribb hibák a meta leírásnál
- **Nincs megadva:** Ezt a fejlesztői eszközökkel ellenőrizhetjük, a fentebb bemutatott módon.
- **Túl hosszú/rövid:** Ha túl hosszú vagy rövid a leírás, a Google levágja vagy kiegészíti azt, ami ronthatja a felhasználói élményt és a kattintási arányt. 
- **Több meta leírás is meg lett adva:** A másik gyakori hiba, ha valami miatt több meta leírás is meg van adva az oldalon. Ezt szintén a fejlesztői eszközök előhozásával ellenőrizhetjük, a fentebb bemutatott módon.
- **Több oldalnak is ugyan az a leírása:** A Google kiemeli, hogy fontos, hogy minden oldalnak egyedi leírása legyen.
- **Kulcsszavak vannak megadva leírásként:** Néhányan kulcsszakakat adnak meg leíráskén. Ez nem jó gyakorlat, helyette probáljunk meg leírók lenni.
::img
  ![rosz meta leírás](/image/blog/meta-tag-seo/rossz-meta-description.jpg)
::img
  ![jó meta leírás](/image/blog/meta-tag-seo/jo-meta-description.jpg)

  

## Meta Robots – A keresőmotorok irányítása

A meta robots tag segít meghatározni, hogy a keresőrobotok hogyan kezeljék az oldal tartalmát. Ezzel az információval szabályozhatjuk, hogy az oldal indexelve legyen-e, és hogy a linkek követése történjen-e meg.

### Miért fontos a meta robots a SEO számára?
A meta robots tag segítségével megakadályozhatjuk az oldal bizonyos részeinek indexelését, ha nem szeretnénk, hogy megjelenjen a keresőmotorokban. Segítségével optimalizálhatjuk az oldal link szerkezetét, irányítva a keresőmotorokat arra, hogy mely linkek követését részesítsék előnyben.

::Bold
Így néz ki:
::

> `<meta name=”robots” content="noindex, nofollow">`
> 
> `<meta name=”robots” content="index, follow">`
> 
>`<meta name=”robots” content="noindex, follow">`
> 
> `<meta name=”robots” content="index, nofollow">`

Típusai:
-	**index:** utasítja a robotokat, hogy indexeljék az oldalt
-	**noindex:** utasítja a robotokat, hogy ne indexeljék az oldalt
-	**follow:** utasítja a robotokat, hogy térképezzék fel az oldalon található hivatkozásokat
-	**nofollow:** utasítja a robotokat, hogy ne térképezzék fel az oldalon található hivatkozásokat



> A Google a „nofollow” címkéket inkább ajánlásokként kezeli, nem utasításokként. Vannak más, fejlettebb attribútumok is, mint például a noarchive, noimageindex vagy a nosnippet, amelyekkel tovább finomíthatjuk az utasításokat.

### Mire figyeljünk a meta robots megadásánál?
-	Csak akkor használjon meta robots címkéket, ha korlátozni szeretné, hogy a Google hogyan térképezzen fel egy oldalt
-	Ne blokkoljon meta robots címkéket tartalmazó oldalakat a `robots.txt` fájlban

### Leggyakoribb hibák a meta robots-nál
- Túl szigorú beállítások
- Az oldal teljes kizárása az indexelésből, amikor csak bizonyos részeket kellene korlátozni.
- Ellentmondásos utasítások
- Egyszerre index és noindex utasítások megadása, ami zavart okozhat.

## Meta viewport - A weboldalak mobil nézete
A meta viewport címke beállítja a weboldal látható területét. Arra szolgál, hogy utasítsa a böngészőt, hogyan jelenítse meg az oldalt különböző méretű képernyőkön (azaz asztali számítógépen/táblagépen/mobilon).
::Bold
Így néz ki:
::
> `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### Miért fontos a meta viewport a SEO számára?
A Google 2015-től előnyben részesíti a mobilbarát weboldalakat. A meta viewport jelzi, hogy egy oldal valószínűleg reszponzív.  
Az alábbi kép szemlélteti a különbséget, hogyan reagál egy kép, ha be van állítva a meta viewport *(1. kép)* és ha nem *(2.kép)*

::img
![meta viewport különbség](/image/blog/meta-tag-seo/meta-viewport.jpg)

> **Fontos:**
A meta viewport beállítása még nem teszi reszponzívvá a weboldalt. Ahhoz, hogy tökéletesen nézzen ki egy weboldal további CSS beállításokra van szükség.

### Leggyakoribb hibák a meta viewport-nál
-	**Nem megfelelő beállítások:** Amikor a viewport értékek nem optimálisak a különböző eszközök számára, ez ronthatja a felhasználói élményt.
-	**Elhanyagolása:** Sok weboldal még mindig nem használ viewport taget, ami negatívan befolyásolhatja a mobil felhasználók élményét és az oldal SEO-ját.
-	**Túlzott korlátozások:** A felhasználói zoom letiltása néha akadályozhatja a felhasználók képességét, hogy kényelmesen olvassák az oldal tartalmát.

## Meta Charset – A weboldal karakterkódolása

Bár a meta charset tag technikailag egy meta elem, lényegi szerepe van a weboldalak tartalmának helyes megjelenítésében. Ez a tag határozza meg a weboldal karakterkódolását, ami alapvető a karakterek helyes megjelenítéséhez a különböző böngészőkben és eszközökön.

::Bold
Így néz ki:
::
> `<meta charset="UTF-8">`

### Miért fontos a SEO számára?
A helyes karakterkódolás biztosítja, hogy a weboldal minden felhasználó számára megfelelően jelenik meg, függetlenül az általuk használt eszköztől vagy böngészőtől. Ha a karakterkódolás nem megfelelő, az zavaró és értelmezhetetlen szövegeket eredményezhet, ami ronthatja a felhasználói élményt és negatívan befolyásolhatja a weboldal keresőmotoros rangsorolását.

> Sok modern weboldal használja az UTF-8 kódolást, mivel ez támogatja az összes jelentős nyelv karaktereit, beleértve azokat is, amelyek kiterjedt karakterkészleteket igényelnek, mint például a kínai, japán vagy arab nyelvek. Ez a sokoldalúság teszi az UTF-8-at a webes fejlesztés standardjává.

### Mire figyeljünk a meta charset megadásánál?

-	**Általános kódolás:** Az UTF-8 a legelterjedtebb és ajánlott kódolás, mivel széles körű kompatibilitást biztosít.
-	**Egységes használat:** Ügyeljen arra, hogy a weboldalon mindenhol ugyanazt a karakterkódolást használja, hogy elkerülje a kódolási konfliktusokat.
-	**Korai meghatározás:** A karakterkódolást a HTML dokumentum <head> részének elején kell megadni, hogy a böngésző már a betöltés kezdetén tudja, hogyan kell kezelni a karaktereket.
### Leggyakoribb hibák a meta charset-nál

-	**Elmulasztott megadás:** Ha nem ad meg karakterkódolást, a böngészők találgathatnak, ami hibás megjelenést okozhat.
-	**Különböző kódolások használata:** Ha az oldalon különböző részek különböző kódolásokat használnak, az összeomlást és értelmezési hibákat eredményezhet.
-	**Elavult kódolás:** Néhány régebbi kódolás, mint például az ISO-8859-1, nem támogatja a nem latin karaktereket, ami korlátozza a nyelvi támogatást.

## Mi a helyzet a Meta Keywords-el?

A meta keywords tag korábban nagyon népszerű volt a SEO gyakorlatokban, mivel közvetlenül befolyásolta a weboldalak rangsorolását. Azonban a 2000-es évek elején a keresőmotorok elkezdtek eltávolodni ettől a gyakorlattól, miután rájöttek, hogy gyakran vezetett visszaélésekhez és nem kívánt SEO taktikákhoz, mint például a kulcsszóhalmozás.

Sokan azt tanácsolják, hogy még mindig érdemes használni a meta keywords tag-et a „biztos, ami biztos” alapon, de én ezt nem javaslom. A Google már egyáltalán nem veszi figyelembe ezt a tag-et a rangsorolásnál, míg a Bing kereső 2011 óta kifejezetten bünteti a használatát.




