---
title: Alternative HipHop
layout: base.njk
pageClass: hiphop
---
<h1 class="subgenre-title"> Alternative Hip Hop<!-- sub genre name--></h1>

<p class="summary">Alternative hip hop (also known as alternative rap and experimental hip hop[citation needed]) is a subgenre of hip hop music that encompasses a wide range of styles that are not typically identified as mainstream. AllMusic defines it as comprising "hip hop groups that refuse to conform to any of the traditional stereotypes of rap, such as gangsta, bass, hardcore, and party rap. Instead, they blur genres drawing equally from funk and pop/rock, as well as jazz, soul, reggae, and even folk." Alternative hip hop developed in the late 1980s and experienced a degree of mainstream recognition during the early-to-mid 1990s. While some groups such as Arrested Development and The Fugees managed to achieve commercial success before breaking up, many alternative rap acts tend to be embraced by alternative rock listeners other than hip-hop or pop audiences. The commercial and cultural momentum was impeded by the then  -also emerging, significantly harder-edged West Coast gangsta rap. A resurgence came about in the late 1990s and early 2000s at the dawn of the digital era with a rejuvenated interest in independent music by the general public. <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsAlternativehiphop %}
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
    {% for album in albumsAlternativehiphop %}
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