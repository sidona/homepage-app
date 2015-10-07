/**
 * Created by sdonose on 9/28/2015.
 */
app.factory('listMovie', function () {

    var movies = [
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Frank Darabont",
                    "nameId": "nm0001104"
                }
            ],
            "filmingLocations": [
                "St. Croix",
                "U.S. Virgin Islands"
            ],
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "tt0111161",
            "languages": [
                "English"
            ],
            "metascore": "80/100",
            "originalTitle": "",
            "plot": "Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to life imprisonment for the murder of his wife and her lover. Set in the 1940s, the film shows how Andy, with the help of his friend Red, the prison entrepreneur, turns out to be a most unconventional prisoner.",
            "ranking": 35,
            "rated": "R",
            "rating": "9.3",
            "releaseDate": "19941014",
            "runtime": [
                "142 min"
            ],
            "simplePlot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "title": "The Shawshank Redemption",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0111161",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX214_AL_.jpg",
            "votes": "1,528,887",
            "writers": [
                {
                    "name": "Stephen King",
                    "nameId": "nm0000175"
                },
                {
                    "name": "Frank Darabont",
                    "nameId": "nm0001104"
                }
            ],
            "year": "1994"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Francis Ford Coppola",
                    "nameId": "nm0000338"
                }
            ],
            "filmingLocations": [
                "NY Eye and Ear Infirmary",
                "2nd Avenue & East 13th Street",
                "New York City",
                "New York",
                "USA"
            ],
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "tt0068646",
            "languages": [
                "English",
                "Italian",
                "Latin"
            ],
            "metascore": "100/100",
            "originalTitle": "",
            "plot": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.",
            "ranking": 2,
            "rated": "R",
            "rating": "9.2",
            "releaseDate": "19720324",
            "runtime": [
                "175 min"
            ],
            "simplePlot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            "title": "The Godfather",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0068646",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjEyMjcyNDI4MF5BMl5BanBnXkFtZTcwMDA5Mzg3OA@@._V1_SX214_AL_.jpg",
            "votes": "1,047,737",
            "writers": [
                {
                    "name": "Mario Puzo",
                    "nameId": "nm0701374"
                },
                {
                    "name": "Francis Ford Coppola",
                    "nameId": "nm0000338"
                }
            ],
            "year": "1972"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Francis Ford Coppola",
                    "nameId": "nm0000338"
                }
            ],
            "filmingLocations": [
                "2045 N. Hibiscus Drive",
                "North Miami",
                "Florida",
                "USA"
            ],
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "tt0071562",
            "languages": [
                "English",
                "Italian",
                "Spanish",
                "Latin",
                "Sicilian"
            ],
            "metascore": "80/100",
            "originalTitle": "",
            "plot": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
            "ranking": 3,
            "rated": "R",
            "rating": "9.1",
            "releaseDate": "19741220",
            "runtime": [
                "200 min"
            ],
            "simplePlot": "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.",
            "title": "The Godfather: Part II",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0071562",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BNDc2NTM3MzU1Nl5BMl5BanBnXkFtZTcwMTA5Mzg3OA@@._V1_SX214_AL_.jpg",
            "votes": "708,348",
            "writers": [
                {
                    "name": "Francis Ford Coppola",
                    "nameId": "nm0000338"
                },
                {
                    "name": "Mario Puzo",
                    "nameId": "nm0701374"
                }
            ],
            "year": "1974"
        },
        {
            "countries": [
                "USA",
                "UK"
            ],
            "directors": [
                {
                    "name": "Christopher Nolan",
                    "nameId": "nm0634240"
                }
            ],
            "filmingLocations": [
                "Times Square",
                "Causeway Bay",
                "Hong Kong"
            ],
            "genres": [
                "Action",
                "Crime",
                "Drama"
            ],
            "id": "tt0468569",
            "languages": [
                "English",
                "Mandarin"
            ],
            "metascore": "82/100",
            "originalTitle": "",
            "plot": "Batman raises the stakes in his war on crime. With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the city streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as The Joker.",
            "ranking": 4,
            "rated": "PG-13",
            "rating": "9.0",
            "releaseDate": "20080718",
            "runtime": [
                "152 min"
            ],
            "simplePlot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            "title": "The Dark Knight",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0468569",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY317_CR0,0,214,317_AL_.jpg",
            "votes": "1,504,326",
            "writers": [
                {
                    "name": "Jonathan Nolan",
                    "nameId": "nm0634300"
                },
                {
                    "name": "Christopher Nolan",
                    "nameId": "nm0634240"
                }
            ],
            "year": "2008"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Sidney Lumet",
                    "nameId": "nm0001486"
                }
            ],
            "filmingLocations": [
                "New York County Courthouse - 60 Centre Street",
                "New York City",
                "New York",
                "USA"
            ],
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "tt0050083",
            "languages": [
                "English"
            ],
            "metascore": "",
            "originalTitle": "",
            "plot": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and shut-case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.",
            "ranking": 5,
            "rated": "NOT RATED",
            "rating": "8.9",
            "releaseDate": "195704",
            "runtime": [
                "96 min"
            ],
            "simplePlot": "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
            "title": "12 Angry Men",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0050083",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX214_AL_.jpg",
            "votes": "394,808",
            "writers": [
                {
                    "name": "Reginald Rose",
                    "nameId": "nm0741627"
                }
            ],
            "year": "1957"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Steven Spielberg",
                    "nameId": "nm0000229"
                }
            ],
            "filmingLocations": [
                "J�zefa",
                "Krak�w",
                "Malopolskie",
                "Poland"
            ],
            "genres": [
                "Biography",
                "Drama",
                "History"
            ],
            "id": "tt0108052",
            "languages": [
                "English",
                "Hebrew",
                "German",
                "Polish"
            ],
            "metascore": "93/100",
            "originalTitle": "",
            "plot": "Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament for the good in all of us.",
            "ranking": 6,
            "rated": "R",
            "rating": "8.9",
            "releaseDate": "19940204",
            "runtime": [
                "195 min"
            ],
            "simplePlot": "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            "title": "Schindler's List",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0108052",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMzMwMTM4MDU2N15BMl5BanBnXkFtZTgwMzQ0MjMxMDE@._V1_SX214_AL_.jpg",
            "votes": "777,409",
            "writers": [
                {
                    "name": "Thomas Keneally",
                    "nameId": "nm0447745"
                },
                {
                    "name": "Steven Zaillian",
                    "nameId": "nm0001873"
                }
            ],
            "year": "1993"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Quentin Tarantino",
                    "nameId": "nm0000233"
                }
            ],
            "filmingLocations": [
                "1435 Flower Street",
                "Glendale",
                "California",
                "USA"
            ],
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "tt0110912",
            "languages": [
                "English",
                "Spanish",
                "French"
            ],
            "metascore": "94/100",
            "originalTitle": "",
            "plot": "Jules Winnfield and Vincent Vega are two hitmen who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace. Wallace has also asked Vincent to take his wife Mia out a few days later when Wallace himself will be out of town. Butch Coolidge is an aging boxer who is paid by Wallace to lose his next fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
            "ranking": 7,
            "rated": "R",
            "rating": "8.9",
            "releaseDate": "19941014",
            "runtime": [
                "154 min"
            ],
            "simplePlot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "title": "Pulp Fiction",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0110912",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX214_AL_.jpg",
            "votes": "1,191,236",
            "writers": [
                {
                    "name": "Quentin Tarantino",
                    "nameId": "nm0000233"
                },
                {
                    "name": "Roger Avary",
                    "nameId": "nm0000812"
                }
            ],
            "year": "1994"
        },
        {
            "countries": [
                "Italy",
                "Spain",
                "West Germany",
                "USA"
            ],
            "directors": [
                {
                    "name": "Sergio Leone",
                    "nameId": "nm0001466"
                }
            ],
            "filmingLocations": [
                "Almer�a",
                "Andaluc�a",
                "Spain"
            ],
            "genres": [
                "Western"
            ],
            "id": "tt0060196",
            "languages": [
                "Italian"
            ],
            "metascore": "90/100",
            "originalTitle": "Il buono, il brutto, il cattivo",
            "plot": "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie meet with Carson and knows they know the location of the gold. All he needs is for the two to ...",
            "ranking": 8,
            "rated": "NOT RATED",
            "rating": "8.9",
            "releaseDate": "19680308",
            "runtime": [
                "161 min"
            ],
            "simplePlot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
            "title": "The Good, the Bad and the Ugly",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0060196",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX214_AL_.jpg",
            "votes": "456,880",
            "writers": [
                {
                    "name": "Luciano Vincenzoni",
                    "nameId": "nm0898812"
                },
                {
                    "name": "Sergio Leone",
                    "nameId": "nm0001466"
                }
            ],
            "year": "1966"
        },
        {
            "countries": [
                "USA",
                "New Zealand"
            ],
            "directors": [
                {
                    "name": "Peter Jackson",
                    "nameId": "nm0001392"
                }
            ],
            "filmingLocations": [
                "Camperdown Studios",
                "Camperdown Road",
                "Miramar",
                "Wellington",
                "New Zealand"
            ],
            "genres": [
                "Adventure",
                "Fantasy"
            ],
            "id": "tt0167260",
            "languages": [
                "English",
                "Quenya",
                "Old English",
                "Sindarin"
            ],
            "metascore": "94/100",
            "originalTitle": "",
            "plot": "While Frodo & Sam continue to approach Mount Doom to destroy the One Ring, unaware of the path Gollum is leading them, the former Fellowship aid Rohan & Gondor in a great battle in the Pelennor Fields, Minas Tirith and the Black Gates as Sauron wages his last war against Middle-Earth.",
            "ranking": 9,
            "rated": "PG-13",
            "rating": "8.9",
            "releaseDate": "20031217",
            "runtime": [
                "201 min"
            ],
            "simplePlot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            "title": "The Lord of the Rings: The Return of the King",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0167260",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX214_AL_.jpg",
            "votes": "1,096,041",
            "writers": [
                {
                    "name": "J.R.R. Tolkien",
                    "nameId": "nm0866058"
                },
                {
                    "name": "Fran Walsh",
                    "nameId": "nm0909638"
                }
            ],
            "year": "2003"
        },
        {
            "countries": [
                "USA",
                "Germany"
            ],
            "directors": [
                {
                    "name": "David Fincher",
                    "nameId": "nm0000399"
                }
            ],
            "filmingLocations": [
                "421 W. Eighth Street",
                "Los Angeles",
                "California",
                "USA"
            ],
            "genres": [
                "Drama"
            ],
            "id": "tt0137523",
            "languages": [
                "English"
            ],
            "metascore": "66/100",
            "originalTitle": "",
            "plot": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
            "ranking": 10,
            "rated": "R",
            "rating": "8.9",
            "releaseDate": "19991015",
            "runtime": [
                "139 min"
            ],
            "simplePlot": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more...",
            "title": "Fight Club",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0137523",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_SX214_AL_.jpg",
            "votes": "1,204,220",
            "writers": [
                {
                    "name": "Chuck Palahniuk",
                    "nameId": "nm0657333"
                },
                {
                    "name": "Jim Uhls",
                    "nameId": "nm0880243"
                }
            ],
            "year": "1999"
        },
        {
            "countries": [
                "New Zealand",
                "USA"
            ],
            "directors": [
                {
                    "name": "Peter Jackson",
                    "nameId": "nm0001392"
                }
            ],
            "filmingLocations": [
                "Arrowtown Recreational Reserve",
                "Arrowtown",
                "Otago",
                "New Zealand"
            ],
            "genres": [
                "Adventure",
                "Fantasy"
            ],
            "id": "tt0120737",
            "languages": [
                "English",
                "Sindarin"
            ],
            "metascore": "92/100",
            "originalTitle": "",
            "plot": "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!",
            "ranking": 11,
            "rated": "PG-13",
            "rating": "8.8",
            "releaseDate": "20011219",
            "runtime": [
                "178 min"
            ],
            "simplePlot": "A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.",
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0120737",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SY317_CR1,0,214,317_AL_.jpg",
            "votes": "1,120,490",
            "writers": [
                {
                    "name": "J.R.R. Tolkien",
                    "nameId": "nm0866058"
                },
                {
                    "name": "Fran Walsh",
                    "nameId": "nm0909638"
                }
            ],
            "year": "2001"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Irvin Kershner",
                    "nameId": "nm0449984"
                }
            ],
            "filmingLocations": [
                "Banks",
                "Oregon",
                "USA"
            ],
            "genres": [
                "Action",
                "Adventure",
                "Fantasy",
                "Sci-Fi"
            ],
            "id": "tt0080684",
            "languages": [
                "English"
            ],
            "metascore": "79/100",
            "originalTitle": "",
            "plot": "After the Rebel base on the icy planet Hoth is taken over by the empire, Han, Leia, Chewbacca, and C-3PO flee across the galaxy from the Empire. Luke travels to the forgotten planet of Dagobah to receive training from the Jedi master Yoda, while Vader endlessly pursues him.",
            "ranking": 12,
            "rated": "PG",
            "rating": "8.8",
            "releaseDate": "19800620",
            "runtime": [
                "124 min"
            ],
            "simplePlot": "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.",
            "title": "Star Wars: Episode V - The Empire Strikes Back",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0080684",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SY317_CR0,0,214,317_AL_.jpg",
            "votes": "715,411",
            "writers": [
                {
                    "name": "Leigh Brackett",
                    "nameId": "nm0102824"
                },
                {
                    "name": "Lawrence Kasdan",
                    "nameId": "nm0001410"
                }
            ],
            "year": "1980"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Robert Zemeckis",
                    "nameId": "nm0000709"
                }
            ],
            "filmingLocations": [
                "Monument Valley",
                "Arizona",
                "USA"
            ],
            "genres": [
                "Drama",
                "Romance"
            ],
            "id": "tt0109830",
            "languages": [
                "English"
            ],
            "metascore": "82/100",
            "originalTitle": "",
            "plot": "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, create the smiley, write bumper stickers and songs, donating to people and meeting the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran. Who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone.",
            "ranking": 13,
            "rated": "PG-13",
            "rating": "8.8",
            "releaseDate": "19940706",
            "runtime": [
                "142 min"
            ],
            "simplePlot": "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
            "title": "Forrest Gump",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0109830",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTQwMTA5MzI1MF5BMl5BanBnXkFtZTcwMzY5Mzg3OA@@._V1_SX214_AL_.jpg",
            "votes": "1,105,464",
            "writers": [
                {
                    "name": "Winston Groom",
                    "nameId": "nm0343165"
                },
                {
                    "name": "Eric Roth",
                    "nameId": "nm0744839"
                }
            ],
            "year": "1994"
        },
        {
            "countries": [
                "USA",
                "UK"
            ],
            "directors": [
                {
                    "name": "Christopher Nolan",
                    "nameId": "nm0634240"
                }
            ],
            "filmingLocations": [
                "Bedfordshire",
                "England",
                "UK"
            ],
            "genres": [
                "Action",
                "Mystery",
                "Romance",
                "Sci-Fi",
                "Thriller"
            ],
            "id": "tt1375666",
            "languages": [
                "English",
                "Japanese",
                "French"
            ],
            "metascore": "74/100",
            "originalTitle": "",
            "plot": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible-inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
            "ranking": 14,
            "rated": "PG-13",
            "rating": "8.8",
            "releaseDate": "20100716",
            "runtime": [
                "148 min"
            ],
            "simplePlot": "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
            "title": "Inception",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt1375666",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX214_AL_.jpg",
            "votes": "1,302,832",
            "writers": [
                {
                    "name": "Christopher Nolan",
                    "nameId": "nm0634240"
                }
            ],
            "year": "2010"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Milos Forman",
                    "nameId": "nm0001232"
                }
            ],
            "filmingLocations": [
                "Depoe Bay",
                "Oregon",
                "USA"
            ],
            "genres": [
                "Drama"
            ],
            "id": "tt0073486",
            "languages": [
                "English"
            ],
            "metascore": "79/100",
            "originalTitle": "",
            "plot": "McMurphy has a criminal past and has once again gotten himself into trouble and is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power through the flaws of the other inmates. McMurphy and the other inmates band together to make a rebellious stance against the atrocious Nurse.",
            "ranking": 15,
            "rated": "R",
            "rating": "8.7",
            "releaseDate": "19751121",
            "runtime": [
                "133 min"
            ],
            "simplePlot": "Upon admittance to a mental institution, a brash rebel rallies the patients to take on the oppressive head nurse.",
            "title": "One Flew Over the Cuckoo's Nest",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0073486",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTk5OTA4NTc0NF5BMl5BanBnXkFtZTcwNzI5Mzg3OA@@._V1_SY317_CR12,0,214,317_AL_.jpg",
            "votes": "617,968",
            "writers": [
                {
                    "name": "Lawrence Hauben",
                    "nameId": "nm0369142"
                },
                {
                    "name": "Bo Goldman",
                    "nameId": "nm0325743"
                }
            ],
            "year": "1975"
        },
        {
            "countries": [
                "USA",
                "New Zealand"
            ],
            "directors": [
                {
                    "name": "Peter Jackson",
                    "nameId": "nm0001392"
                }
            ],
            "filmingLocations": [
                "Camperdown Studios",
                "Camperdown Road",
                "Miramar",
                "Wellington",
                "New Zealand"
            ],
            "genres": [
                "Adventure",
                "Fantasy"
            ],
            "id": "tt0167261",
            "languages": [
                "English",
                "Sindarin",
                "Old English"
            ],
            "metascore": "88/100",
            "originalTitle": "",
            "plot": "While Frodo and Sam, now accompanied by a new guide, continue their hopeless journey towards the land of shadow to destroy the One Ring, each member of the broken fellowship plays their part in the battle against the evil wizard Saruman and his armies of Isengard.",
            "ranking": 16,
            "rated": "PG-13",
            "rating": "8.7",
            "releaseDate": "20021218",
            "runtime": [
                "179 min"
            ],
            "simplePlot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            "title": "The Lord of the Rings: The Two Towers",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0167261",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SY317_CR1,0,214,317_AL_.jpg",
            "votes": "987,758",
            "writers": [
                {
                    "name": "J.R.R. Tolkien",
                    "nameId": "nm0866058"
                },
                {
                    "name": "Fran Walsh",
                    "nameId": "nm0909638"
                }
            ],
            "year": "2002"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Martin Scorsese",
                    "nameId": "nm0000217"
                }
            ],
            "filmingLocations": [
                "2409 Thirty Second Street",
                "Astoria",
                "Queens",
                "New York City",
                "New York",
                "USA"
            ],
            "genres": [
                "Biography",
                "Crime",
                "Drama"
            ],
            "id": "tt0099685",
            "languages": [
                "English",
                "Italian"
            ],
            "metascore": "89/100",
            "originalTitle": "",
            "plot": "Henry Hill is a small time gangster, who takes part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who have set their sights a bit higher. His two partners kill off everyone else involved in the robbery, and slowly start to climb up through the hierarchy of the Mob. Henry, however, is badly affected by his partners' success, but will he stoop low enough to bring about the downfall of Jimmy and Tommy?",
            "ranking": 17,
            "rated": "R",
            "rating": "8.7",
            "releaseDate": "19900921",
            "runtime": [
                "146 min"
            ],
            "simplePlot": "Henry Hill and his friends work their way up through the mob hierarchy.",
            "title": "Goodfellas",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0099685",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTY2OTE5MzQ3MV5BMl5BanBnXkFtZTgwMTY2NTYxMTE@._V1_SX214_AL_.jpg",
            "votes": "657,506",
            "writers": [
                {
                    "name": "Nicholas Pileggi",
                    "nameId": "nm0683380"
                },
                {
                    "name": "Nicholas Pileggi",
                    "nameId": "nm0683380"
                }
            ],
            "year": "1990"
        },
        {
            "countries": [
                "USA",
                "Australia"
            ],
            "directors": [
                {
                    "name": "Andy Wachowski",
                    "nameId": "nm0905152"
                },
                {
                    "name": "Lana Wachowski",
                    "nameId": "nm0905154"
                }
            ],
            "filmingLocations": [
                "AON Tower",
                "Kent Street",
                "Sydney",
                "New South Wales",
                "Australia"
            ],
            "genres": [
                "Action",
                "Sci-Fi"
            ],
            "id": "tt0133093",
            "languages": [
                "English"
            ],
            "metascore": "73/100",
            "originalTitle": "",
            "plot": "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.",
            "ranking": 18,
            "rated": "R",
            "rating": "8.7",
            "releaseDate": "19990331",
            "runtime": [
                "136 min"
            ],
            "simplePlot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            "title": "The Matrix",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0133093",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX214_AL_.jpg",
            "votes": "1,096,142",
            "writers": [
                {
                    "name": "Andy Wachowski",
                    "nameId": "nm0905152"
                },
                {
                    "name": "Lana Wachowski",
                    "nameId": "nm0905154"
                }
            ],
            "year": "1999"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "George Lucas",
                    "nameId": "nm0000184"
                }
            ],
            "filmingLocations": [
                "Tikal National Park",
                "Guatemala"
            ],
            "genres": [
                "Action",
                "Adventure",
                "Fantasy",
                "Sci-Fi"
            ],
            "id": "tt0076759",
            "languages": [
                "English"
            ],
            "metascore": "92/100",
            "originalTitle": "Star Wars",
            "plot": "A young boy from Tatooine sets out on an adventure with an old Jedi named Obi-Wan Kenobi as his mentor to save Princess Leia from the ruthless Darth Vader and Destroy the Death Star built by the Empire which has the power to destroy the entire galaxy.",
            "ranking": 19,
            "rated": "PG",
            "rating": "8.7",
            "releaseDate": "19770525",
            "runtime": [
                "121 min"
            ],
            "simplePlot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
            "title": "Star Wars: Episode IV - A New Hope",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0076759",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg",
            "votes": "785,224",
            "writers": [
                {
                    "name": "George Lucas",
                    "nameId": "nm0000184"
                }
            ],
            "year": "1977"
        },
        {
            "countries": [
                "Japan"
            ],
            "directors": [
                {
                    "name": "Akira Kurosawa",
                    "nameId": "nm0000041"
                }
            ],
            "filmingLocations": [
                "Japan"
            ],
            "genres": [
                "Drama"
            ],
            "id": "tt0047478",
            "languages": [
                "Japanese"
            ],
            "metascore": "99/100",
            "originalTitle": "Shichinin no samurai",
            "plot": "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village.",
            "ranking": 20,
            "rated": "UNRATED",
            "rating": "8.7",
            "releaseDate": "19561119",
            "runtime": [
                "207 min"
            ],
            "simplePlot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
            "title": "Seven Samurai",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0047478",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_SY317_CR6,0,214,317_AL_.jpg",
            "votes": "209,822",
            "writers": [
                {
                    "name": "Akira Kurosawa",
                    "nameId": "nm0000041"
                },
                {
                    "name": "Shinobu Hashimoto",
                    "nameId": "nm0368074"
                }
            ],
            "year": "1954"
        },
        {
            "countries": [
                "Brazil",
                "France"
            ],
            "directors": [
                {
                    "name": "Fernando Meirelles",
                    "nameId": "nm0576987"
                },
                {
                    "name": "K�tia Lund",
                    "nameId": "nm0526199"
                }
            ],
            "filmingLocations": [
                "Cidade de Deus",
                "Rio de Janeiro",
                "Rio de Janeiro",
                "Brazil"
            ],
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "tt0317248",
            "languages": [
                "Portuguese"
            ],
            "metascore": "79/100",
            "originalTitle": "Cidade de Deus",
            "plot": "Brazil, 1960's, City of God. The Tender Trio robs motels and gas trucks. Younger kids watch and learn well...too well. 1970's: Li'l Z� has prospered very well and owns the city. He causes violence and fear as he wipes out rival gangs without mercy. His best friend Ben� is the only one to keep him on the good side of sanity. Rocket has watched these two gain power for years, and he wants no part of it. Yet he keeps getting swept up in the madness. All he wants to do is take pictures. 1980's: Things are out of control between the last two remaining gangs...will it ever end? Welcome to the City of God.",
            "ranking": 21,
            "rated": "R",
            "rating": "8.7",
            "releaseDate": "20040213",
            "runtime": [
                "130 min"
            ],
            "simplePlot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
            "title": "City of God",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0317248",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX214_AL_.jpg",
            "votes": "485,341",
            "writers": [
                {
                    "name": "Paulo Lins",
                    "nameId": "nm0513130"
                },
                {
                    "name": "Br�ulio Mantovani",
                    "nameId": "nm1130251"
                }
            ],
            "year": "2002"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "David Fincher",
                    "nameId": "nm0000399"
                }
            ],
            "filmingLocations": [
                "Pacific Electric Building",
                "Los Angeles",
                "California",
                "USA"
            ],
            "genres": [
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "id": "tt0114369",
            "languages": [
                "English"
            ],
            "metascore": "65/100",
            "originalTitle": "",
            "plot": "A film about two homicide detectives' desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic \"John Doe\" sermonizes to Detectives Sommerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderer's terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Sommerset researches the Seven Deadly Sins in an effort to understand the killer's modus operandi while the bright but green and impulsive Detective Mills scoffs at his efforts to get inside the mind of a killer...",
            "ranking": 22,
            "rated": "R",
            "rating": "8.6",
            "releaseDate": "19950922",
            "runtime": [
                "127 min"
            ],
            "simplePlot": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.",
            "title": "Se7en",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0114369",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTQwNTU3MTE4NF5BMl5BanBnXkFtZTcwOTgxNDM2Mg@@._V1_SX214_AL_.jpg",
            "votes": "916,040",
            "writers": [
                {
                    "name": "Andrew Kevin Walker",
                    "nameId": "nm0001825"
                }
            ],
            "year": "1995"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Jonathan Demme",
                    "nameId": "nm0001129"
                }
            ],
            "filmingLocations": [
                "Clay County",
                "West Virginia",
                "USA"
            ],
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "id": "tt0102926",
            "languages": [
                "English"
            ],
            "metascore": "84/100",
            "originalTitle": "",
            "plot": "Young FBI agent Clarice Starling is assigned to help find a missing woman to save her from a psychopathic serial killer who skins his victims. Clarice attempts to gain a better insight into the twisted mind of the killer by talking to another psychopath Hannibal Lecter, who used to be a respected psychiatrist. FBI agent Jack Crawford believes that Lecter, who is also a very powerful and clever mind manipulator, has the answers to their questions and can help locate the killer. However, Clarice must first gain Lecter's confidence before the inmate will give away any information.",
            "ranking": 23,
            "rated": "R",
            "rating": "8.6",
            "releaseDate": "19910214",
            "runtime": [
                "118 min"
            ],
            "simplePlot": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
            "title": "The Silence of the Lambs",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0102926",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX214_AL_.jpg",
            "votes": "785,834",
            "writers": [
                {
                    "name": "Thomas Harris",
                    "nameId": "nm0365383"
                },
                {
                    "name": "Ted Tally",
                    "nameId": "nm0848217"
                }
            ],
            "year": "1991"
        },
        {
            "countries": [
                "USA",
                "Germany"
            ],
            "directors": [
                {
                    "name": "Bryan Singer",
                    "nameId": "nm0001741"
                }
            ],
            "filmingLocations": [
                "Los Angeles",
                "California",
                "USA"
            ],
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "id": "tt0114814",
            "languages": [
                "English",
                "Hungarian",
                "Spanish",
                "French"
            ],
            "metascore": "77/100",
            "originalTitle": "",
            "plot": "Following a truck hijack in New York, five conmen are arrested and brought together for questioning. As none of them are guilty, they plan a revenge operation against the police. The operation goes well, but then the influence of a legendary mastermind criminal called Keyser S�ze is felt. It becomes clear that each one of them has wronged S�ze at some point and must pay back now. The payback job leaves 27 men dead in a boat explosion, but the real question arises now: Who actually is Keyser S�ze?",
            "ranking": 24,
            "rated": "R",
            "rating": "8.6",
            "releaseDate": "19950915",
            "runtime": [
                "106 min"
            ],
            "simplePlot": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup.",
            "title": "The Usual Suspects",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0114814",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMzI1MjI5MDQyOV5BMl5BanBnXkFtZTcwNzE4Mjg3NA@@._V1_SX214_AL_.jpg",
            "votes": "670,257",
            "writers": [
                {
                    "name": "Christopher McQuarrie",
                    "nameId": "nm0003160"
                }
            ],
            "year": "1995"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Frank Capra",
                    "nameId": "nm0001008"
                }
            ],
            "filmingLocations": [
                "California",
                "USA"
            ],
            "genres": [
                "Drama",
                "Family",
                "Fantasy"
            ],
            "id": "tt0038650",
            "languages": [
                "English"
            ],
            "metascore": "",
            "originalTitle": "",
            "plot": "George Bailey has spent his entire life giving of himself to the people of Bedford Falls. He has always longed to travel but never had the opportunity in order to prevent rich skinflint Mr. Potter from taking over the entire town. All that prevents him from doing so is George's modest building and loan company, which was founded by his generous father. But on Christmas Eve, George's Uncle Billy loses the business's $8,000 while intending to deposit it in the bank. Potter finds the misplaced money and hides it from Billy. When the bank examiner discovers the shortage later that night, George realizes that he will be held responsible and sent to jail and the company will collapse, finally allowing Potter to take over the town. Thinking of his wife, their young children, and others he loves will be better off with him dead, he contemplates suicide. But the prayers of his loved ones result in a gentle angel named Clarence coming to earth to help George, with the promise of earning his ...",
            "ranking": 25,
            "rated": "APPROVED",
            "rating": "8.6",
            "releaseDate": "19470107",
            "runtime": [
                "130 min"
            ],
            "simplePlot": "An angel helps a compassionate but despairingly frustrated businessman by showing what life would have been like if he never existed.",
            "title": "It's a Wonderful Life",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0038650",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTMzMzY5NDc4M15BMl5BanBnXkFtZTcwMzc4NjIxNw@@._V1_SX214_AL_.jpg",
            "votes": "246,813",
            "writers": [
                {
                    "name": "Frances Goodrich",
                    "nameId": "nm0329304"
                },
                {
                    "name": "Albert Hackett",
                    "nameId": "nm0352443"
                }
            ],
            "year": "1946"
        },
        {
            "countries": [
                "Italy"
            ],
            "directors": [
                {
                    "name": "Roberto Benigni",
                    "nameId": "nm0000905"
                }
            ],
            "filmingLocations": [
                "Ronciglione",
                "Viterbo",
                "Lazio",
                "Italy"
            ],
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "id": "tt0118799",
            "languages": [
                "Italian",
                "German",
                "English"
            ],
            "metascore": "59/100",
            "originalTitle": "La vita � bella",
            "plot": "In 1930s Italy, a carefree Jewish book keeper named Guido starts a fairy tale life by courting and marrying a lovely woman from a nearby city. Guido and his wife have a son and live happily together until the occupation of Italy by German forces. In an attempt to hold his family together and help his son survive the horrors of a Jewish Concentration Camp, Guido imagines that the Holocaust is a game and that the grand prize for winning is a tank.",
            "ranking": 26,
            "rated": "PG-13",
            "rating": "8.6",
            "releaseDate": "19990212",
            "runtime": [
                "116 min"
            ],
            "simplePlot": "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
            "title": "Life Is Beautiful",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0118799",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTQwMTM2MjE4Ml5BMl5BanBnXkFtZTgwODQ2NTYxMTE@._V1_SX214_AL_.jpg",
            "votes": "367,985",
            "writers": [
                {
                    "name": "Vincenzo Cerami",
                    "nameId": "nm0148437"
                },
                {
                    "name": "Roberto Benigni",
                    "nameId": "nm0000905"
                }
            ],
            "year": "1997"
        },
        {
            "countries": [
                "France"
            ],
            "directors": [
                {
                    "name": "Luc Besson",
                    "nameId": "nm0000108"
                }
            ],
            "filmingLocations": [
                "1 Centre Street",
                "New York City",
                "New York",
                "USA"
            ],
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "id": "tt0110413",
            "languages": [
                "English",
                "Italian",
                "French"
            ],
            "metascore": "64/100",
            "originalTitle": "L�on",
            "plot": "After her father and little brother are killed by her father's employers, the 12-year-old daughter of an abject drug dealer is forced to take refuge in the house of a professional murderer who by her request, teaches her the methods of his job so she can take her revenge from the corrupted DEA agent who ruined her life by killing her brother out of no actual reason.",
            "ranking": 27,
            "rated": "R",
            "rating": "8.6",
            "releaseDate": "19941118",
            "runtime": [
                "110 min"
            ],
            "simplePlot": "Mathilda, a 12-year-old girl, is reluctantly taken in by L�on, a professional assassin, after her family is murdered. L�on and Mathilda form an unusual relationship, as she becomes his prot�g�e and learns the assassin's trade.",
            "title": "L�on: The Professional",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0110413",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTgzMzg4MDkwNF5BMl5BanBnXkFtZTcwODAwNDg3OA@@._V1_SY317_CR4,0,214,317_AL_.jpg",
            "votes": "649,349",
            "writers": [
                {
                    "name": "Luc Besson",
                    "nameId": "nm0000108"
                }
            ],
            "year": "1994"
        },
        {
            "countries": [
                "Italy",
                "USA",
                "Spain"
            ],
            "directors": [
                {
                    "name": "Sergio Leone",
                    "nameId": "nm0001466"
                }
            ],
            "filmingLocations": [
                "Bavispe",
                "Sonora",
                "Mexico"
            ],
            "genres": [
                "Western"
            ],
            "id": "tt0064116",
            "languages": [
                "English",
                "Spanish",
                "Italian"
            ],
            "metascore": "80/100",
            "originalTitle": "C'era una volta il West",
            "plot": "Story of a young woman, Mrs. McBain, who moves from New Orleans to frontier Utah, on the very edge of the American West. She arrives to find her new husband and family slaughtered, but by whom? The prime suspect, coffee-lover Cheyenne, befriends her and offers to go after the real killer, assassin gang leader Frank, in her honor. He is accompanied by Harmonica, a man already on a quest to get even.",
            "ranking": 28,
            "rated": "PG-13",
            "rating": "8.6",
            "releaseDate": "19690827",
            "runtime": [
                "175 min"
            ],
            "simplePlot": "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
            "title": "Once Upon a Time in the West",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0064116",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDgyODk1NDEx._V1_SY317_CR4,0,214,317_AL_.jpg",
            "votes": "195,943",
            "writers": [
                {
                    "name": "Sergio Donati",
                    "nameId": "nm0006872"
                },
                {
                    "name": "Sergio Leone",
                    "nameId": "nm0001466"
                }
            ],
            "year": "1968"
        },
        {
            "countries": [
                "USA",
                "UK",
                "Canada"
            ],
            "directors": [
                {
                    "name": "Christopher Nolan",
                    "nameId": "nm0634240"
                }
            ],
            "filmingLocations": [
                "Okotoks",
                "Alberta",
                "Canada"
            ],
            "genres": [
                "Adventure",
                "Drama",
                "Sci-Fi"
            ],
            "id": "tt0816692",
            "languages": [
                "English"
            ],
            "metascore": "74/100",
            "originalTitle": "",
            "plot": "In the near future, Earth has been devastated by drought and famine, causing a scarcity in food and extreme changes in climate. When humanity is facing extinction, a mysterious rip in the space-time continuum is discovered, giving mankind the opportunity to widen its lifespan. A group of explorers must travel beyond our solar system in search of a planet that can sustain life. The crew of the Endurance are required to think bigger and go further than any human in history as they embark on an interstellar voyage into the unknown. Coop, the pilot of the Endurance, must decide between seeing his children again and the future of the human race.",
            "ranking": 29,
            "rated": "PG-13",
            "rating": "8.7",
            "releaseDate": "20141107",
            "runtime": [
                "169 min"
            ],
            "simplePlot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "title": "Interstellar",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0816692",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX214_AL_.jpg",
            "votes": "731,153",
            "writers": [
                {
                    "name": "Jonathan Nolan",
                    "nameId": "nm0634300"
                },
                {
                    "name": "Christopher Nolan",
                    "nameId": "nm0634240"
                }
            ],
            "year": "2014"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Steven Spielberg",
                    "nameId": "nm0000229"
                }
            ],
            "filmingLocations": [
                "Calvados",
                "France"
            ],
            "genres": [
                "Action",
                "Drama",
                "War"
            ],
            "id": "tt0120815",
            "languages": [
                "English",
                "French",
                "German",
                "Czech"
            ],
            "metascore": "90/100",
            "originalTitle": "",
            "plot": "Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother...",
            "ranking": 30,
            "rated": "R",
            "rating": "8.6",
            "releaseDate": "19980724",
            "runtime": [
                "169 min"
            ],
            "simplePlot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
            "title": "Saving Private Ryan",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0120815",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BNjczODkxNTAxN15BMl5BanBnXkFtZTcwMTcwNjUxMw@@._V1_SY317_CR9,0,214,317_AL_.jpg",
            "votes": "787,101",
            "writers": [
                {
                    "name": "Robert Rodat",
                    "nameId": "nm0734441"
                }
            ],
            "year": "1998"
        },
        {
            "countries": [
                "Japan"
            ],
            "directors": [
                {
                    "name": "Hayao Miyazaki",
                    "nameId": "nm0594503"
                }
            ],
            "filmingLocations": [],
            "genres": [
                "Animation",
                "Adventure",
                "Family",
                "Fantasy"
            ],
            "id": "tt0245429",
            "languages": [
                "Japanese"
            ],
            "metascore": "94/100",
            "originalTitle": "Sen to Chihiro no Kamikakushi",
            "plot": "Chihiro and her parents are moving to a small Japanese town in the countryside. much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax. The owner of the bathhouse is...",
            "ranking": 31,
            "rated": "PG",
            "rating": "8.6",
            "releaseDate": "20030328",
            "runtime": [
                "125 min"
            ],
            "simplePlot": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
            "title": "Spirited Away",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0245429",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_SY317_CR5,0,214,317_AL_.jpg",
            "votes": "366,336",
            "writers": [
                {
                    "name": "Hayao Miyazaki",
                    "nameId": "nm0594503"
                }
            ],
            "year": "2001"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Tony Kaye",
                    "nameId": "nm0443411"
                }
            ],
            "filmingLocations": [
                "2206 Meade Place",
                "Venice Beach",
                "Los Angeles",
                "California",
                "USA"
            ],
            "genres": [
                "Crime",
                "Drama"
            ],
            "id": "tt0120586",
            "languages": [
                "English"
            ],
            "metascore": "62/100",
            "originalTitle": "",
            "plot": "Derek Vineyard is paroled after serving 3 years in prison for killing two thugs who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
            "ranking": 32,
            "rated": "R",
            "rating": "8.6",
            "releaseDate": "19981120",
            "runtime": [
                "119 min"
            ],
            "simplePlot": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
            "title": "American History X",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0120586",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjMzNDUwNTIyMF5BMl5BanBnXkFtZTcwNjMwNDg3OA@@._V1_SY317_CR17,0,214,317_AL_.jpg",
            "votes": "708,412",
            "writers": [
                {
                    "name": "David McKenna",
                    "nameId": "nm0571346"
                }
            ],
            "year": "1998"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Michael Curtiz",
                    "nameId": "nm0002031"
                }
            ],
            "filmingLocations": [
                "Hotel Monte Vista",
                "Flagstaff",
                "Arizona",
                "USA"
            ],
            "genres": [
                "Drama",
                "Film-Noir",
                "Romance",
                "War"
            ],
            "id": "tt0034583",
            "languages": [
                "English",
                "French",
                "German",
                "Italian"
            ],
            "metascore": "",
            "originalTitle": "",
            "plot": "In World War II Casablanca, Rick Blaine, exiled American and former freedom fighter, runs the most popular nightspot in town. The cynical lone wolf Blaine comes into the possession of two valuable letters of transit. When Nazi Major Strasser arrives in Casablanca, the sycophantic police Captain Renault does what he can to please him, including detaining a Czechoslovak underground leader Victor Laszlo. Much to Rick's surprise, Lazslo arrives with Ilsa, Rick's one time love. Rick is very bitter towards Ilsa, who ran out on him in Paris, but when he learns she had good reason to, they plan to run off together again using the letters of transit. Well, that was their original plan....",
            "ranking": 33,
            "rated": "PG",
            "rating": "8.6",
            "releaseDate": "19430123",
            "runtime": [
                "102 min"
            ],
            "simplePlot": "Set in Casablanca, Morocco during the early days of World War II: An American expatriate meets a former lover, with unforeseen complications.",
            "title": "Casablanca",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0034583",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjQwNDYyNTk2N15BMl5BanBnXkFtZTgwMjQ0OTMyMjE@._V1_SX214_AL_.jpg",
            "votes": "356,482",
            "writers": [
                {
                    "name": "Julius J. Epstein",
                    "nameId": "nm0258493"
                },
                {
                    "name": "Philip G. Epstein",
                    "nameId": "nm0258525"
                }
            ],
            "year": "1942"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Steven Spielberg",
                    "nameId": "nm0000229"
                }
            ],
            "filmingLocations": [
                "Borehamwood",
                "Hertfordshire",
                "England",
                "UK"
            ],
            "genres": [
                "Action",
                "Adventure"
            ],
            "id": "tt0082971",
            "languages": [
                "English",
                "German",
                "Hebrew",
                "Spanish",
                "Arabic",
                "Nepali"
            ],
            "metascore": "90/100",
            "originalTitle": "",
            "plot": "The year is 1936. An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact. However, he will have to fight his enemy Rene Belloq and a band of Nazis in order to reach it.",
            "ranking": 34,
            "rated": "PG",
            "rating": "8.6",
            "releaseDate": "19810612",
            "runtime": [
                "115 min"
            ],
            "simplePlot": "Archaeologist and adventurer Indiana Jones is hired by the US government to find the Ark of the Covenant before the Nazis.",
            "title": "Raiders of the Lost Ark",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0082971",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX214_AL_.jpg",
            "votes": "596,975",
            "writers": [
                {
                    "name": "Lawrence Kasdan",
                    "nameId": "nm0001410"
                },
                {
                    "name": "George Lucas",
                    "nameId": "nm0000184"
                }
            ],
            "year": "1981"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Alfred Hitchcock",
                    "nameId": "nm0000033"
                }
            ],
            "filmingLocations": [
                "Title and Trust Building",
                "114 West Adams Street",
                "downtown Phoenix",
                "Arizona",
                "USA"
            ],
            "genres": [
                "Horror",
                "Mystery",
                "Thriller"
            ],
            "id": "tt0054215",
            "languages": [
                "English"
            ],
            "metascore": "",
            "originalTitle": "",
            "plot": "Phoenix officeworker Marion Crane is fed up with the way life has treated her. She has to meet her lover Sam in lunch breaks and they cannot get married because Sam has to give most of his money away in alimony. One Friday Marion is trusted to bank $40,000 by her employer. Seeing the opportunity to take the money and start a new life, Marion leaves town and heads towards Sam's California store. Tired after the long drive and caught in a storm, she gets off the main highway and pulls into The Bates Motel. The motel is managed by a quiet young man called Norman who seems to be dominated by his mother.",
            "ranking": 35,
            "rated": "R",
            "rating": "8.6",
            "releaseDate": "19600908",
            "runtime": [
                "109 min"
            ],
            "simplePlot": "A Phoenix secretary steals $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
            "title": "Psycho",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0054215",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BNjI3OTAxNjI5OV5BMl5BanBnXkFtZTgwMzk4ODE4MzE@._V1_SX214_AL_.jpg",
            "votes": "379,709",
            "writers": [
                {
                    "name": "Joseph Stefano",
                    "nameId": "nm0825010"
                },
                {
                    "name": "Robert Bloch",
                    "nameId": "nm0088645"
                }
            ],
            "year": "1960"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Charles Chaplin",
                    "nameId": "nm0000122"
                }
            ],
            "filmingLocations": [
                "Chaplin Studios - 1416 N. La Brea Avenue",
                "Hollywood",
                "Los Angeles",
                "California",
                "USA"
            ],
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "id": "tt0021749",
            "languages": [
                "English"
            ],
            "metascore": "",
            "originalTitle": "",
            "plot": "A tramp falls in love with a beautiful blind girl. Her family is in financial trouble. The tramp's on-and-off friendship with a wealthy man allows him to be the girl's benefactor and suitor.",
            "ranking": 36,
            "rated": "PASSED",
            "rating": "8.6",
            "releaseDate": "19310307",
            "runtime": [
                "87 min"
            ],
            "simplePlot": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
            "title": "City Lights",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0021749",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjA3NDQ5MDMzOV5BMl5BanBnXkFtZTgwODY2MjcyMjE@._V1_SX214_AL_.jpg",
            "votes": "94,871",
            "writers": [
                {
                    "name": "Charles Chaplin",
                    "nameId": "nm0000122"
                }
            ],
            "year": "1931"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Alfred Hitchcock",
                    "nameId": "nm0000033"
                }
            ],
            "filmingLocations": [
                "Stage 18",
                "Paramount Studios - 5555 Melrose Avenue",
                "Hollywood",
                "Los Angeles",
                "California",
                "USA"
            ],
            "genres": [
                "Mystery",
                "Thriller"
            ],
            "id": "tt0047396",
            "languages": [
                "English"
            ],
            "metascore": "",
            "originalTitle": "",
            "plot": "Professional photographer L.B. \"Jeff\" Jeffries breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. He begins to suspect that a man across the courtyard may have murdered his wife. Jeff enlists the help of his high society fashion-consultant girlfriend Lisa Freemont and his visiting nurse Stella to investigate.",
            "ranking": 37,
            "rated": "APPROVED",
            "rating": "8.5",
            "releaseDate": "19550401",
            "runtime": [
                "112 min"
            ],
            "simplePlot": "A wheelchair bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
            "title": "Rear Window",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0047396",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTg5MjM4NzEwOF5BMl5BanBnXkFtZTgwMDE1NjM0MTE@._V1_SY317_CR2,0,214,317_AL_.jpg",
            "votes": "285,957",
            "writers": [
                {
                    "name": "John Michael Hayes",
                    "nameId": "nm0371088"
                },
                {
                    "name": "Cornell Woolrich",
                    "nameId": "nm0941280"
                }
            ],
            "year": "1954"
        },
        {
            "countries": [
                "France"
            ],
            "directors": [
                {
                    "name": "Olivier Nakache",
                    "nameId": "nm0619923"
                },
                {
                    "name": "Eric Toledano",
                    "nameId": "nm0865918"
                }
            ],
            "filmingLocations": [
                "Paris",
                "France"
            ],
            "genres": [
                "Biography",
                "Comedy",
                "Drama"
            ],
            "id": "tt1675434",
            "languages": [
                "French",
                "English"
            ],
            "metascore": "57/100",
            "originalTitle": "Intouchables",
            "plot": "In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is interviewing candidates for the position of his carer, with his red-haired secretary Magalie. Out of the blue, the rude African Driss cuts the line of candidates and brings a document from the Social Security and asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and moves to the mansion, changing the boring life of Phillipe and his employees.",
            "ranking": 38,
            "rated": "R",
            "rating": "8.6",
            "releaseDate": "20111102",
            "runtime": [
                "112 min"
            ],
            "simplePlot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
            "title": "The Intouchables",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt1675434",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX214_AL_.jpg",
            "votes": "429,521",
            "writers": [
                {
                    "name": "Olivier Nakache",
                    "nameId": "nm0619923"
                },
                {
                    "name": "Eric Toledano",
                    "nameId": "nm0865918"
                }
            ],
            "year": "2011"
        },
        {
            "countries": [
                "USA"
            ],
            "directors": [
                {
                    "name": "Charles Chaplin",
                    "nameId": "nm0000122"
                }
            ],
            "filmingLocations": [
                "Santa Clarita",
                "California",
                "USA"
            ],
            "genres": [
                "Comedy",
                "Drama"
            ],
            "id": "tt0027977",
            "languages": [
                "English"
            ],
            "metascore": "96/100",
            "originalTitle": "",
            "plot": "Chaplins last 'silent' film, filled with sound effects, was made when everyone else was making talkies. Charlie turns against modern society, the machine age, (The use of sound in films ?) and progress. Firstly we see him frantically trying to keep up with a production line, tightening bolts. He is selected for an experiment with an automatic feeding machine, but various mishaps leads his boss to believe he has gone mad, and Charlie is sent to a mental hospital... When he gets out, he is mistaken for a communist while waving a red flag, sent to jail, foils a jailbreak, and is let out again. We follow Charlie through many more escapades before the film is out.",
            "ranking": 39,
            "rated": "G",
            "rating": "8.6",
            "releaseDate": "19360225",
            "runtime": [
                "87 min"
            ],
            "simplePlot": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
            "title": "Modern Times",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0027977",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMjAyMTkxNjI5OF5BMl5BanBnXkFtZTYwMjI2MjA5._V1_SY317_CR9,0,214,317_AL_.jpg",
            "votes": "125,006",
            "writers": [
                {
                    "name": "Charles Chaplin",
                    "nameId": "nm0000122"
                }
            ],
            "year": "1936"
        },
        {
            "countries": [
                "USA",
                "France"
            ],
            "directors": [
                {
                    "name": "James Cameron",
                    "nameId": "nm0000116"
                }
            ],
            "filmingLocations": [
                "Santa Clarita",
                "California",
                "USA"
            ],
            "genres": [
                "Action",
                "Sci-Fi"
            ],
            "id": "tt0103064",
            "languages": [
                "English",
                "Spanish"
            ],
            "metascore": "75/100",
            "originalTitle": "",
            "plot": "Almost 10 years have passed since the first cyborg called The Terminator tried to kill Sarah Connor and her unborn son, John Connor. John Connor, the future leader of the human resistance, is now a healthy young boy. However another Terminator is sent back through time called the T-1000, which is more advanced and more powerful than its predecessor. The Mission: to kill John Connor when he's still a child. However, Sarah and John do not have to face this threat of a Terminator alone. Another Terminator is also sent back through time. The mission: to protect John and Sarah Connor at all costs. The battle for tomorrow has begun...",
            "ranking": 40,
            "rated": "R",
            "rating": "8.5",
            "releaseDate": "19910703",
            "runtime": [
                "137 min"
            ],
            "simplePlot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her young son, John Connor, from a more advanced cyborg, made out of liquid metal.",
            "title": "Terminator 2: Judgment Day",
            "type": "Movie",
            "urlIMDB": "http://www.imdb.com/title/tt0103064",
            "urlPoster": "http://ia.media-imdb.com/images/M/MV5BMTg5NzUwMDU5NF5BMl5BanBnXkFtZTcwMjk2MDA4Mg@@._V1_SY317_CR18,0,214,317_AL_.jpg",
            "votes": "672,214",
            "writers": [
                {
                    "name": "James Cameron",
                    "nameId": "nm0000116"
                },
                {
                    "name": "William Wisher Jr.",
                    "nameId": "nm0936537"
                }
            ],
            "year": "1991"
        }
    ];
    return {
        list: function () {
            return movies;
        },
        findMovie: function (id) {
            return _.find(movies, function (movie) {
                return movie.id == id
            })
        },
        graph:function(){

            var title=movies.title;
            var year=movies.year;
            return[
                {
                    values: year,      //values - represents the array of {x,y} data points
                    key: 'Title', //key  - the name of the series.
                    color: '#ff7f0e'  //color - optional: choose your own line color.
                }
            ]

        }
    }


})