---
title: Groovy Soca
layout: base.njk
pageClass: soca
---
<h1 class="center">Groovy Soca <!-- sub genre name--></h1>

<p class="summary"> Though most of the early soca recordings of the 1970s were done at a groovy pace, Groovy soca was made popular as a trend and soca style starting with Robin Imamshah's composition "Frenchman" in 1990. The term groovy soca was coined in early 2005 by the ISM organizers as a re-branding of the slower tempo soca styles that had been popular in Trinidad and Tobago since the inception of soca music in early 1970s. <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsGroove %}
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
    {% for album in albumsGroove %}
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