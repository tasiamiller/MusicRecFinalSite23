---
title: Pop-Rap
layout: base.njk
pageClass: pop
---
<h1 class="subgenre-title">Pop Rap <!-- sub genre name--></h1>

<p class="summary"> Pop rap (also known as pop hip-hop, hip-pop, pop hop, melodic hip-hop, or melodic rap) is a genre of music fusing the rhythm-based lyricism of hip-hop music with pop music's preference for melodious vocals and catchy tunes. This genre gained mainstream popularity during the 1990s, though the influences and roots of pop rap can trace back to late-1980s hip-hop artists such as Run-DMC, LL Cool J, and Beastie Boys. The lyrics are often lighthearted, with choruses like those heard in pop music.] <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsPoprap %}
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
    {% for album in albumsPoprap %}
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