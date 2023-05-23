---
title: Korean Pop (K-pop)
layout: base.njk
pageClass: pop
---
<h1 class="subgenre-title">Korean Pop <!-- sub genre name--></h1>

<p class="summary">K-pop (Korean: 케이팝; RR: keipap), short for Korean popular music, is a form of popular music originating in South Korea as part of South Korean culture. It includes styles and genres from around the world, such as pop, hip hop, R&B, rock, jazz, gospel, reggae, electronic dance, folk, country, disco, and classical on top of its traditional Korean music roots. The term "K-pop" became popular in the 2000s, especially in the international context. The Korean term for domestic pop music is gayo (Korean: 가요; Hanja: 歌謠), which is still widely used within South Korea. While "K-pop" can refer to all popular music or pop music from South Korea, it is colloquially often used in a narrower sense for any Korean music and artists associated with the entertainment and idol industry in the country, regardless of the genre.  <!-- subgenre summary--></p>

<!-- top album and artist section-->
<section class="top">
<h2>Top Artists</h2>
<div class="artist">
    {% for artist in artistsKoreanpop %}
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
    {% for album in albumsKoreanpop %}
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