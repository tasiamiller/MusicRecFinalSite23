---
title: Korean HipHop
layout: base.njk
pageClass: hiphop
---
<h1 class="subgenre-title"> Korean Hiphop<!-- sub genre name--></h1>

<p class="summary">: Korean hip hop, also known as K-hip hop or K-rap, is a subgenre of Korean popular music. 
It is widely considered to have originated in the late 1980s and early 1990s, and has since become increasingly popular, both in Korea and abroad. While Korea's hip hop culture includes various elements such as rap, graffiti, DJing, turntablism, and b-boying, rapping comprises a significant part of the culture. The term "hip hop" is largely recognized and understood as "rap" in Korea. The interplay between the Korean language and English has been used as a technical and aesthetic device in Korean hip-hop. Many Korean hip-hop songs boast syllabic similarities that could be interpreted in either language. The bilingual aspect of this music is one distinguishing factor between Korean hip hop and American hip hop.As early-stage Korean hip-hop was heavily influenced by African-American hip-hop, Korean hip-hop artists naturally started using AAVE in their lyrics. The dominance of Korean-Americans in the Korean hip-hop scene also contributed to the use of mixed languages in Korean hip-hop. English-speaking Korean diaspora artists such as Drunken Tiger, Epik High's Tablo, Swings, Jay Park, and San E have included English lyrics in their raps and attracted the interest of the young generation.
<!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
<h2>Top Artists</h2>
<div class="artist">
    {% for artist in artistsKoreanhiphop %}
    <figure>
        <img src="{{artist.src}}" alt="{{artist.alt}}">
        <figcaption>
            <h3>{{artist.artist}}</h3>
            <p><a href="{{artist.creditLink}}">Photo </a>{{artist.credit}}</p>
        </figcaption>
        </figure>
    {% endfor %}
</div>
</section>

<section class="top">
<h2>Top Albums</h2>
<div class="albums">
    {% for album in albumsKoreanhiphop %}
    <figure>
        <img src="{{album.src}}" alt="{{album.alt}}">
        <figcaption>
            <h3>{{album.album}}</h3>
            <p><a href="{{album.creditLink}}">Photo </a>{{album.credit}}</p>
        </figcaption>
        </figure>
    {% endfor %}
</div>
</section>
<section class="back"><a href="/hiphop">Back to Hip Hop</a></section>
<!-- suggestion section, still figuring out how to format this using the bubble diagram from the wireframe-->