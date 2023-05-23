---
title: Soul
layout: base.njk
pageClass: pop
---
<h1 class="center"> Soul<!-- sub genre name--></h1>

<p class="summary"> Soul music is a genre of African American popular music that led to many later genres, from funk and dance music to hip hop and contemporary R&B. It developed in the USA in the late 1950s from African American church music called "gospel music". After slavery ended in 1865, African Americans weren't welcome in the churches of white Americans, so they built their own churches and sang Christian songs with African-American vocal styles and rhythms. They sang joyful, up-tempo gospel songs while clapping and moving to the beat, and they sang slower gospel songs that expressed deep feelings like yearning for God's love. These different styles led to the two main styles of soul music.<!-- subgenre summary--></p>

<!-- top album and artist section-->

<section class="top">
<h2>Top Artists</h2>
<div class="artist">
{% for artist in artistsSoul %}
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
{% for album in albumsSoul %}
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
