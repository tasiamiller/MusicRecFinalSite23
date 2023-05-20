---
title: Dancehall
layout: base.njk
pageClass: soca
---
<h1 class="subgenre-title">Dancehall <!-- sub genre name--></h1>

<p class="summary">Dancehall is a genre of Jamaican popular music that originated in the late 1970s. Initially, dancehall was a more sparse version of reggae than the roots style, which had dominated much of the 1970s. In the mid-1980s, digital instrumentation became more prevalent, changing the sound considerably, with digital dancehall (or "ragga") becoming increasingly characterized by faster rhythms. Key elements of dancehall music include its extensive use of Jamaican Patois rather than Jamaican standard English and a focus on the track instrumentals (or "riddims"). 
    Dancehall saw initial mainstream success in Jamaica in the 1980s, and by the 1990s, it became increasingly popular in Jamaican diaspora communities. In the 2000s, dancehall experienced worldwide mainstream success, and by the 2010s, it began to heavily influence the work of established Western artists and producers, which has helped to further bring the genre into the Western music mainstream
     <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsDancehall %}
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
    {% for album in albumsDancehall %}
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

<!-- suggestion section, still figuring out how to format this using the bubble diagram from the wireframe-->
