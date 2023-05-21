---
title: Punk Pop
layout: base.njk
pageClass: pop
tags:
    - pop
---
<h1 class="subgenre-title">Punk Pop <!-- sub genre name--></h1>

<p class="summary"> Pop-punk (also punk-pop, alternatively spelled without the hyphen) is a rock music genre that combines elements of punk rock with power pop or pop. It is defined by its fast-paced, energetic tempos, and emphasis on classic pop songcraft, as well as adolescent and anti-suburbia themes. It is distinguished from other punk-variant genres by drawing more heavily from 1960s bands such as the Beatles, the Kinks, and the Beach Boys. The genre has evolved throughout its history, absorbing elements from new wave, college rock, ska, rap, emo, and boy bands. It is sometimes considered interchangeable with power pop and skate punk. <!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
    <h2>Top Artists</h2>
    <div class="artist">
        {% for artist in artistsPunkpop %}
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
    {% for album in albumsPunkpop %}
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
<section class="back"><a href="/pop">Back to Pop</a></section>
<!-- suggestion section, still figuring out how to format this using the bubble diagram from the wireframe-->