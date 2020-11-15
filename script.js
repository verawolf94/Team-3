document.getElementById("EvolutionofMusicContent").addEventListener("click", displayEvolutionofMusic);
document.getElementById("GenresContent").addEventListener("click", displayGenres);
document.getElementById("BenefitsofMusicContent").addEventListener("click", displayBenefitsofMusic);

function displayEvolutionofMusic()
{
  document.getElementById("articleID").innerHTML="<ul id=\"Benefits of Music\"><h1>Evolution of Music</h1><p>The earliest melody that is known to the current world is the \“Hurrian Hymn No. 6\” dating back to the 1400 B.C.E and was found in Syria. Although the first complete tune that we have found is \"Seikilos Epitaph\" from around 200 BC in Greek. From there music has evolved throughout the years, changing constantly with the influence of culture, new instruments, singers and so forth. With these changes, music has branched off into different types that we now know as \"music genres\". <br> <img src=\"images/hurriun no 6.png\" alt=hurriun no.6 style=\"width:250px; height:auto;\">  <img src=\"images/Notes.png\" alt=hurriun no.6 style=\"width:350px; height:auto;\"> .</p></ul>"
}
			
function displayGenres()
 {
  document.getElementById("articleID").innerHTML="<div class=\"div1\"><ul id = \"Genres\"><h1>Genres</h1><p>The term genre in music identifies as a customary style of songs that each individual desires to listen to. The difference in music genres are recognized by various melodic structures and styles that people of different groups or cultures prefer listening to, ranging from traditional, religious or cultural melody that makes the sound quality unique and soothing to their ears. Many genres have a rich history or geographical significance, a cult following or music roots that go far beyond the 20th century.</div><br><img src=\"images/turn table.gif\" alt=hurriun no.6 style=\"width:250px; height:auto;\"></p></ul>"
}
	
function displayBenefitsofMusic()
{
  document.getElementById("articleID").innerHTML="<div class=\"div2\"><ul id =\"Benefits of Music\"><h1>Benefits of Music</h1><p>	Music can elevate an individual's mood. Of course you have to be listening to your favorite genre of music. Studies show that music can help with production of the hormone dopamine and the release of serotonin which help elevate mood and reduce anxiety and depression. Music can help with the gym. Listening to a track can pump you up while weight lifting or even keep your mind off long physical endurance exercises.</div><br><img src=\"images/scale up.gif\" alt=hurriun no.6 style=\"width:150px; height:auto;\"</p></ul>"
}