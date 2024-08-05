function getData() {

    const getArtistVal = document.getElementById("artist").value
    const getTitleOfSongVal = document.getElementById("titleOfSong").value
    const dispLyrics = document.getElementById("lyrics")
    const dispTitle = document.getElementById("title")
    const lyricsContent = document.getElementById('lyricsId')
    const hideSearchId = document.getElementById("searchId")

    const notFound = hideSearchId.textContent = "Lyrics not found"


    const apiUrl = `https://api.lyrics.ovh/v1/${getArtistVal}/${getTitleOfSongVal}`

    fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new error("this is for response" + error + notFound )

            
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        
            const lyrics = data.lyrics
        const repLyrics = lyrics.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>');


        dispTitle.textContent = "Title of Song: " + getTitleOfSongVal
        dispLyrics.innerHTML = "Lyrics: " + "<br>" + "<br>" + repLyrics
        lyricsContent.style.display = "flex"
        hideSearchId.style.display = "none"
        document.getElementById("artist").value = ""
        document.getElementById("titleOfSong").value = ""
       


        
       

        
        
    })
    .catch(error => {
        throw new error("this is catch error" + error)
    })

}