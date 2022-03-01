# OSM L Map : Motiu
OSM L Map neix aprofitant la base de dades d'Openstreetmap amb informació sobre biblioteques. Per fer-ho combinem dos programaris.

# 0-La Base de dades: Openstreetmap
OSM (Openstreetmap) no és un mapa, és una base de dades de punts i línies geolocalitzats, que entre d'altres coses es pot aprofitar per fer mapes (renderitzacions). Però també es poden aprofitar les dades (en aquest cas, d'enllumenat) .Tot plegat es fa amb claus, valors i relacions en aquests punts i línies.
En aquest cas utilitzarem les claus:

*	addr:street
*	addr:housenumber
*	addr:postcode
*	addr:floor
*	library=public/cinema/children/students/research/university/academic
*	books=antiquarian/architecture/fine_art/art/communication_science/communication_studies/tourism/tourism_geography/computer_engineering/telecommunications_engineering/economics/business_administration/education_sciences/psychology/health_sciences/industrial_engineering/law/medicine/sciences/natural_sciences/social_sciences/trade_studies/anarchism
*	operator=
*	operator:type=association/community/corporation/foundation/government/local_authority/private/private_non_profit/public/religious/university/statewide
*	network=
*	opening_hours=
*	service_times=
*	ref=
*	ref:isil=

*	wheelchair=limited/no/yes/designated
*	wheelchair:description=
*	access:blind=limited
*	blind:description=
*	access:deaf=yes
*	deaf:description=
*	access:mental_disabled=yes
*	mental_disabled:description=

*	kids_area=no/yes/indoor/outdoor
*	kids_area:supervised=no/yes
*	kids_area:fee=yes/no
*	changing_table=yes/no
*	changing_table:location=unisex_toilet/wheelchair_toilet/room

*	toilets=no/yes
*	toilets:access=public/customers/private/yes/permissive
*	toilets:female=yes
*	toilets:male=yes
*	toilets:unisex=yes
*	toilets:wheelchair=no/yes/designated/limited

*	contact:email=
*	contact:phone=
*	contact:facebook=
*	contact:twitter=
*	contact:website=
*	contact:instagram=
*	contact:youtube=

*	access=customers/designated/no/permissive/private/yes
*	capacity= ?
*	air_conditioning=yes/no
*	automatic_door=button/yes/no/motion
*	outdoor_seating=yes

*	fee=yes/no
*	payment:cash=no/yes
*	payment:credit_cards=no/yes

*	service:computer=no/yes
*	service:copy=no/yes
*	service:print=no/yes
*	service:3dprint=yes
*	service:gaming=yes
*	service:scan=yes

*	internet_access=no/terminal/wifi/wired/yes
*	internet_access:fee=customers/free/no/yes
*	internet_access:ssid=
*	internet_access:operator=

*	start_date=
*	architect=
*	wikipedia=
*	wikidata=
*	wikimedia_commons=
*	image=
*	source=survey/local_knowledge/url
*	source:date=

# 1-Mapa
-Mapa basat en [Bicycle tags map](https://wiki.openstreetmap.org/wiki/Bicycle_tags_map)

-Amb modificacions de [Ramiro Balado](https://github.com/Qjammer)

-Versió nova Openlayers feta per [Ripollx](https://github.com/Ripollx)

-Possibilitat d'afegir JSONs feta per [Hugoren Martinako ](https://github.com/Crashillo)

-Consultes complexes afegides per [Ismael Luceno](https://github.com/ismaell)

-Idees addicionals per [yopaseopor](https://github.com/yopaseopor) i Hortacalaf

El mapa ens permet la mostra d'elements determinats personalitzables tenint com a fons varis mapes diferents.

Directament es pot modificar la pàgina editant els arxius corresponents:

*    index.html conté l'esquelet de la pàgina.
*    index.js conté l'orquestador per utilitzar OpenLayers (només es requereix modificar per afegir noves funcionalitats).
*    config.js conté la definició de les capes, idioma i característiques que es volen mostrar.

# 2-Mapcomplete

Utilitzem un repte personalitzat de [Mapcomplete](https://mapcomplete.osm.be)-[font]-(https://github.com/pietervdvn/MapComplete) per tal d'aportar les dades que faltin, fent-ho en idioma "natural" (no de la màquina ni d'Openstreetmap) i des de qualsevol dispositiu mòbil amb l'únic requisit de [registrar-se com a usuari/a d'OpenStreetMap](https://www.openstreetmap.org/login).

# [Exemple del mapa funcionant](http://yopaseopor.github.io/osmlitmap)
# [Completador de Mapcomplete sobre biblioteques](https://mapcomplete.osm.be/theme.html?userlayout=https://raw.githubusercontent.com/yopaseopor/mcquests/main/libraries.json)

# Agraïments
A la [Comunitat Catalana d'Openstreetmap](https://t.me/osmcat) i a [OSM España](https://t.me/osmes) per permetre aquests mapes, així com als desenvolupadors que hi han col·laborat.

A Hortacalaf per inspirar un mapa sobre biblioteques.

