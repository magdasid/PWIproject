var app = angular.module("app", ['ngRoute', 'pascalprecht.translate']);

app.config(function($routeProvider, $translateProvider) {
    $routeProvider
        .when("/", {
        templateUrl: "about.html",
        controller: 'myCntrl'
    })
        .when("/about", {
        templateUrl: "about.html",
        controller: 'myCntrl'
    })
        .when("/servicescakes", {
        templateUrl: "servicesc.html",
        controller: 'myCntrl'
    })
        .when("/servicesbreakfast", {
        templateUrl: "servicesb.html",
        controller: 'myCntrl'
    })
        .when("/contact", {
        templateUrl: "contact.html",
        controller: 'myCntrl'
    });

    $translateProvider.fallbackLanguage('pl');
    $translateProvider.registerAvailableLanguageKeys(['pl', 'en'], {
        'pl_*': 'pl',
        'en_*': 'en'
    })

    $translateProvider.translations('pl', {
        HOME: "Strona główna",
        ABOUT: "O nas",
        SERVICESC: "Oferta ciast",
        SERVICESB: "Oferta sniadaniowa",
        CONTACT: "Kontakt",
        DETAILS: "Kawiarnia nastawiona na słodkie wypieki, śniadania oraz aromatyczną kawę.",
        CIASTOCYTRYNOWE: "ciasto cytrynowe",
        SZARLOTKA: "szarlotka",
        CIASTOCZEKOLADOWE: "ciasto czekoladowe",
        KARMELOWE: "ciasto karmelowe",
        TORT: "tort tęczowy",
        MINT: "babeczki miętowe",
        MERINGUE: "beza",
        CARROT: "ciasto marchewkowe",
        SERNIK: "sernik",
        TARTA: "tarta owocowa",
        MECH: "ciasto zielony mech",
        TARTA2: "tarta biała czekolada z owocami",
        INFO: "W naszej ofercie znajdziesz wielką różnorodność od tradycyjnych ciast poprzez bardziej wymyślne dla smakoszy i koneserów torty i ciasteczka, jak i również ciasta w odchudzonej wersji. Prezentowane wypieki to nasza stała oferta produktów. Wyprodukowane wg własnych receptur, na bazie najwyższej jakości składników.",
        INFO2: "Śniadania serwujemy cały dzień. W naszej ofercie znajdziesz naleśniki, gofry, owisianki i tosty. Prezentowane śniadania to nasza stała oferta. Wyprodukowane wg własnych receptur, na bazie najwyższej jakości składników.",
        ABOUTME: "Caffeteria di Magda to przytulna kawiarnia znajdująca sie w centrum Warszawy. W ofercie kawiarnii znaleźć można zarówno ciasta słodkie i tradycyjne, jak i wypieki bardziej nowoczesne tzw. fit. Pieczemy ciasta na zamówienie. Serwujemy pyszne śniadania i aromatyczną kawę. Strona została stworzona jako projekt zaliczeniowy przedmiotu 'Programowanie w Internecie'. Autorką projektu jest Magdalena Sidor.",
        KONTAKT: "Jeśli masz pytania, coś Ci się tu spodobało lub coś wymaga poprawy – daj znać! Wybierz najwygodniejszą formę kontaktu! Napisz magda_si@wp.pl lub wypełnij formularz!",
        PLACKI: "Placki z owocami",
        SZAKSZUKA: "szakszuka",
        TOSTY: "tosty",
        NATOSCIE: "tost z jajkiem",
        GOFRY: "gofry na słodko i słono",
        OWSIANKA: "owsianka z dodatkami",
        NALESNIKI: "naleśniki z dodatkami",
        ROGAL: "croissant"
        
    });
    $translateProvider.translations('en', {
         HOME: "Home",
        ABOUT: "About",
        SERVICES: "Services",
        BLOG: "Blog",
        CONTACT: "Contact",
        DETAILS: "Café with sweet pastries, breakfast and aromatic coffee.",
        CIASTOCYTRYNOWE: "lemon cake",
        SZARLOTKA: "apple pie",
        CIASTOCZEKOLADOWE: "chocolate cake",
        KARMELOWE: "carmel cake",
        TORT: "rainbow cake",
        MINT: "mint cupcakes",
        MERINGUE: "meringue",
        CARROT: "carrot pie",
        SERNIK: "cheesecake",
        TARTA: "flan",
        MECH: "green moss cake",
        TARTA2: "white chocolate tart",
        INFO: "In our offer you will find a great variety of traditional cakes and some more sophisticated cakes and biscuits as well as cakes in FIT version. Presented pastries are our constant offer of products. Produced according to our own recipes, based on the highest quality ingredients.",
        INFO2: "Breakfasts are served all day. In our offer you will find pancakes, waffles, oatmeal and toast. The presented breakfasts are our constant offer. Produced according to our own recipes, based on the highest quality ingredients.",
        ABOUTME: "Caffeteria di Magda is a cozy café located in the center of Warsaw. Cafes offer both sweet and traditional pastries and more modern pastries. Fit. We bake cakes to order. We serve delicious breakfasts and aromatic coffee. The website was created as a final project of the subject 'Programowanie w Internecie'. The author of the project is Magdalena Sidor.",
        KONTAKT: "If you have questions, something you like or something needs improvement - let me know! Choose the most convenient form of contact! Please write magda_si@wp.pl or fill out the form!",
        PLACKI: "Pancakes with fruits",
        SZAKSZUKA: "shakshouka",
        TOSTY: "toasts",
        NATOSCIE: "toasts with egg",
        GOFRY: "waffle",
        OWSIANKA: "crowdy with fruits",
        NALESNIKI: "pancakes",
        ROGAL: "croissant"
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('pl');
});

app.controller('myCntrl', ['$scope', '$translate', function($scope, $translate) {
    $scope.changeLanguage = function(key) {
        $translate.use(key);
    };
}]);