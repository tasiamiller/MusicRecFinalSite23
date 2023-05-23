---
title: Grime
layout: base.njk
pageClass: hiphop
---
<h1 class="center">Grime- UK Based Hiphop <!-- sub genre name--></h1>

<p class="summary"> The grime rap genre is a style of music that originated in the United Kingdom, specifically in the London area, during the early 2000s. It emerged as a fusion of UK garage, dancehall, and hip hop, with influences from other genres such as drum and bass. Grime is characterized by its fast-paced, aggressive, and energetic sound, often featuring rapid-fire and intricate lyricism delivered in a distinctive British accent.<!-- subgenre summary--></p>

<!-- top album and artist section-->
<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsGrimerap %}
        <figure>
            <img src="{{artist.src}}" alt="{{artist.alt}}">
            <figcaption>
                <h3>{{artist.artist}}</h3>
                <h4><a href="{{artist.ticketmaster}}"> Check For Concerts In Your Area! </a></h4>
                <p><a href="{{artist.creditLink}}">Photo </a>{{artist.credit}}</p>
            </figcaption>
            </figure>
        {% endfor %}
    </div>
    </section>

<section class="top">
<h2>Top Albums</h2>
<div class="albums">
    {% for album in albumsGrimerap %}
    <figure>
        <img src="{{album.src}}" alt="{{album.alt}}">
        <figcaption>
            <h3>{{album.album}}</h3>
            <h4><a href="{{album.spotify}}"> Listen Here </a></h4>
            <p><a href="{{album.creditLink}}">Photo </a>{{album.credit}}</p>
        </figcaption>
        </figure>
    {% endfor %}
</div>
</section>
<section class="back"><a href="/hiphop">Back to Hip Hop</a></section>
<!-- suggestion section, still figuring out how to format this using the bubble diagram from the wireframe-->