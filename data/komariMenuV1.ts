import { MenuV1 } from "./taumiMenuV1";

export const komariMenuV1: MenuV1 = {
    drinks: {
        // "Cola/Cola light/Fanta/Sprite": {
        //     imgSrc: "drinks.jpeg",
        //     sub: [
        //         {
        //             id: "Cola 1L",
        //             subname: "Cola 1L",
        //             price: 4.5,
        //         },
        //         {
        //             id: "Light 1L",
        //             subname: "Cola Light 1L",
        //             price: 4.5,
        //         },
        //         {
        //             price: 4.5,
        //             subname: "Fanta 1L",
        //             id: "Fanta 1L",
        //         },
        //         {
        //             subname: "Sprite 1L",
        //             price: 4.5,
        //             id: "Sprite 1L",
        //         },
        //     ],
        //     DE: "",
        // },
        Bier: {
            Hefeweizen: {
                sub: [
                    {
                        price: 3.8,
                        id: "0.5L",
                        subname: "0.5L",
                    },
                    {
                        id: "Alkoholfrei 0.5L",
                        price: 3.8,
                        subname: "Alkoholfrei 0.5L",
                    },
                ],
                DE: "",
                imgSrc: "drinks.jpeg",
            },
            "Tiger Beer": {
                sub: [
                    {
                        subname: "0.33L",
                        id: "0.33L",
                        price: 2,
                    },
                ],
                imgSrc: "drinks.jpeg",
                DE: "",
            },
        },
        // "Schweppes Drinks": {
        //     sub: [
        //         {
        //             subname: "Ginger Ale 0.2L",
        //             price: 2,
        //             id: "Ginger Ale 0.2L",
        //         },
        //         {
        //             subname: "Tonic Water 0.2L",
        //             price: 2,
        //             id: "Tonic Water 0.2L",
        //         },
        //         {
        //             subname: "Russian Wildberry 0.2L",
        //             price: 2,
        //             id: "Russian Wildberry 0.2L",
        //         },
        //     ],
        //     imgSrc: "drinks.jpeg",
        //     DE: "",
        // },
    },
    discount: {
        Angebote: {
            TEMPURA: {
                EN: null,
                DE: "6stk tempura roll mit thunfisch, gurke, 8stk avocado maki",
                imgSrc: null,
                sub: [
                    {
                        id: "S2",
                        subname: null,
                        price: 9.9,
                    },
                ],
            },
            VEGIE: {
                EN: null,
                imgSrc: null,
                sub: [
                    {
                        price: 8.9,
                        id: "M1",
                        subname: null,
                    },
                ],
                DE: "gebratene verschiedene seasonal gemüse, butter-soja sauce, salat und reis",
            },
            ENTE: {
                DE: "knusprige enteburst mit gebratenen karotten, zucchini, paprika, brocolli in hoisin sauce, salat und reis",
                imgSrc: null,
                EN: null,
                sub: [
                    {
                        subname: null,
                        price: 10.9,
                        id: "M3",
                    },
                ],
            },
            RINDER: {
                DE: "gebratene rindfleisch, soja sauce mit karotten, zucchini, paprika, brocolli, salat und reis",
                imgSrc: null,
                EN: null,
                sub: [
                    {
                        subname: null,
                        id: "M5",
                        price: 10.9,
                    },
                ],
            },
            "VEGIE SPECIAL": {
                EN: null,
                imgSrc: null,
                sub: [
                    {
                        id: "S3",
                        price: 8.5,
                        subname: null,
                    },
                ],
                DE: "6stk tempura roll mit spargel, gurke, avocado, mango, 8 stk tamago maki",
            },
            "INSIDE OUT": {
                DE: "8stk inside out roll mit ebi tempura, avocado, 8 stk gurke maki",
                EN: null,
                sub: [
                    {
                        price: 8.9,
                        subname: null,
                        id: "S1",
                    },
                ],
                imgSrc: null,
            },
            "KOMARI SET": {
                sub: [
                    {
                        price: 13.9,
                        id: "S4",
                        subname: null,
                    },
                ],
                EN: null,
                imgSrc: null,
                DE: "4stk inside out thunfisch, avocado, 6 stk tempura roll mit ebi, gurke, 4 stk avocado maki, 2 stk tamago nigiri",
            },
            "LACHS FUSION": {
                imgSrc: null,
                DE: "gebratene lachs, verschiedene gemüse mit curry sauce, salat, reis",
                sub: [
                    {
                        subname: null,
                        id: "M4",
                        price: 10.9,
                    },
                ],
                EN: null,
            },
            "CHICKEN WOK": {
                DE: "gebratene hühnchenbrust, zucchini ,karotten , paprika, brocolli, gaipad sauce, salat und reis",
                EN: null,
                sub: [
                    {
                        id: "M2",
                        price: 9.9,
                        subname: null,
                    },
                ],
                imgSrc: null,
            },
        },
    },
    normal: {
        Vorspeise: {
            SOMMERROLLE: {
                DE: "Vietnamesiche Sommerrollen gefüllt mit Salat, Gurken, Reisnudeln, gerösteten Erdnüssen, serviert mit leichter hausgemachter Limetten-Vinaigrette oder Sojasoße",
                sub: [
                    {
                        price: 5,
                        subname: "Tofu",
                        id: "2T",
                    },
                    {
                        id: "2H",
                        subname: "Hühnerfleisch",
                        price: 5.5,
                    },
                    {
                        subname: "Tempura Garnelen",
                        id: "2G",
                        price: 6,
                    },
                ],
                EN: "Vietnamese summer rolls filled with salad, cucumber, rice noodles, roasted peanuts, served with a light homemade limevinaigrette or soya sauce",
                imgSrc: "sommerroll.jpg",
            },
            "FUSION KOMARI SALAD": {
                sub: [
                    {
                        subname: null,
                        price: 13,
                        id: "19",
                    },
                ],
                DE: "salat, mango, gurke, paprika, mayonnaise, kurz gegrilleten lachs",
                EN: null,
                imgSrc: null,
            },
            "PRAWNS IN SILK": {
                DE: "Teigtaschen aus Reismehl gefüllt mit gehackten Garnelen und Gemüse",
                EN: "Dumplings made from rice flour filled with minced shrimp and vegetables",
                sub: [
                    {
                        id: 10,
                        subname: null,
                        price: 5,
                    },
                ],
                imgSrc: "v-prawn-in-silk.jpeg",
            },
            GYOZA: {
                EN: null,
                sub: [
                    {
                        subname: null,
                        id: 11,
                        price: 5,
                    },
                ],
                DE: "Frittiertes hähnchen gemüse teigtaschen, serviert ponzu soße",
                imgSrc: null,
            },
            SPRINGSROLLE: {
                sub: [
                    {
                        subname: null,
                        price: 6,
                        id: 3,
                    },
                ],
                EN: "Vietnamese crispy springrolls filled with prawns and vegetables, served with a lime-chili dip",
                DE: "Vietnamesische knusprige Frühlingsrollen gefüllt mit Garnelen und Gemüse, serviert mit Süss-Sauer-Dip",
                imgSrc: "v-fruehling-rolle.jpeg",
            },
            "FRIED MANDU - VEGGIE": {
                EN: null,
                sub: [
                    {
                        id: 39,
                        price: 5,
                        subname: null,
                    },
                ],
                DE: "Frittiertes gemüsetaschen, chili-soße",
                imgSrc: null,
            },
            "CATCH THE FISH": {
                DE: "suppe mit lachs, großgarnelen, jakobmuscheln, tomaten, champignons, lauchzwiebeln",
                imgSrc: "v-catch-the-fish.jpeg",
                EN: null,
                sub: [
                    {
                        price: 8,
                        id: 1,
                        subname: null,
                    },
                ],
            },
            EDAMAME: {
                sub: [
                    {
                        id: 4,
                        subname: null,
                        price: 5,
                    },
                ],
                EN: "Baby green soy beans served with sea salt",
                DE: "Baby grüne Sojabohnen serviert mit Meersalz",
                imgSrc: null,
            },
            "MISO SUPPE": {
                DE: "weiße misopaste, fischsud, tofu, seealgen, frühlingszwiebel",
                sub: [
                    {
                        id: "24K",
                        subname: "klein",
                        price: 3.5,
                    },
                    {
                        subname: "groß",
                        price: 5,
                        id: "24G",
                    },
                ],
                imgSrc: null,
                EN: null,
            },
            "SPICY SOY EDAMAME": {
                imgSrc: null,
                sub: [
                    {
                        subname: null,
                        id: 5,
                        price: 6,
                    },
                ],
                EN: null,
                DE: "Japanische sojabohnen, chili-soße",
            },
            "SEAWEED SALAT": {
                EN: "Seaweed salad with cucumber, served with sesame dressing and sesame",
                imgSrc: null,
                sub: [
                    {
                        subname: null,
                        id: 14,
                        price: 5,
                    },
                ],
                DE: "Seetang Salat mit Gurke, serviert mit Sesamdressing und Sesam",
            },
            "CREW LOVE TAPAS": {
                sub: [
                    {
                        subname: "2 Personen",
                        id: "10a",
                        price: 14,
                    },
                    {
                        id: "10b",
                        price: 19,
                        subname: "3 Personen",
                    },
                ],
                DE: "Verschiedene kleine Vorspeisen aus unseren Vorspeisen Menü: Edamame, Dumplings, Springrolls, Summerrolls",
                EN: "Different little appetizers from our starter menu: baby soy beans with sea salt, dumplings, springrolls, summerrolls",
                imgSrc: "v-tapas-3.jpeg",
            },
            TARTARE: {
                DE: "Thunfisch Tartare mit Avocado, Lauchzwiebeln mit scharfer Sauce und Seetangsalat serviert mit vietnamesischem Banh Da",
                sub: [
                    {
                        price: 8,
                        subname: null,
                        id: 6,
                    },
                ],
                imgSrc: "tartar.jpg",
                EN: "Tuna tartare with avocado, spring onions with spicy sauce and seaweed salad, served with Vietnamese Banh Da",
            },
        },
        Sushiset: {
            "BLAZING LOVE": {
                imgSrc: null,
                EN: null,
                DE: "8 pcs crispy tiger, 4 pcs nigiri",
                sub: [
                    {
                        price: 17,
                        id: "SM4",
                        subname: null,
                    },
                ],
            },
            "ROBU INVASION": {
                EN: null,
                DE: "8 pcs taumi special roll, 8 pcs alaska inside out roll, 8pcs sake maki, 8pcs kappa maki, 8 pcs tuna tempura Seetang salat, 6 pcs nigiri",
                sub: [
                    {
                        price: 48,
                        subname: null,
                        id: "SM6",
                    },
                ],
                imgSrc: "sm6.jpg",
            },
            "CRISPY ROCKET": {
                sub: [
                    {
                        price: 18,
                        subname: null,
                        id: "SM3",
                    },
                ],
                DE: "8 pcs salmon crunchy roll, 4 pcs nigiri",
                EN: null,
                imgSrc: "sm3.png",
            },
            "BLACK FOREST (Vegi) ": {
                DE: "8 pcs crunchy Vegi, 8pcs Vegi Inside-out, 8 pcs Maki Spargel, 2pcs Avocado Nigiri, Seetang Salat",
                sub: [
                    {
                        price: 33,
                        subname: null,
                        id: "SM7 ",
                    },
                ],
                EN: null,
                imgSrc: null,
            },
            "SAKE TSUNAMI": {
                sub: [
                    {
                        id: "SM2",
                        price: 15,
                        subname: null,
                    },
                ],
                EN: null,
                imgSrc: "IMG-20200225-WA0020.jpg",
                DE: "8 pcs salmon maki, 4 pcs salmon nigiri, 2 pcs salmon sashimi",
            },
            "MAKI MIX": {
                imgSrc: "maki-mix.jpg",
                EN: null,
                DE: "8 pcs salmon maki, 8 pcs tuna maki, 8 pcs avocado maki",
                sub: [
                    {
                        id: "SM1",
                        subname: null,
                        price: 11,
                    },
                ],
            },
            KAMASUTRA: {
                EN: "IMG-20200225-WA0029.jpg",
                imgSrc: "IMG-20200225-WA0029.jpg",
                sub: [
                    {
                        price: 39,
                        id: "SM8",
                        subname: null,
                    },
                ],
                DE: "8 psc taumi special roll, 8 pcs salmon crunchy roll, 8 pcs kappa maki, 4 pcs nigiri, Seetang Salat",
            },
            "Free Style Ab 60 Euro": {
                DE: "Nach Ihren besondere Wuenschen und Kreativitaet unseres Sushimeister. Bitte schreiben Sie den genaue Betrag in Extra Wunsch wenn Sie Ihre Kontaktinformation geben.",
                EN: "According to your special wishes and the creativeness of our sushi masters. Please write the exact amount as your wish, when you give your contact information.",
                imgSrc: null,
                sub: [
                    {
                        subname: null,
                        price: 60,
                        id: "SM10",
                    },
                ],
            },
        },
        Sushi: {
            "Tempura (8 stk.)": {
                sub: [
                    {
                        price: 12,
                        id: "T1",
                        subname:
                            "Crunchy - avocado, gurke, spargel m/o philadelphia-frischkäse nach wunsch",
                    },
                    {
                        id: "T2",
                        subname:
                            "Tunacado - thunfisch, avocado m/o philadelphia-frischkäse nach wunsch",
                        price: 14.5,
                    },
                    {
                        id: "T3",
                        price: 13.5,
                        subname:
                            "Aburi Salmon - lachs, avocado m/o philadelphia-frischkäse nach wunsch",
                    },
                    {
                        subname:
                            "Hotate-gai Tempura - jakobsmuscheln, avocado m/o philadelphia-frischkäse nach wunsch",
                        id: "T4",
                        price: 14.5,
                    },
                    {
                        subname:
                            "Ebi crunchy - garnele, gurken m/o philadelphia-frischkäse nach wunsch",
                        id: "T5",
                        price: 14,
                    },
                ],
                EN: "crunchy rolls are served with guacamoleand homemade dressing",
                DE: "die rundum frittierte sushi rolle wird mit guacamole und homemade dressing serviert",
                imgSrc: "tempura.jpg",
            },
            Sashimi: {
                sub: [
                    {
                        id: 55,
                        price: 13,
                        subname:
                            "SALMON - 6 stk lachs auf seetangsalat, avocado, daikon salat",
                    },
                    {
                        subname:
                            "TUNA - 6 stk thunfisch auf seetangsalat, avocado, daikon salat",
                        id: 56,
                        price: 15,
                    },
                    {
                        price: 16,
                        subname:
                            "ABURI - 3 stk flambierter lachs und 3 stk thunfisch, auf seetangsalat, avocado",
                        id: 57,
                    },
                ],
                EN: null,
                imgSrc: "sashimi.jpg",
                DE: null,
            },
            "INSIDE OUT ROLLS (8 stk.)": {
                DE: null,
                imgSrc: "insideout.jpg",
                EN: null,
                sub: [
                    {
                        id: "U1",
                        price: 10,
                        subname: "Alaska - lachs, avocado, tobiko (kaviar)",
                    },
                    {
                        subname: "Maguro - thunfisch, avocado, tobiko (kaviar)",
                        id: "U2",
                        price: 11,
                    },
                    {
                        id: "U3",
                        subname:
                            "Ebi Tempura - gebackene garnelen, avocado, sesam",
                        price: 11,
                    },
                    {
                        id: "U4",
                        subname:
                            "California - surimi, avocado, tobiko (kaviar)",
                        price: 9,
                    },
                    {
                        id: "U5",
                        subname: "Unagi - salzwasseraal, gurke, sesam",
                        price: 12,
                    },
                    {
                        id: "U6",
                        subname:
                            "Hotategal - jakobsmuscheln, avocado, tobiko (kaviar)",
                        price: 12,
                    },
                    {
                        subname:
                            "Salmonskin - gegrillte lachshaut, gurke, sesam",
                        id: "U7",
                        price: 10,
                    },
                    {
                        price: 9,
                        id: "U8",
                        subname:
                            "Vegie - tempura-avocado und gurke, ummantelt mit mango und reispapier",
                    },
                ],
            },
            "MAKI (8 stk.)": {
                sub: [
                    {
                        price: 4.5,
                        subname: "Avocado - Avocado",
                        id: "M1",
                    },
                    {
                        subname: "Sake - Lachs",
                        price: 5.2,
                        id: "M2",
                    },
                    {
                        subname: "Kappa - Gurke",
                        id: "M3",
                        price: 4.5,
                    },
                    {
                        subname: "Spargel - Spargel",
                        id: "M4",
                        price: 4.9,
                    },
                    {
                        subname: "Tekka - Thunfisch",
                        price: 5.5,
                        id: "M5",
                    },
                    {
                        subname: "Unagi - Gegrillter Aal",
                        id: "M6",
                        price: 6.5,
                    },
                    {
                        subname: "Ebi - Gekochte Garnelen",
                        id: "M7",
                        price: 5.5,
                    },
                    {
                        id: "M8",
                        subname: "Tempura Garnelen - Gebackene Garnelen",
                        price: 6.5,
                    },
                    {
                        subname: "Salmon Skin - Frittierte Lachshaut",
                        price: 4.9,
                        id: "M9",
                    },
                ],
                EN: null,
                imgSrc: "maki.jpg",
                DE: null,
            },
            "Special homemade roll (8 stk.)": {
                DE: null,
                EN: null,
                sub: [
                    {
                        subname:
                            "CRISPY TIGER - garnelen im tempuramantel, mango, avocado, bedeckt mit flambierten lachs / philadelphia-frischkäse nach wunsch",
                        id: "H50",
                        price: 14,
                    },
                    {
                        subname:
                            "SIZZLING TEMPTATION - avocado tempura, gurke im lachsmantel / philadelphia-frischkäse nach wunsch",
                        price: 13.5,
                        id: "H51",
                    },
                    {
                        price: 13.5,
                        subname:
                            "MAMA EBI - gegrillte lachshaut, mango, avocado umwickelt mit großgarnelen und reispapier / philadelphia(nach wunsch)",
                        id: "H52",
                    },
                    {
                        id: "H53",
                        price: 15,
                        subname:
                            "BLAZING TUNA - surimi, mango ummantelt mit feuerthunfisch / philadelphia-frischkäse nach wunsch",
                    },
                    {
                        subname:
                            "FUTO MAKI - 5stk gefüllt mit lachs, thunfisch, mango, avocado, gurken",
                        price: 11,
                        id: "H54",
                    },
                    {
                        subname:
                            "SPIDER ROLL - 6stk inside out, softshell crab, avocado, frühlingszwiebeln, gurke, chili-mayo soße",
                        id: "H55",
                        price: 15,
                    },
                ],
                imgSrc: "IMG-20200225-WA0013.jpg",
            },
            "NIGIRI (2 stk.)": {
                imgSrc: "nigiri.jpeg",
                EN: null,
                sub: [
                    {
                        id: "N1",
                        price: 4.5,
                        subname: "Avocado - Avocado",
                    },
                    {
                        price: 5.2,
                        subname: "Sake - Lachs",
                        id: "N2",
                    },
                    {
                        subname: "Kappa - Gurke",
                        price: 6.5,
                        id: "N3",
                    },
                    {
                        price: 5.5,
                        id: "N4",
                        subname: "Ebi - Gekochte Garnelen",
                    },
                    {
                        id: "N5",
                        subname: "Kani - Surimi",
                        price: 4.9,
                    },
                    {
                        id: "N6",
                        price: 7,
                        subname: "Unagi - Gegrillter Aal",
                    },
                    {
                        id: "N7",
                        subname: "Ikura - Lachskaviar",
                        price: 7,
                    },
                    {
                        subname: "Aburi hotate-gai - Flambierte Jakobsmuscheln",
                        price: 7,
                        id: "N8",
                    },
                ],
                DE: null,
            },
        },
        Hauptspeise: {
            "CHICKEN UDON": {
                EN: null,
                DE: "Gebratene udon nudeln, hähnchenbrust, braune champignons, butter- soja sauce, bonito flocken",
                sub: [
                    {
                        id: 33,
                        price: 14,
                        subname: null,
                    },
                ],
                imgSrc: null,
            },
            "RINDER IM WOK scharf": {
                EN: null,
                sub: [
                    {
                        subname: null,
                        id: "RinderImWok",
                        price: 17,
                    },
                ],
                imgSrc: null,
                DE: "rindfleisch, curry-sauce, verschiedene saisonal gemüse",
            },
            " MANGURO POWER": {
                imgSrc: "h-maguro-powder.jpeg",
                sub: [
                    {
                        price: 18,
                        id: 30,
                        subname: null,
                    },
                ],
                DE: "Thunfischfilet in japanischem Gewürz kurz gegrillt, serviert mit gebraten Spargel, Wildblüten Salat, Guacamole, Salsa Roja und Sesamreis",
                EN: "Japanese spice seared tuna filet raw grilled, served with roasted asparagus, wildflower bloom salad, sesam rice, guacamole and salsa roja",
            },
            "TOFU CURRY": {
                EN: null,
                sub: [
                    {
                        subname: null,
                        id: 40,
                        price: 11,
                    },
                ],
                DE: "Cremiges Kokos-Curry mit Tofu, Kürbis, saisonalem Gemüse, servert mit Salat sesamdressing und Reis",
                imgSrc: "h-curry-tofu.jpeg",
            },
            "TERIYAKI ENTE": {
                EN: null,
                imgSrc: null,
                sub: [
                    {
                        id: 35,
                        subname: null,
                        price: 16,
                    },
                ],
                DE: "Gegrillte weibliche entenbrust, orangen-teriyaki, gegrillte braune champions, serviert mit salat sesamdressing und reis",
            },
            "LACHS IM WOK scharf": {
                DE: "Gegrillte Lachs, gebratenen Karotten, Zucchini, Paprika, Brocolli in Homemade curry Sauce und Reis",
                EN: null,
                sub: [
                    {
                        id: "LACHS IM WOK scharm",
                        price: 17,
                        subname: null,
                    },
                ],
                imgSrc: null,
            },
            " MANGO ENTE": {
                imgSrc: "h-mango-ente.jpeg",
                EN: "Grilled duck breast with mango creme with coconut milk, served with rucola salad, rice and roasted cashew nuts",
                DE: "Gegrillte Entenbrust mit Mango Créme verfeinert mit Kokosmilch, serviert mit Rucola Salat, Reis, Salsa Roja und gerösteten Cashew Kernen",
                sub: [
                    {
                        price: 16,
                        subname: null,
                        id: 36,
                    },
                ],
            },
            "HOMEMADE CURRY": {
                EN: "Homemade Curry-Sauce with pumpkin, paprika, zuchhini und carrots served with sprout-herb salad, salsa roja, roasted peanut, sesame rice.",
                DE: "Homemade Curry-Soße mit Hokaido Kurbis, Paprika, Zucchini, Karroten, serviert mit SprossenWildkräuter Salat und Salsa Roja, gerösteten Erdnüssen und Sesamreis. ",
                sub: [
                    {
                        id: 37,
                        price: 13,
                        subname: null,
                    },
                ],
                imgSrc: "h-curry-huhn.jpeg",
            },
            "SWEET SALMON": {
                EN: "Grilled salmon filet with green asparagus (or seasonal vegatables) in soja balsamico dressing, served with fresh salad, sesame rice, guacamole and salsa roja",
                DE: "Gegrilltes Lachsfilet mit grünem Spargel (oder Gemüse der Saison) gebraten in Soja Balsamico Dressing, serviert mit frischem Salat, Sesamreis, Guacamole und Salsa Roja",
                imgSrc: "h-sweet-salmon-2.jpeg",
                sub: [
                    {
                        id: 31,
                        price: 17,
                        subname: null,
                    },
                ],
            },
            "KING PRAWN": {
                imgSrc: null,
                EN: null,
                sub: [
                    {
                        price: 25,
                        id: "38a",
                        subname: null,
                    },
                ],
                DE: "5 stk gegrillte großgarnelen, wok saisonle gemüse, reis",
            },
            "CURRY ENTE scharf": {
                sub: [
                    {
                        subname: null,
                        id: 361,
                        price: 17,
                    },
                ],
                EN: null,
                imgSrc: null,
                DE: "gegrillte weibliche entenbrust, homemade curry-soße mit hähnchen, butternut kürbis, karotten, broccoli, aubergine, paprika, zucchini. serviert mit salat sesamdressing und reis",
            },
            "KNUSPRIGE ENTE": {
                imgSrc: null,
                sub: [
                    {
                        subname: null,
                        price: 17,
                        id: "KNUSPRIGE ENTE",
                    },
                ],
                EN: null,
                DE: "gegrillte weibliche entenbrust, homemade curry-soße mit hähnchen, butternut kürbis, karotten, broccoli, aubergine, paprika, zucchini. serviert mit salat sesamdressing und reis",
            },
            "WOK VEGETABLES": {
                DE: "Gebratenes saisonales Gemüse, serviert mit Reis",
                EN: "Stir fried vegetables, rice",
                sub: [
                    {
                        subname: null,
                        price: 9,
                        id: 42,
                    },
                ],
                imgSrc: null,
            },
            UDON: {
                EN: null,
                DE: "Gebratene Udon Nudeln, Spargel, Pak Choi Sauce, braune Champignons, Butter-Sake Sauce",
                sub: [
                    {
                        id: 41,
                        price: 13,
                        subname: null,
                    },
                ],
                imgSrc: "h-udon.jpeg",
            },
            "HÄHNCHEN FUSION": {
                DE: "Gebratene Hähnchenbrust, zucchini, brokkoli, paprika, karotten",
                imgSrc: null,
                sub: [
                    {
                        price: 14,
                        id: "HÄHNCHEN FUSION",
                        subname: null,
                    },
                ],
            },
        },
    },
};
