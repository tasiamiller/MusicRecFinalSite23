---
title: Country HipHop
layout: base.njk
pageClass: hiphop
---
<h1 class="subgenre-title"> Country Hip Hop<!-- sub genre name--></h1>

<p class="summary">Country rap (or country hip hop and sometimes hick hop) is a fusion genre of popular music, blending country music with hip hop–style singing or rapping. Early influences on the emergence of country rap as a distinct genre include talking blues like "Big Bad John" (1961) by Jimmy Dean, "A Boy Named Sue" (1969) by Johnny Cash, the 1971 cover of "Hot Rod Lincoln" by Commander Cody and His Lost Planet Airmen, "Convoy" (1975) by C.W. McCall and "Uneasy Rider" (1975) and "The Devil Went Down to Georgia" (1979), both by Charlie Daniels. Black artists’ works that may have been influential in the genre's development include Jamaican ska artist Prince Buster's "Texas Hold-Up" (1964), "Lil Ole Country Boy" (1970) by Parliament, and "Black Grass" (1972) by Bad Bascomb.[3] Music journalist Chuck Eddy traces the genre's roots back to Woody Guthrie.[4] <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsCountryhiphop %}
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
    {% for album in albumsCountryhiphop %}
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