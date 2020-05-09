$("#dashboardBtn").click(function () {
    $(this).text(function(i, text){
        $('#worldwide').toggle();
        $('#top5Countries').toggle();
        if(text === "Worldwide"){
            loadTimeLine();
            return "Top 5 Countries";
        } else {
            loadSummary();
            return "Worldwide";
        }
    })
});