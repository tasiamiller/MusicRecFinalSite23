---
title: Abstract Hip Hop
layout: base.njk
pageClass: hiphop
---
<h1 class="center"> Abstract Hip Hop<!-- sub genre name--></h1>

<p class="summary">Abstract hip hop is a form of Hip Hop characterized by rappers employing more abstract lyrics compared to the conventional norms of the genre. The content of the lyrics encompasses a wide spectrum, ranging from philosophical and abstract concepts to absurd and stream-of-consciousness ideas. In contrast to the direct and explicit language commonly found in mainstream hip hop, abstract hip hop favors the use of extensive metaphors, symbolic word choices, and enigmatic meanings. Many artists within this style deviate from the usual conventions of rhyme and rhythm in their rapping, instead incorporating unconventional poetic meters that sometimes resemble Spoken Word. Moreover, abstract hip hop musicians often feature unconventional beats that complement the unorthodox lyrical approach, often blurring the lines with Experimental Hip Hop. <!-- subgenre summary--></p>

<!-- top album and artist section-->
<section class="top">
<h2>Top Artists</h2>
<div class="artist">
    {% for artist in artistsAbstracthiphop %}
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
    {% for album in albumsAbstracthiphop %}
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