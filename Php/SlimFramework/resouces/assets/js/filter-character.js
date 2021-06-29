//sempre que tem alguma alteracao
$('.check-option').on('change', function () {
    //crio array para armazenar valores que serao selecionados para os filtros
    var elementOptionTier = [];
    var elementOptionClass = [];
    var elementOptionAll = [];

    //rodo em todos o filtros(input) verificando qual esta checked, o que estive checked eu faço uma verificação para saber oque ele armazena e assim  armazeno o value dele no array
    $('.check-option').each(function () {
        var verifyChecked = $(this).is(':checked');
        if (verifyChecked) {
            var dataElementTier = $(this).attr('data-tier');
            var dataElementClass = $(this).attr('data-typeClass');
            var dataElementOther = $(this).attr('data-typeOther');

            if (dataElementTier != null) {
                elementOptionTier.push(dataElementTier);
                elementOptionAll.push(dataElementTier);
            }
            if (dataElementClass != null) {
                elementOptionClass.push(dataElementClass);
                elementOptionAll.push(dataElementClass); 
            }

            if (dataElementOther != null) {
                elementOptionClass.push(dataElementOther);
                elementOptionAll.push(dataElementOther); 
            }
            
        }
       
    })

    $('.check-card').each(function () {
        //Recebo quais são os valores dos cards
        var elementCardTier = $(this).attr('data-tier');
        var elementCardClass1 = $(this).attr('data-typeClass1');
        var elementCardClass2 = $(this).attr('data-typeClass2');
        var elementCardClass3 = $(this).attr('data-typeClass3');
        var elementCardAkuma = $(this).attr('data-typeAkuma');
        var elementCardMarine = $(this).attr('data-typeMarine');
        var elementCardParede = $(this).attr('data-typeParede');
        var elementCardPonte = $(this).attr('data-typePonte');
        var elementCardPirate = $(this).attr('data-typePirate');
        var elementCardRoyal = $(this).attr('data-typeRoyal');
        
            
        //Verifico se possui algum filtro selecionado e se tiver verifico se os elementos do cards contem dentro do array de filtros
        if(elementOptionAll == ""){
            $(this).css("display", "block");
        }else{     
            //atribuo a uma variavel o indexof para saber se possui aquele valor ou nao
            var verificationClass1 = elementOptionClass.indexOf(elementCardClass1);
            var verificationClass2= elementOptionClass.indexOf(elementCardClass2);
            var verificationClass3= elementOptionClass.indexOf(elementCardClass3);
            var verificationTier = elementOptionTier.indexOf(elementCardTier);
            var verificationAkuma = elementOptionClass.indexOf(elementCardAkuma);
            var verificationMarine = elementOptionClass.indexOf(elementCardMarine);
            var verificationParede = elementOptionClass.indexOf(elementCardParede);
            var verificationPonte = elementOptionClass.indexOf(elementCardPonte);
            var verificationPirate = elementOptionClass.indexOf(elementCardPirate);
            var verificationRoyal = elementOptionClass.indexOf(elementCardRoyal);

            if (elementOptionTier == ""){ // 
                if( verificationClass1 > -1 || verificationClass2 > -1 || verificationClass3 > -1 || verificationAkuma > -1 || verificationMarine > -1 || verificationParede > -1 || verificationPonte > -1 || verificationPirate > -1 || verificationRoyal > -1){
                    $(this).css("display", "block");
                }else{
                    $(this).css("display", "none");
                }
            }else{
                if( (verificationTier > -1) && (verificationClass1 > -1 || verificationClass2 > -1 || verificationClass3 > -1 || verificationAkuma > -1 || verificationMarine > -1 || verificationParede > -1 || verificationPonte > -1 || verificationPirate > -1 || verificationRoyal > -1)){
                    $(this).css("display", "block");
                }else{
                    $(this).css("display", "none");
                }
            }
                

            if(elementOptionClass == ""){
                if(verificationTier > -1){
                    $(this).css("display", "block");
                }else{
                    $(this).css("display", "none");  
                }
            }   
            
        }

    });

})

