---
title: Groove
layout: base.njk
pageClass: soca
---
<h1 class="subgenre-title">Groove <!-- sub genre name--></h1>

<p class="summary"> <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsGroove %}
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
    {% for album in albumsGroove %}
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