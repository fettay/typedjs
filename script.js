setTimeout(function(){
        $(function(){

        $("#typed").typed({
            strings: ["GeniusLabszzz", "Geniuslab fait vivre vos idees. </br> De la creation du design a la mise en place de la base de donnée. </br> En plus nous vous accompagnons et vous conseillons durant l'ensemble du travail. <br> Enfin nous vous permettons de suivre en direct l'évolution de vos sites."],
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){},
            resetCallback: function() {}
        });

    });
    }, 1300);

     setTimeout(function(){
        $('#connexion').removeClass('hidden');
    },700);
