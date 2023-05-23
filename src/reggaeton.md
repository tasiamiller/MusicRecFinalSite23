---
title: Reggaeton
layout: base.njk
pageClass: soca
---
<h1 class="subgenre-title"> Raggaeton<!-- sub genre name--></h1>

<p class="summary"> Reggaeton is a blend of reggae, dancehall, and Latino music that originated in Panama back in the ’90s, and evolved further when it reached Puerto Rico. Its rise to popularity took its time, but now that it’s here, we can’t help but dance to its unique beats.Reggaeton music started out as Reggae en Espanol, or Spanish Reggae, back in 90’s Panama when West Indians were called into the country to help construct the Panama Canal. If it weren’t for them, the merge of reggae and dancehall wouldn’t have created the hip beats we love to dance to today.Heavily influenced by Jamaican reggae and dancehall, Panamanian artists pioneered the humble beginnings of Reggae en Espanol Nando Boom and El General by covering popular Jamaican songs in Spanish.
<!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
<h2>Top Artists</h2>
<div class="artist">
    {% for artist in artistsReggaeton %}
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
    {% for album in albumsReggaeton %}
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
<section class="back"><a href="/soca-music">Back to Soca Music</a></section>
<!-- suggestion section, still figuring out how to format this using the bubble diagram from the wireframe-->