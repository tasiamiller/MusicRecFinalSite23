---
title: Teen Pop
layout: base.njk
pageClass: pop
---
<h1 class="subgenre-title"> Teen Pop<!-- sub genre name--></h1>

<p class="summary"> Teen pop is a subgenre of pop music that is created, marketed and oriented towards preteens and teenagers. Teen pop incorporates different subgenres of pop music, as well as elements of R&B, dance, electronic, hip hop and rock, while the music of girl groups, boy bands, and acts like Britney Spears, is sometimes referred to as pure pop. Typical characteristics of teen pop music include Auto-Tuned or pitch-corrected vocals, choreographed dances, emphasis on visual appeal (photogenic faces, unique body physiques, immaculate hair styles and fashion clothes), lyrics focused on love, relationships,dancing, partying, friendship, puppy love (also known as a "crush") and repeated chorus lines. Its lyrics also incorporate sexual innuendo. Teen pop singers often cultivate an image of a girl next door/boy next door.<!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsTeenpop %}
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
    {% for album in albumsTeenpop %}
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