---
title: Calypso
layout: base.njk
pageClass: soca
---
<h1 class="subgenre-title">Calyspo <!-- sub genre name--></h1>

<p class="summary"> Calypso is a style of Caribbean music that originated in Trinidad and Tobago during the early to the mid-19th century and spread to the rest of the Caribbean Antilles by the mid-20th century. Its rhythms can be traced back to West African Kaiso and the arrival of French planters and their slaves from the French Antilles in the 18th century.Calypso in the Caribbean includes a range of genres, including benna in Antigua and Barbuda; mento, a style of Jamaican folk music that greatly influenced ska and reggae; ska, the precursor to rocksteady, and reggae; spouge, a style of Barbadian popular music; Dominica cadence-lypso, which mixed calypso with the cadence of Haiti; and soca music, a style of kaiso/calypso, with influences from chutney, soul, funk, Latin and cadence-lypso<!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsCalypso %}
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
    {% for album in albumsCalypso %}
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