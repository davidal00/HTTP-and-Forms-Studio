window.addEventListener("load", function(){

    let actions = {
        'google': 'https://www.google.com/search',
        'duckDuckGo': 'https://duckduckgo.com',
        'bing': 'https://www.bing.com/search',
        'ask': 'https://www.ask.com/web'
    }

    let form = this.document.getElementById('searchForm');

    form.addEventListener('submit', function(event){

        // BONUS SECTION
        let searchText = document.getElementById('searchText');
        if(!searchText.value.trim()){
            event.preventDefault();
            window.alert('Please enter a search phrase !');
            return;
        }


        // END OF BONUS

        let inputChecked = document.querySelector('input[name=engine]:checked');
        let searchEngine = inputChecked.value;
        let searchEngineUrl = actions[searchEngine];

        form.setAttribute('action', searchEngineUrl);
    })



});