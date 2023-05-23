---
title: Dance Pop
layout: base.njk
pageClass: pop
---
<h1 class="center">Dance Pop <!-- sub genre name--></h1>

<p class="summary">Dance-pop is a popular music subgenre that originated in the late 1970s to early 1980s. It is generally up-tempo music intended for nightclubs with the intention of being danceable but also suitable for contemporary hit radio. Developing from a combination of dance and pop with influences of disco, post-disco and synth-pop, it is generally characterized by strong beats with easy, uncomplicated song structures which are generally more similar to pop music than the more free-form dance genre, with an emphasis on melody as well as catchy tunes. The genre, on the whole, tends to be producer-driven, despite some notable exceptions. Dance-pop is highly eclectic, having borrowed influences from other genres, which varied by producers, artists and periods. Such include contemporary R&B, house, trance, techno, electropop, new jack swing, funk and pop rock. Dance-pop is a popular mainstream style of music and there have been numerous artists and groups who perform in the genre.  <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsDancepop %}
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
    {% for album in albumsDancepop %}
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
<section class="back"><a href="/pop">Back to Pop</a></section>
<!-- suggestion section, still figuring out how to format this using the bubble diagram from the wireframe-->