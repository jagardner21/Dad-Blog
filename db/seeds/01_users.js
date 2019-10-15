
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "name": "Little Taylor",
          "email": "littletaylor@eplosion.com",
          "website": "Bostonic.com",
          "created_at": "2016-07-15T08:09:35 +07:00"
        },
        {
          "name": "Morgan Stevens",
          "email": "morganstevens@bostonic.com",
          "website": "Virxo.com",
          "created_at": "2015-10-21T10:57:13 +07:00"
        },
        {
          "name": "Kirby Daugherty",
          "email": "kirbydaugherty@virxo.com",
          "website": "Acumentor.com",
          "created_at": "2018-09-20T11:35:42 +07:00"
        },
        {
          "name": "Blanca Marsh",
          "email": "blancamarsh@acumentor.com",
          "website": "Visalia.com",
          "created_at": "2014-02-18T06:32:24 +07:00"
        },
        {
          "name": "Luella Washington",
          "email": "luellawashington@visalia.com",
          "website": "Snowpoke.com",
          "created_at": "2014-01-11T04:50:48 +07:00"
        },
        {
          "name": "Tara Donaldson",
          "email": "taradonaldson@snowpoke.com",
          "website": "Xylar.com",
          "created_at": "2017-11-13T05:48:37 +07:00"
        },
        {
          "name": "Earlene Lancaster",
          "email": "earlenelancaster@xylar.com",
          "website": "Cofine.com",
          "created_at": "2015-09-16T07:09:11 +07:00"
        },
        {
          "name": "Sawyer Reyes",
          "email": "sawyerreyes@cofine.com",
          "website": "Micronaut.com",
          "created_at": "2016-01-29T01:06:02 +07:00"
        },
        {
          "name": "Alford Jones",
          "email": "alfordjones@micronaut.com",
          "website": "Aquamate.com",
          "created_at": "2018-05-31T07:00:01 +07:00"
        },
        {
          "name": "Terrell Pace",
          "email": "terrellpace@aquamate.com",
          "website": "Neteria.com",
          "created_at": "2019-05-03T07:39:34 +07:00"
        },
        {
          "name": "Gay Merrill",
          "email": "gaymerrill@neteria.com",
          "website": "Silodyne.com",
          "created_at": "2014-06-30T05:48:08 +07:00"
        },
        {
          "name": "Grace Hayden",
          "email": "gracehayden@silodyne.com",
          "website": "Zipak.com",
          "created_at": "2015-01-28T09:17:24 +07:00"
        },
        {
          "name": "Minerva Hernandez",
          "email": "minervahernandez@zipak.com",
          "website": "Artiq.com",
          "created_at": "2016-06-27T02:58:58 +07:00"
        },
        {
          "name": "Rosalie Boyd",
          "email": "rosalieboyd@artiq.com",
          "website": "Musix.com",
          "created_at": "2018-03-12T01:24:12 +07:00"
        },
        {
          "name": "Ana Yang",
          "email": "anayang@musix.com",
          "website": "Softmicro.com",
          "created_at": "2014-01-25T06:47:14 +07:00"
        },
        {
          "name": "Newton House",
          "email": "newtonhouse@softmicro.com",
          "website": "Portica.com",
          "created_at": "2015-06-16T10:59:55 +07:00"
        },
        {
          "name": "Mayo Dickerson",
          "email": "mayodickerson@portica.com",
          "website": "Exovent.com",
          "created_at": "2017-04-30T07:48:51 +07:00"
        },
        {
          "name": "Gonzales Porter",
          "email": "gonzalesporter@exovent.com",
          "website": "Velity.com",
          "created_at": "2014-12-04T09:16:40 +07:00"
        },
        {
          "name": "Beverly Morales",
          "email": "beverlymorales@velity.com",
          "website": "Greeker.com",
          "created_at": "2014-09-12T12:32:28 +07:00"
        },
        {
          "name": "Alisa French",
          "email": "alisafrench@greeker.com",
          "website": "Xanide.com",
          "created_at": "2017-12-04T09:01:31 +07:00"
        },
        {
          "name": "Henry Perez",
          "email": "henryperez@xanide.com",
          "website": "Extrawear.com",
          "created_at": "2015-12-14T09:28:08 +07:00"
        },
        {
          "name": "Marissa Caldwell",
          "email": "marissacaldwell@extrawear.com",
          "website": "Zytrex.com",
          "created_at": "2017-01-21T04:35:24 +07:00"
        },
        {
          "name": "Lesa Glover",
          "email": "lesaglover@zytrex.com",
          "website": "Exosis.com",
          "created_at": "2017-03-05T08:26:10 +07:00"
        },
        {
          "name": "Graves Mejia",
          "email": "gravesmejia@exosis.com",
          "website": "Daido.com",
          "created_at": "2018-07-22T08:10:50 +07:00"
        },
        {
          "name": "Kaitlin Jordan",
          "email": "kaitlinjordan@daido.com",
          "website": "Sultrax.com",
          "created_at": "2016-12-11T03:03:11 +07:00"
        },
        {
          "name": "Salas Gallagher",
          "email": "salasgallagher@sultrax.com",
          "website": "Zogak.com",
          "created_at": "2016-07-14T04:14:24 +07:00"
        },
        {
          "name": "Lea Mueller",
          "email": "leamueller@zogak.com",
          "website": "Anocha.com",
          "created_at": "2019-03-06T04:50:57 +07:00"
        },
        {
          "name": "Natasha Blackburn",
          "email": "natashablackburn@anocha.com",
          "website": "Zentix.com",
          "created_at": "2017-03-07T12:28:05 +07:00"
        },
        {
          "name": "Wiggins Rich",
          "email": "wigginsrich@zentix.com",
          "website": "Papricut.com",
          "created_at": "2016-03-27T01:43:47 +07:00"
        },
        {
          "name": "Willa Ratliff",
          "email": "willaratliff@papricut.com",
          "website": "Xerex.com",
          "created_at": "2018-07-30T12:32:52 +07:00"
        },
        {
          "name": "Megan Golden",
          "email": "megangolden@xerex.com",
          "website": "Vitricomp.com",
          "created_at": "2015-01-13T05:23:14 +07:00"
        },
        {
          "name": "Sykes Petty",
          "email": "sykespetty@vitricomp.com",
          "website": "Hinway.com",
          "created_at": "2016-10-14T07:08:23 +07:00"
        },
        {
          "name": "Dionne Melton",
          "email": "dionnemelton@hinway.com",
          "website": "Nipaz.com",
          "created_at": "2018-11-20T12:31:55 +07:00"
        },
        {
          "name": "Laurel Robinson",
          "email": "laurelrobinson@nipaz.com",
          "website": "Earbang.com",
          "created_at": "2015-07-28T03:22:41 +07:00"
        },
        {
          "name": "Lorraine Hogan",
          "email": "lorrainehogan@earbang.com",
          "website": "Telepark.com",
          "created_at": "2018-08-13T08:58:11 +07:00"
        },
        {
          "name": "Brennan Guerrero",
          "email": "brennanguerrero@telepark.com",
          "website": "Essensia.com",
          "created_at": "2017-03-26T06:42:39 +07:00"
        },
        {
          "name": "Juanita Hurst",
          "email": "juanitahurst@essensia.com",
          "website": "Speedbolt.com",
          "created_at": "2015-12-12T12:29:29 +07:00"
        },
        {
          "name": "Keith Ramirez",
          "email": "keithramirez@speedbolt.com",
          "website": "Comveyer.com",
          "created_at": "2016-02-14T03:25:17 +07:00"
        },
        {
          "name": "Petersen Mathis",
          "email": "petersenmathis@comveyer.com",
          "website": "Eternis.com",
          "created_at": "2014-04-01T10:35:03 +07:00"
        },
        {
          "name": "Ella Moss",
          "email": "ellamoss@eternis.com",
          "website": "Comvoy.com",
          "created_at": "2016-07-09T10:16:35 +07:00"
        },
        {
          "name": "Booker Bullock",
          "email": "bookerbullock@comvoy.com",
          "website": "Maximind.com",
          "created_at": "2019-07-03T01:33:06 +07:00"
        },
        {
          "name": "Arlene Keller",
          "email": "arlenekeller@maximind.com",
          "website": "Strozen.com",
          "created_at": "2016-10-07T10:49:48 +07:00"
        },
        {
          "name": "Mitzi Carlson",
          "email": "mitzicarlson@strozen.com",
          "website": "Mantrix.com",
          "created_at": "2017-11-05T05:20:29 +07:00"
        },
        {
          "name": "Gladys Velez",
          "email": "gladysvelez@mantrix.com",
          "website": "Centice.com",
          "created_at": "2019-04-18T03:57:38 +07:00"
        },
        {
          "name": "Ramos Bowman",
          "email": "ramosbowman@centice.com",
          "website": "Insectus.com",
          "created_at": "2017-03-04T02:00:02 +07:00"
        },
        {
          "name": "Romero Landry",
          "email": "romerolandry@insectus.com",
          "website": "Protodyne.com",
          "created_at": "2014-07-07T07:04:21 +07:00"
        },
        {
          "name": "Vincent Dyer",
          "email": "vincentdyer@protodyne.com",
          "website": "Quantasis.com",
          "created_at": "2017-08-16T05:53:56 +07:00"
        },
        {
          "name": "Munoz Dean",
          "email": "munozdean@quantasis.com",
          "website": "Nebulean.com",
          "created_at": "2017-03-08T10:26:32 +07:00"
        },
        {
          "name": "Allyson Mckinney",
          "email": "allysonmckinney@nebulean.com",
          "website": "Buzzworks.com",
          "created_at": "2016-03-25T12:16:14 +07:00"
        },
        {
          "name": "Traci Wright",
          "email": "traciwright@buzzworks.com",
          "website": "Atomica.com",
          "created_at": "2017-08-23T07:33:31 +07:00"
        },
        {
          "name": "Joyner Martinez",
          "email": "joynermartinez@atomica.com",
          "website": "Delphide.com",
          "created_at": "2019-02-02T02:43:43 +07:00"
        },
        {
          "name": "Melanie Eaton",
          "email": "melanieeaton@delphide.com",
          "website": "Microluxe.com",
          "created_at": "2017-01-06T11:15:30 +07:00"
        },
        {
          "name": "Bryant Newton",
          "email": "bryantnewton@microluxe.com",
          "website": "Kineticut.com",
          "created_at": "2015-02-24T06:35:41 +07:00"
        },
        {
          "name": "Kimberley Solomon",
          "email": "kimberleysolomon@kineticut.com",
          "website": "Coriander.com",
          "created_at": "2018-01-22T04:14:33 +07:00"
        },
        {
          "name": "Todd Cohen",
          "email": "toddcohen@coriander.com",
          "website": "Cinaster.com",
          "created_at": "2018-04-27T09:26:27 +07:00"
        },
        {
          "name": "Deidre Walsh",
          "email": "deidrewalsh@cinaster.com",
          "website": "Spherix.com",
          "created_at": "2019-03-07T03:42:13 +07:00"
        },
        {
          "name": "Alvarez Mccarty",
          "email": "alvarezmccarty@spherix.com",
          "website": "Netagy.com",
          "created_at": "2014-06-12T10:28:27 +07:00"
        },
        {
          "name": "Cassandra Richard",
          "email": "cassandrarichard@netagy.com",
          "website": "Immunics.com",
          "created_at": "2016-07-08T03:57:00 +07:00"
        },
        {
          "name": "Ramsey Mills",
          "email": "ramseymills@immunics.com",
          "website": "Elentrix.com",
          "created_at": "2014-11-09T06:26:13 +07:00"
        },
        {
          "name": "Kirkland Fletcher",
          "email": "kirklandfletcher@elentrix.com",
          "website": "Rooforia.com",
          "created_at": "2017-06-11T12:08:52 +07:00"
        },
        {
          "name": "Burt Rivera",
          "email": "burtrivera@rooforia.com",
          "website": "Oronoko.com",
          "created_at": "2018-06-03T01:31:49 +07:00"
        },
        {
          "name": "Tabitha Steele",
          "email": "tabithasteele@oronoko.com",
          "website": "Cognicode.com",
          "created_at": "2018-12-28T08:38:24 +07:00"
        },
        {
          "name": "Poole Leon",
          "email": "pooleleon@cognicode.com",
          "website": "Eplosion.com",
          "created_at": "2018-11-22T03:00:35 +07:00"
        },
        {
          "name": "Lorie Case",
          "email": "loriecase@eplosion.com",
          "website": "Qaboos.com",
          "created_at": "2016-10-17T02:48:41 +07:00"
        },
        {
          "name": "Margarita Lamb",
          "email": "margaritalamb@qaboos.com",
          "website": "Accidency.com",
          "created_at": "2018-07-30T03:20:06 +07:00"
        },
        {
          "name": "Barrera Blevins",
          "email": "barrerablevins@accidency.com",
          "website": "Bulljuice.com",
          "created_at": "2017-06-23T12:59:24 +07:00"
        },
        {
          "name": "Misty Dickson",
          "email": "mistydickson@bulljuice.com",
          "website": "Inear.com",
          "created_at": "2015-02-15T09:23:14 +07:00"
        },
        {
          "name": "Leola Cantu",
          "email": "leolacantu@inear.com",
          "website": "Ecratic.com",
          "created_at": "2016-04-07T06:55:16 +07:00"
        },
        {
          "name": "Faith Morin",
          "email": "faithmorin@ecratic.com",
          "website": "Veraq.com",
          "created_at": "2019-03-19T06:02:59 +07:00"
        },
        {
          "name": "Marlene Mccarthy",
          "email": "marlenemccarthy@veraq.com",
          "website": "Dentrex.com",
          "created_at": "2018-04-25T12:46:39 +07:00"
        },
        {
          "name": "Rice Gonzales",
          "email": "ricegonzales@dentrex.com",
          "website": "Digiprint.com",
          "created_at": "2017-11-01T05:01:04 +07:00"
        },
        {
          "name": "Dorothy Petersen",
          "email": "dorothypetersen@digiprint.com",
          "website": "Oulu.com",
          "created_at": "2014-11-21T09:33:08 +07:00"
        },
        {
          "name": "Clarke Joseph",
          "email": "clarkejoseph@oulu.com",
          "website": "Indexia.com",
          "created_at": "2019-04-12T02:52:50 +07:00"
        },
        {
          "name": "Deanne Rios",
          "email": "deannerios@indexia.com",
          "website": "Kinetica.com",
          "created_at": "2014-06-08T01:34:29 +07:00"
        },
        {
          "name": "Deann Wiggins",
          "email": "deannwiggins@kinetica.com",
          "website": "Panzent.com",
          "created_at": "2017-03-30T08:17:55 +07:00"
        },
        {
          "name": "Charles Silva",
          "email": "charlessilva@panzent.com",
          "website": "Duflex.com",
          "created_at": "2014-12-19T10:04:14 +07:00"
        },
        {
          "name": "Jacklyn Shannon",
          "email": "jacklynshannon@duflex.com",
          "website": "Namebox.com",
          "created_at": "2016-11-10T03:27:57 +07:00"
        },
        {
          "name": "West Adams",
          "email": "westadams@namebox.com",
          "website": "Geekol.com",
          "created_at": "2018-03-23T04:30:40 +07:00"
        },
        {
          "name": "Marshall Goodwin",
          "email": "marshallgoodwin@geekol.com",
          "website": "Parleynet.com",
          "created_at": "2018-10-21T04:31:49 +07:00"
        },
        {
          "name": "Vance Espinoza",
          "email": "vanceespinoza@parleynet.com",
          "website": "Techtrix.com",
          "created_at": "2017-09-26T05:44:36 +07:00"
        },
        {
          "name": "Caldwell Hart",
          "email": "caldwellhart@techtrix.com",
          "website": "Decratex.com",
          "created_at": "2017-11-16T10:48:40 +07:00"
        },
        {
          "name": "Lawson Valentine",
          "email": "lawsonvalentine@decratex.com",
          "website": "Terrasys.com",
          "created_at": "2016-06-15T10:46:04 +07:00"
        },
        {
          "name": "Case Poole",
          "email": "casepoole@terrasys.com",
          "website": "Dognosis.com",
          "created_at": "2015-08-21T02:20:53 +07:00"
        },
        {
          "name": "Jody Hodge",
          "email": "jodyhodge@dognosis.com",
          "website": "Besto.com",
          "created_at": "2014-09-15T08:40:20 +07:00"
        },
        {
          "name": "Lana Blanchard",
          "email": "lanablanchard@besto.com",
          "website": "Elpro.com",
          "created_at": "2018-12-26T01:33:23 +07:00"
        },
        {
          "name": "Mcconnell Allison",
          "email": "mcconnellallison@elpro.com",
          "website": "Zensure.com",
          "created_at": "2019-06-30T11:27:48 +07:00"
        },
        {
          "name": "Kari Collier",
          "email": "karicollier@zensure.com",
          "website": "Cyclonica.com",
          "created_at": "2018-01-17T04:13:14 +07:00"
        },
        {
          "name": "Parrish Griffith",
          "email": "parrishgriffith@cyclonica.com",
          "website": "Exozent.com",
          "created_at": "2015-12-23T06:35:41 +07:00"
        },
        {
          "name": "Jean Benjamin",
          "email": "jeanbenjamin@exozent.com",
          "website": "Frolix.com",
          "created_at": "2015-07-13T12:32:43 +07:00"
        },
        {
          "name": "England Rowe",
          "email": "englandrowe@frolix.com",
          "website": "Imaginart.com",
          "created_at": "2017-12-06T11:33:24 +07:00"
        },
        {
          "name": "Bird Forbes",
          "email": "birdforbes@imaginart.com",
          "website": "Zaphire.com",
          "created_at": "2016-04-26T06:29:48 +07:00"
        },
        {
          "name": "Ilene Gardner",
          "email": "ilenegardner@zaphire.com",
          "website": "Flotonic.com",
          "created_at": "2019-08-29T01:47:23 +07:00"
        },
        {
          "name": "Lois Gibson",
          "email": "loisgibson@flotonic.com",
          "website": "Caxt.com",
          "created_at": "2018-07-18T03:35:21 +07:00"
        },
        {
          "name": "Hartman Morrison",
          "email": "hartmanmorrison@caxt.com",
          "website": "Norsup.com",
          "created_at": "2019-03-06T11:09:17 +07:00"
        },
        {
          "name": "Roseann Wise",
          "email": "roseannwise@norsup.com",
          "website": "Comtours.com",
          "created_at": "2014-01-22T12:41:20 +07:00"
        },
        {
          "name": "Mercedes Farmer",
          "email": "mercedesfarmer@comtours.com",
          "website": "Pheast.com",
          "created_at": "2014-01-16T04:24:07 +07:00"
        },
        {
          "name": "Mattie Chen",
          "email": "mattiechen@pheast.com",
          "website": "Vetron.com",
          "created_at": "2018-05-03T11:28:11 +07:00"
        },
        {
          "name": "Sonja Hays",
          "email": "sonjahays@vetron.com",
          "website": "Eclipto.com",
          "created_at": "2014-01-30T05:12:36 +07:00"
        },
        {
          "name": "Hendrix Wynn",
          "email": "hendrixwynn@eclipto.com",
          "website": "Ginkle.com",
          "created_at": "2014-01-09T05:48:06 +07:00"
        },
        {
          "name": "Amy Hampton",
          "email": "amyhampton@ginkle.com",
          "website": "Insource.com",
          "created_at": "2014-06-18T03:40:35 +07:00"
        }
      ]);
    });
};
