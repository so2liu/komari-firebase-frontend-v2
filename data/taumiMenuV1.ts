export interface MenuItemV1 {
    DE?: string | null;
    EN?: string | null;
    imgSrc: string | null;
    sub: {
        subname: string | null;
        id: string | number;
        price: number;
    }[];
}

export interface MenuV1 {
    normal: {
        Sushiset: Record<string, MenuItemV1>;
        Hauptspeise: Record<string, MenuItemV1>;
        Vorspeise: Record<string, MenuItemV1>;
        Sushi: Record<string, MenuItemV1>;
    };
    discount: {
        Angebote: Record<string, MenuItemV1>;
    };
    drinks?: {
        Bier: Record<string, MenuItemV1>;
    };
}

export const taumiMenuV1: MenuV1 = {
    normal: {
        Sushiset: {
            "SAKE TSUNAMI": {
                DE: "8 pcs salmon maki, 4 pcs salmon nigiri, 2 pcs salmon sashimi",
                sub: [
                    {
                        subname: null,
                        id: "SAKE TSUNAMI",
                        price: 14.9,
                    },
                ],
                imgSrc: "IMG-20200225-WA0020.jpg",
                EN: null,
            },
            "CRISPY ROCKET": {
                DE: "8 pcs salmon crunchy roll, 4 pcs nigiri",
                EN: null,
                sub: [
                    {
                        id: "CRISPY ROCKET",
                        price: 17.9,
                        subname: null,
                    },
                ],
                imgSrc: "sm3.png",
            },
            "BLAZING LOVE": {
                EN: null,
                DE: "8 pcs crispy tiger, 4 pcs nigiri",
                sub: [
                    {
                        price: 17.5,
                        id: "BLAZING LOVE",
                        subname: null,
                    },
                ],
                imgSrc: "IMG-20200225-WA0021.jpg",
            },
            "MAKI MIX": {
                EN: null,
                sub: [
                    {
                        price: 11.9,
                        subname: "maki-mix.jpg",
                        id: "MAKI MIX",
                    },
                ],
                DE: "8 pcs salmon maki, 8 pcs tuna maki, 8 pcs avocado maki",
                imgSrc: "maki-mix.jpg",
            },
            "ROBU INVASION": {
                EN: null,
                sub: [
                    {
                        id: "ROBU INVASION",
                        price: 52,
                        subname: null,
                    },
                ],
                imgSrc: "sm6.jpg",
                DE: "8 pcs taumi special roll, 8 pcs alaska inside out roll, 8pcs sake maki, 8pcs kappa maki, 8 pcs tuna tempura Seetang salat, 6 pcs nigiri",
            },
            "BLACK FOREST (Vegi) ": {
                sub: [
                    {
                        id: "BLACK FOREST (Vegi) ",
                        price: 35,
                        subname: null,
                    },
                ],
                imgSrc: null,
                EN: null,
                DE: "8 pcs crunchy Vegi, 8pcs Vegi Inside-out, 8 pcs Maki Spargel, 2pcs Avocado Nigiri, Seetang Salat",
            },
            KAMASUTRA: {
                EN: "",
                sub: [
                    {
                        id: "KAMASUTRA",
                        price: 40,
                        subname: null,
                    },
                ],
                DE: "8 psc taumi special roll, 8 pcs salmon crunchy roll, 8 pcs kappa maki, 4 pcs nigiri, Seetang Salat",
                imgSrc: "IMG-20200225-WA0007.jpg",
            },
            "Taumi Love Menu": {
                sub: [
                    {
                        subname: "Taumi Love Menu",
                        id: "Lovemenu",
                        price: 45,
                    },
                ],
                DE: "Wer noch nach einer passenden Feiern-Idee sucht, ist bei uns genau richtig! Zeig deinem Schatz wie du sie/ihn liebst mit Taumi Love Menu",
                imgSrc: "bd71bc1f-e4e5-4eb6-8cec-17b3c5960e25",
            },
            "Taumi Freestyle": {
                imgSrc: "64B79D2A-233E-44BE-A776-C36F732287D8.jpeg",
                DE: "Nach Ihren besonderen Wünschen und Kreativität unseres Sushimeister / According to your special wishes and the creativeness of our sushi masters",
                sub: [
                    {
                        id: "freestyle",
                        price: 65,
                        subname: "Freestyle",
                    },
                ],
            },
        },
        Hauptspeise: {
            "MANGURO POWER": {
                sub: [
                    {
                        id: 19,
                        price: 21,
                        subname: null,
                    },
                ],
                EN: "Japanese spice seared tuna filet raw grilled, served with roasted asparagus, wildflower bloom salad, sesam rice, guacamole and salsa roja",
                imgSrc: "h-maguro-powder.jpeg",
                DE: "Thunfischfilet in japanischem Gewürz kurz gegrillt, serviert mit gebraten Spargel, Wildblüten Salat, Guacamole, Salsa Roja und Sesamreis",
            },
            "MANGO ENTE": {
                imgSrc: "h-mango-ente.jpeg",
                DE: "Gegrillte Entenbrust mit Mango Créme verfeinert mit Kokosmilch, serviert mit Rucola Salat, Reis, Salsa Roja und gerösteten Cashew Kernen",
                sub: [
                    {
                        price: 17.5,
                        id: 16,
                        subname: null,
                    },
                ],
                EN: "Grilled duck breast with mango creme with coconut milk, served with rucola salad, rice and roasted cashew nuts",
            },
            "HAPPY CHILD2": {
                imgSrc: "h-happy-child-2.jpeg",
                DE: "Hausgemachte gebratene Hühnerspieße serviert mit Süßkartoffel Pommes und Japanischer Mayonnaise",
                sub: [
                    {
                        price: 8.5,
                        id: "Happy2",
                        subname: null,
                    },
                ],
                EN: "Homemade fried chicken skewers with sweet potatoes fries and Japanese mayonnaise",
            },
            PHO: {
                imgSrc: "v-pho-bo.jpeg",
                EN: "A traditional Vietnamese soup, severed in a large bowl consisting of a strong, clear broth, thin rice noodles and thinly sliced beef, tender chicken or tofu served with spring onions, coriander, soy sprouts and chili.",
                DE: "Eine traditionelle Suppe der vietnamesischen Küche. Sie wird in einer Schüssel gereicht und enthält neben einer kräftigen klaren Brühe, Reisbandnudeln und wird traditionellerweise mit feinen Scheiben Rindfleisch, zartem Hähnchenfleisch oder würzigem Tofu, serviert mit Lauchringe, Koriander, Sojasprossen und Chili.",
                sub: [
                    {
                        id: "12a-H",
                        price: 9.5,
                        subname: "Tofu",
                    },
                    {
                        id: "12b-H",
                        price: 10.5,
                        subname: "Hähnchenfleisch",
                    },
                    {
                        subname: "Rindfleisch",
                        price: 12.9,
                        id: "12c-H",
                    },
                ],
            },
            "SWEET SALMON": {
                sub: [
                    {
                        id: 20,
                        price: 18,
                        subname: null,
                    },
                ],
                DE: "Gegrilltes Lachsfilet mit grünem Spargel (oder Gemüse der Saison) gebraten in Soja Balsamico Dressing, serviert mit frischem Salat, Sesamreis, Guacamole und Salsa Roja",
                imgSrc: "h-sweet-salmon.jpeg",
                EN: "Grilled salmon filet with green asparagus (or seasonal vegatables) in soja balsamico dressing, served with fresh salad, sesame rice, guacamole and salsa roja",
            },
            "DRY-AGED PREMIUM STEAK": {
                DE: "250g gegrilltes Entrecôte, serviert mit Shiitake gebraten in Miso Soße, saisonalem Salat, Süßkartoffel-Pommes, Guacamole und frischen Tomaten",
                EN: "250g grilled Entrecôte, served with roasted Shiitake in Miso sauce, seasonal salad, sweet potato fries, guacamole and fresh tomatoes",
                sub: [
                    {
                        id: 23,
                        subname: null,
                        price: 25.5,
                    },
                ],
                imgSrc: "h-dry-aged-steak.jpeg",
            },
            "GREEN GARDEN": {
                sub: [
                    {
                        subname: null,
                        id: 24,
                        price: 12.5,
                    },
                ],
                imgSrc: "h-green-garden.jpeg",
                EN: "The best combination of asian vegetables roasted with Roja Balsamico Sauce, garnished with Rucola Salat, served with Salsa Roja and sesame rice",
                DE: "Bestes Gemüse asiatischer Herkunft, gebraten und verfeinert mit Roja Balsamico Soße, garniert mit Rucola Salat abgeschmeckt mit Salsa Roja, serviert mit Sesamreis",
            },
            "TAUMI ROYAL": {
                sub: [
                    {
                        subname: "Hähnchen",
                        price: 13.5,
                        id: "17H",
                    },
                    {
                        subname: "Großen Garnelen",
                        price: 16,
                        id: "17G",
                    },
                ],
                imgSrc: null,
                EN: "Tiger prawns deep in Taumi homemade Balsamico-Sauce with sugar peas, courgette und paprika, served with sprout-herb salad, salsa-roja, roasted peanuts and sesame rice. ",
                DE: "Gegrillte Großgarnelen oder Hähnchen gebraten in der TAUMI homemade Balsamico Soße mit Zuckererbsen, Zucchini und Paprika, serviert mit Sprossen-Wildkräuter Salat mit Salsa Roja, gerösteten Erdnüssen und Sesamreis. ",
            },
            CURRY: {
                EN: "Taumi homemade Curry-Sauce with pumpkin, paprika, zuchhini und carrots served with sprout-herb salad, salsa roja, roasted peanut, sesame rice.",
                sub: [
                    {
                        id: "15H",
                        subname: "Hähnchen",
                        price: 13.5,
                    },
                    {
                        price: 15.5,
                        subname: "Gegrilltes Rinderfleisch",
                        id: "15R",
                    },
                    {
                        id: "15G",
                        price: 16,
                        subname: "Garnelen",
                    },
                    {
                        id: "15E",
                        subname: "Ente",
                        price: 17.5,
                    },
                ],
                imgSrc: "h-curry-garnelen.jpeg",
                DE: "TAUMI homemade Curry-Soße mit Hokaido Kurbis, Paprika, Zucchini, Karroten, serviert mit SprossenWildkräuter Salat und Salsa Roja, gerösteten Erdnüssen und Sesamreis. ",
            },
            "UDON IN SCHWARZWALD": {
                EN: "Japanese Udon noodles fried with tofu, paprika, zuchhini und carrots in homemade Roja-Balsamico Sauce, flavored with salsa roja, fresh sproutflower salad, onions and sesame",
                DE: "Japanische Udon Nudeln gebraten mit Tofu, Paprika, Zucchini und Karroten in hausgemachter Roja-Balsamico Soße, aromatisiert mit Salsa Roja, Zwiebeln, Wildblütensalat und Sesam.",
                imgSrc: "h-udon.jpeg",
                sub: [
                    {
                        id: 26,
                        price: 12.5,
                        subname: null,
                    },
                ],
            },
            "SURF AND TURF": {
                imgSrc: "h-suf-tuf.jpeg",
                EN: "150g medium grilled Brazilian beef steak and grilled tiger prawns, served with green asparagus, sugar pea and shiitake cooked in Taumi homemade miso sauce, backed sweet potato, sprout-herb salad, salsa roja and sesame rice",
                sub: [
                    {
                        id: 22,
                        price: 22.5,
                        subname: null,
                    },
                ],
                DE: "150g medium gegrilltes brasilianisches Rinderfilet und gegrillte Großgarnelen serviert mit gebratenen grünem Spargel, Zuckererbsen und Shiitake in Miso-Soße, verfeinert mit Wildkräuter Salat, gedämpften Süßkartoffeln, hausgemachtem Salsa Roja, Guacamole und Sesamreis",
            },
            "BEST OCEAN": {
                EN: "Raw salmon, tuna, scallops, cooked shrimp, ebi tempura served with sushi rice, wildflower salad, guacamole, salsa roja, ginger, wasabi, sesame dressing, unagi sauce and sesame.",
                sub: [
                    {
                        price: 18,
                        subname: null,
                        id: 18,
                    },
                ],
                DE: "Frischer roher Lachs, Thunfisch, Kammmuscheln,gekochte Garnelen, Ebi Tempura auf Sushireis, verfeinert mit einem Wildblüten Rucola Salat,Guacamole, Salsa Roja, Ingwer, Wasabi, Sesam Dressing, Unagi Soße und Sesam.",
                imgSrc: "h-best-ocean.jpeg",
            },
            "HAPPY CHILD 1": {
                sub: [
                    {
                        id: "Happy1",
                        price: 8.5,
                        subname: null,
                    },
                ],
                EN: "Grilled shrimps served with sweet potatoes fries, Japanese mayonnaise und sweet sour sauce",
                imgSrc: "h-happy-child-1.jpeg",
                DE: "Tempura Garnelen ( 2 Stk. ) serviert mit Süßkartoffel Pommes, süß-sauer Soße und Japanischer Mayonnaise",
            },
            "KUH AUF DER WEIDE": {
                imgSrc: "h-kuh-auf-der-weide.jpeg",
                sub: [
                    {
                        price: 22.5,
                        id: 21,
                        subname: null,
                    },
                ],
                DE: "220g brasilianisches Rinderfilet medium gegrillt, serviert mit gebratenem Babymais, Karotten, Shangahi Pak Choi, Shitake in Miso Soße, Wildkräuter Salat, Süßkartoffelpommes, hausgemachtem Salsa Roja und Guacamole.",
                EN: "220g brazilian beef filet medium grilled, served with fried Babycorn, Karotte, Shanggai Pak Choi in miso sauce, homemade salsa roja, guacamole, sprout-herb salad and sweet fries",
            },
            "TOFU CURRY": {
                imgSrc: "h-curry-tofu.jpeg",
                EN: "Creamy coconut curry with homemade  tofu, Hokaido pumpkin, served with sprout-herb salad, salsa roja, sesam rice and roasted peanut",
                sub: [
                    {
                        subname: null,
                        price: 12.5,
                        id: 25,
                    },
                ],
                DE: "Cremiges Kokos-Curry mit hausgemachten Tofu und Hokaido Kurbis, verfeinert mit Wildkräuter Salat und Salsa Roja auf Sesamreis und gerösteten Erdnüssen.",
            },
        },
        Vorspeise: {
            "CREW LOVE TAPAS": {
                DE: "Verschiedene kleine Vorspeisen aus unseren Vorspeisen Menü: Edamame, Dumplings, Springrolls, Summerrolls",
                EN: "Different little appetizers from our starter menu: baby soy beans with sea salt, dumplings, springrolls, summerrolls",
                imgSrc: "v-tapas-3.jpeg",
                sub: [
                    {
                        price: 13.5,
                        id: "10a",
                        subname: "2 Personen",
                    },
                    {
                        subname: "3 Personen",
                        id: "10b",
                        price: 18,
                    },
                ],
            },
            "PRAWNS IN SILK": {
                sub: [
                    {
                        id: 7,
                        subname: null,
                        price: 5,
                    },
                ],
                imgSrc: "v-prawn-in-silk.jpeg",
                DE: "Teigtaschen aus Reismehl gefüllt mit gehackten Garnelen und Gemüse",
                EN: "Dumplings made from rice flour filled with minced shrimp and vegetables",
            },
            "FUSION SALAT": {
                DE: "Wildkräutersalat mit Rucola, Cherrytomaten, frische Mango, Gurken, serviert mit Salsa-Roja, gerösteten Erdnüssem und Shiso Kresse. ",
                imgSrc: "h-salat-jakob.jpeg",
                EN: "Mixed salat with Rucola, cherry tomatoes, fresh mango, cucumber, shiso cresse served with roasted peanut, Salsa-Roja and Shiso cresse. ",
                sub: [
                    {
                        subname: "Würziger gegrillter Hühnerbrust",
                        id: "13H",
                        price: 11.5,
                    },
                    {
                        price: 13,
                        subname: "Gegrillten Lachs",
                        id: "13L",
                    },
                    {
                        price: 15.5,
                        subname: "Gegrillten Kammmuscheln",
                        id: "13M",
                    },
                ],
            },
            "SüßKARTOFFEL POMMES": {
                sub: [
                    {
                        price: 5,
                        id: 11,
                        subname: null,
                    },
                ],
                DE: "Süßkartoffel Pommes serviert mit Japanischer Mayonnaise",
                EN: "Sweet potato fries served with Japanese mayonnaise",
                imgSrc: "Pommes.jpeg",
            },
            "Almost nude": {
                sub: [
                    {
                        subname: "Tofu / Tofu",
                        price: 4.9,
                        id: "2T",
                    },
                    {
                        id: "2H",
                        subname: "Hühnerfleisch / Chicken",
                        price: 5.5,
                    },
                    {
                        price: 6,
                        id: "2G",
                        subname: "Tempura Garnelen / Tempura prawns",
                    },
                ],
                EN: "Vietnamese summer rolls filled with salad, cucumber, rice noodles, roasted peanuts, served with a light homemade limevinaigrette or soya sauce",
                imgSrc: "v-sommer-rolle.jpeg",
                DE: "Vietnamesiche Sommerrollen gefüllt mit Salat, Gurken, Reisnudeln, gerösteten Erdnüssen, serviert mit leichter hausgemachter Limetten-Vinaigrette oder Sojasoße",
            },
            "BUN (südvietnamesische Stil)": {
                imgSrc: "h-bun-all.jpeg",
                EN: "Warm rice-nudeln served with sprout-herb salad, coriander and chili – ginger – lime – vinaigrette served with roasted peanut and sesame. ",
                DE: "Reisnudeln serviert mit Wildkräutersalat, Koriander und Chili-Ingwer-LimettenVinaigrette verfeinert mit gerösteten Erdnüssen.",
                sub: [
                    {
                        price: 12.5,
                        subname: "Gegrillter Hühnerbrust",
                        id: "14H",
                    },
                    {
                        id: "14F",
                        subname: "Vietnamesischer Frühlingsrolllen",
                        price: 11.5,
                    },
                    {
                        id: "14R",
                        price: 14.5,
                        subname: "Gegrilltes Rinderfleisch",
                    },
                ],
            },
            "SEAWEED SALAT": {
                imgSrc: "seaweed-salad.jpg",
                sub: [
                    {
                        price: 7.5,
                        subname: null,
                        id: 9,
                    },
                ],
                DE: "Seetang Salat mit Gurke, serviert mit Sesamdressing und Sesam",
                EN: "Seaweed salad with cucumber, served with sesame dressing and sesame",
            },
            PHO: {
                sub: [
                    {
                        price: 6.9,
                        id: "12a-V",
                        subname: "Tofu",
                    },
                    {
                        subname: "Hähnchenfleisch",
                        id: "12b-V",
                        price: 6.9,
                    },
                    {
                        price: 7.9,
                        id: "12c-V",
                        subname: "Rindfleisch",
                    },
                ],
                DE: "Eine traditionelle Suppe der vietnamesischen Küche. Sie wird in einer Schüssel gereicht und enthält neben einer kräftigen klaren Brühe, Reisbandnudeln und wird traditionellerweise mit feinen Scheiben Rindfleisch, zartem Hähnchenfleisch oder würzigem Tofu, serviert mit Lauchringe, Koriander, Sojasprossen und Chili.",
                imgSrc: "v-pho-ga.jpeg",
                EN: "A traditional Vietnamese soup, severed in a large bowl consisting of a strong, clear broth, thin rice noodles and thinly sliced beef, tender chicken or tofu served with spring onions, coriander, soy sprouts and chili.",
            },
            "SMOKY SATE": {
                DE: "Gebratene Hühnerspieße mit Erdnuss Soße",
                imgSrc: "v-sate.jpeg",
                sub: [
                    {
                        price: 6,
                        subname: null,
                        id: 6,
                    },
                ],
                EN: "Fried chicken skewers with peanut sauce",
            },
            Springrolls: {
                DE: "Vietnamesische knusprige Frühlingsrollen gefüllt mit Garnelen und Gemüse, serviert mit Süss-Sauer-Dip",
                imgSrc: "v-fruehling-rolle.jpeg",
                EN: "Vietnamese crispy springrolls filled with prawns and vegetables, served with a lime-chili dip",
                sub: [
                    {
                        subname: null,
                        id: 3,
                        price: 6,
                    },
                ],
            },
            "GOLDEN MANGO SALAT": {
                DE: "Gegrillte Garnelen, frische Mango, Gurke und Salat gemischt in Süß-Sauer Soße, serviert mit Cherrytomaten.",
                sub: [
                    {
                        id: 8,
                        subname: null,
                        price: 8.5,
                    },
                ],
                imgSrc: "v-mango-salat.jpeg",
                EN: "Grilled Shrimp, fresh mango, cucumber, Salat mixed in sweet-sour sauce, served with cherry tomato",
            },
            "Catch the fish": {
                imgSrc: "v-catch-the-fish.jpeg",
                EN: "Soup with salmon, tiger prawns, green mussels, cherry tomatoes, Tom-yum paste, mushrooms, spring onions and dill",
                sub: [
                    {
                        price: 7.5,
                        id: 1,
                        subname: null,
                    },
                ],
                DE: "Suppe mit Lachs, Großgarnelen, Grüne Muscheln, Cherry Tomaten, Tom-yum Paste, Champignons Lauchzwiebeln und Dill",
            },
            EDAMAME: {
                imgSrc: "v-edamame.jpeg",
                EN: "Baby green soy beans served with sea salt",
                sub: [
                    {
                        id: 4,
                        subname: null,
                        price: 5.5,
                    },
                ],
                DE: "Baby grüne Sojabohnen serviert mit Meersalz",
            },
            TARTARE: {
                imgSrc: "v-tatar2.jpeg",
                DE: "Thunfisch Tartare mit Avocado, Lauchzwiebeln mit scharfer Sauce und Seetangsalat serviert mit vietnamesischem Banh Da",
                EN: "Tuna tartare with avocado, spring onions with spicy sauce and seaweed salad, served with Vietnamese Banh Da",
                sub: [
                    {
                        price: 7.5,
                        id: 5,
                        subname: null,
                    },
                ],
            },
        },
        Sushi: {
            "INSIDE OUT ROLLS (8 stk)": {
                sub: [
                    {
                        id: "U21",
                        price: 9.9,
                        subname: "ALASKA - lachs, avocado, tobiko (kaviar)",
                    },
                    {
                        subname:
                            "BLUEFIN MAGURO - Bluefin Thunfisch, Avocado und Tobiko verfeinert mit Unagi Soße und japanischer Mayonnaise",
                        id: "U22",
                        price: 10.5,
                    },
                    {
                        subname:
                            "EBI TEMPURA - gebackene garnelen, avocado, sesam",
                        price: 10.5,
                        id: "U23",
                    },
                    {
                        price: 9.9,
                        subname:
                            "CALIFORNIA - surimi, avocado, tobiko (kaviar)",
                        id: "U24",
                    },
                    {
                        subname: "ANAGO - salzwasseraal, gurke, sesam",
                        id: "U25",
                        price: 10.5,
                    },
                    {
                        id: "U26",
                        price: 10.5,
                        subname:
                            "HOTATEGAI - jakobsmuscheln, avocado, tobiko (kaviar)",
                    },
                    {
                        subname:
                            "SALMONSKIN  - gegrillte lachshaut, gurke, sesam",
                        price: 9.2,
                        id: "U7",
                    },
                    {
                        id: "U8",
                        price: 9.5,
                        subname:
                            "VEGGIE KAPPA - tempura-avocado und gurke, ummantelt mit mango und reispapier",
                    },
                    {
                        id: "U29",
                        subname:
                            "TAUMIs TOFU - Hausgemachter Tempura Tofu und Avocado ummantelt mit Mango, Sesam und Unagi Soße ",
                        price: 9.5,
                    },
                ],
                imgSrc: "7FF55BA3-3CC8-49AA-BB0D-76F5D365BFC4.jpeg",
                EN: null,
                DE: null,
            },
            "MAKI (8 stk)": {
                sub: [
                    {
                        subname: "Avocado - Avocado",
                        price: 4.9,
                        id: "M11",
                    },
                    {
                        price: 5.2,
                        subname: "Sake - Lachs",
                        id: "M14",
                    },
                    {
                        subname: "Kappa - Gurke",
                        price: 4.2,
                        id: "M12",
                    },
                    {
                        price: 4.9,
                        subname: "Spargel - Spargel",
                        id: "M13",
                    },
                    {
                        id: "M15",
                        subname: "Bluefin Tekka - Bluefin Thunfisch",
                        price: 5.5,
                    },
                    {
                        subname:
                            "Anago - Gerillter Salzwasseraal/Salty sea eel grilled",
                        price: 5.9,
                        id: "M17",
                    },
                    {
                        subname: "Ebi - Gekochte Garnelen",
                        id: "M16",
                        price: 5.5,
                    },
                    {
                        price: 5.9,
                        subname:
                            "Tempura Garnelen - Frittierte Garnelen / Fried prawns",
                        id: "M18",
                    },
                    {
                        subname:
                            "Salmon Skin - Frittierte Lachshaut / Fried salmon skin",
                        price: 4.3,
                        id: "M19",
                    },
                    {
                        id: "M20",
                        price: 4.9,
                        subname: "TAUMIs TOFU ",
                    },
                    {
                        price: 4.9,
                        id: "M21",
                        subname: "KANI - Surimi ",
                    },
                ],
                imgSrc: "maki.jpg",
                DE: null,
                EN: null,
            },
            "Taumi Special homemade roll (8 stk)": {
                EN: null,
                DE: null,
                sub: [
                    {
                        price: 13.9,
                        id: "H41",
                        subname:
                            "CRISPY TIGER - garnelen im tempuramantel, mango, avocado, bedeckt mit flambierten lachs / philadelphia-frischkäse nach wunsch",
                    },
                    {
                        subname:
                            "SIZZLING TEMPTATION - avocado tempura, gurke im lachsmantel / philadelphia-frischkäse nach wunsch",
                        id: "H42",
                        price: 13.9,
                    },
                    {
                        subname:
                            "MAMA EBI - gegrillte lachshaut, mango, avocado umwickelt mit großgarnelen und reispapier/philadelphia(nach wunsch)",
                        price: 13.9,
                        id: "H43",
                    },
                    {
                        subname:
                            "BLAZING TUNA - surimi, mango ummantelt mit feuerthunfisch / philadelphia-frischkäse nach wunsch",
                        price: 14.9,
                        id: "H44",
                    },
                    {
                        subname:
                            "FUTO MAKI - 5stk gefüllt mit lachs, thunfisch, mango, avocado, gurken",
                        id: "H45",
                        price: 11.5,
                    },
                    {
                        subname:
                            "SPIDER ROLL - 6stk inside out, softshell crab, avocado, frühlingszwiebeln, gurke, chili-mayo soße",
                        id: "H46",
                        price: 15.5,
                    },
                ],
                imgSrc: "IMG-20200225-WA0013.jpg",
            },
            Sashimi: {
                imgSrc: "sashimi.jpg",
                sub: [
                    {
                        subname:
                            "SALMON - 6 stk lachs auf seetangsalat, avocado, daikon salat",
                        price: 11.5,
                        id: "S31",
                    },
                    {
                        price: 15.5,
                        subname:
                            "BLUEFIN TUNA - 6 stk Bluefin Thunfisch auf seetangsalat, avocado, daikon salat",
                        id: "S32",
                    },
                    {
                        id: "S33",
                        price: 15.2,
                        subname:
                            "ABURI SASHIMI - 3 stk flambierter lachs und 3 stk thunfisch, auf seetangsalat, avocado",
                    },
                    {
                        id: "S34",
                        subname:
                            "BLUEFIN TORO - 6 Scheiben Toro Bluefin Thunfisch auf Seetangsalat und Avocado / 6 slices of toro salmon on seaweed salad and avocado",
                        price: 17.5,
                    },
                ],
                DE: null,
                EN: null,
            },
            "NIGIRI (2 stk)": {
                EN: null,
                sub: [
                    {
                        subname: "Avocado - Avocado",
                        price: 4.5,
                        id: "N1",
                    },
                    {
                        id: "N2",
                        subname: "Sake - Lachs",
                        price: 4.9,
                    },
                    {
                        id: "N3",
                        subname: "Maguro - Thunfisch / Tuna",
                        price: 5.5,
                    },
                    {
                        id: "N4",
                        price: 5.5,
                        subname: "Ebi - Eingelegte Garnelen / Pickled prauns",
                    },
                    {
                        id: "N5",
                        subname: "Kani - Surimi",
                        price: 4,
                    },
                    {
                        id: "N6",
                        subname:
                            "Anago - Gegrillter Salzwasseraal / Grilled salty sea eel",
                        price: 5.9,
                    },
                    {
                        subname: "Ikura - Lachskaviar / Salmon row",
                        id: "N7",
                        price: 6.5,
                    },
                    {
                        subname:
                            "Aburi Gai - Flambierte Jakobsmuscheln / Scallops flambeed",
                        price: 6.5,
                        id: "N8",
                    },
                    {
                        id: "N9",
                        subname:
                            "Rinderfilet - Rinderfilet flambiert / Beef filet flambeed",
                        price: 6.5,
                    },
                    {
                        id: "N10",
                        subname: "BLUEFIN TUNA TORO - Bluefin Thunfischbauch",
                        price: 7.9,
                    },
                    {
                        subname: "TAUMIs TOFU - Hausgemacht Tofu ",
                        id: "N11",
                        price: 4.5,
                    },
                ],
                DE: null,
                imgSrc: "nigiri.jpeg",
            },
            "Tempura (8 stk)": {
                imgSrc: "3FE1FE86-D4B2-4141-8CF9-3D1A98B29C68.jpeg",
                DE: "die rundum frittierte sushi rolle wird mit guacamole und homemade dressing serviert",
                EN: "crunchy rolls are served with guacamoleand homemade dressing",
                sub: [
                    {
                        subname:
                            "Crunchy - avocado, gurke, spargel m/o philadelphia-frischkäse nach wunsch",
                        price: 12.9,
                        id: "T51",
                    },
                    {
                        subname:
                            "BluefinTunacado - thunfisch, avocado m/o philadelphia-frischkäse nach wunsch",
                        id: "T52",
                        price: 15.5,
                    },
                    {
                        subname:
                            "Aburi Salmon - lachs, avocado m/o philadelphia-frischkäse nach wunsch",
                        price: 13.9,
                        id: "T53",
                    },
                    {
                        price: 14.5,
                        subname:
                            "Hotagai Tempura - jakobsmuscheln, avocado m/o philadelphia-frischkäse nach wunsch",
                        id: "T54",
                    },
                    {
                        subname:
                            "Ebi crunchy - garnele, gurken m/o philadelphia-frischkäse nach wunsch",
                        price: 13.9,
                        id: "T55",
                    },
                    {
                        subname:
                            "Crunchy Tofu - Avocado, Gurke, hausgemachter Tofu, Seetangsalat, Philadelphia Frischkäse und Nori",
                        price: 13.9,
                        id: "T56",
                    },
                ],
            },
        },
    },
    discount: {
        Angebote: {},
    },
};
