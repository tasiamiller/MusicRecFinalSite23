---
title: Mumble Rap
layout: base.njk
pageClass: hiphop
---
<h1 class="subgenre-title">Mumble Rap <!-- sub genre name--></h1>

<p class="summary">Mumble rap is known for its emphasis on the overall vibe and energy of the music rather than intricate lyricism or storytelling. The lyrics often prioritize catchy phrases, ad-libs, and repetitive rhymes over deep meaning or complex wordplay. As the name suggests, mumble rap artists sometimes deliver their vocals in a way that can be difficult to understand or decipher, with a focus on the flow and melody rather than clear articulation. <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsMumblehiphop %}
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
    {% for album in albumsMumblehiphop %}
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