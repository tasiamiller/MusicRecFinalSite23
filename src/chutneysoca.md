---
title: ChutneySoca
layout: base.njk
pageClass: soca
---
<h1 class="center">ChutneySoca <!-- sub genre name--></h1>

<p class="summary">Chutney music is a fusion genre of Indian folk music, specifically Bhojpuri folk music, with local Caribbean calypso and soca music, and later on Bollywood music. This genre of music that developed in Trinidad and Tobago is popular in Trinidad and Tobago, Guyana, Suriname, Jamaica, other parts of the Caribbean, Fiji, Mauritius, and South Africa. Chutney music emerged in the mid-20th century and reached a peak of popularity during the 1980s. Several sub-genres have developed. <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsChutneysoca %}
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
    {% for album in albumsChutneysoca %}
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