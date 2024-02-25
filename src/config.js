/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Capes/Layers',
		editWith: 'Edita:',
		openWith: 'Obre/Abre/Open:',
		checkTools: 'Valida:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Node/Nodo:',
		noNodesFound: 'No info.',
		wayLabel: 'Via/Way:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = false;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://mijndev.openstreetmap.nl/~ligfietser/fiets/api/interpreter/';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			group: 'test',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap B&W',
			group: 'test',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>',
				//url: 'https://toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png'
				url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap France',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenMapSurfer',
			iconSrc: imgSrc + 'openroute_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>, powered by <a href="https://mapsurfernet.com/" target="_blank">MapSurfer.NET</a>',
				url: 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN - PNOA - Actual',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'http://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'PNOA'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_mapesbase/wms/service?',
				params: {'LAYERS': 'orto25c', 'VERSION': '1.1.1'}
			}),
			visible: false

		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [


		{
			group: 'Accessibilitat',
			title: 'Biblioteca adaptada',
			query: '(node["amenity"="library"]["wheelchair"="yes"]({{bbox}});node(w);way["amenity"="library"]["wheelchair"="yes"]({{bbox}});node(w);relation["amenity"="library"]["wheelchair"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/wheelchair_yes.svg',
			iconStyle: 'background-color:#00FF00',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#00FF00',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
				var style2 = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: "Sí",
								color: 'rgba(0,128,0,0.4)',
								font: '10px Arial',
								offsetX : 0,
								offsetY : 15
							}),
					fill: fill,
					stroke: stroke
				});
				return style2;
			}

},

		{
			group: 'Accessibilitat',
			title: 'Biblioteca designada',
			query: '(node["amenity"="library"]["wheelchair"="designated"]({{bbox}});node(w);way["amenity"="library"]["wheelchair"="designated"]({{bbox}});node(w);relation["amenity"="library"]["wheelchair"="designated"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/wheelchair_designated.svg',
			iconStyle: 'background-color:#00FF00',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,255,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Biblioteca No Adaptada',
			query: '(node["amenity"="library"]["wheelchair"="no"]({{bbox}});node(w);way["amenity"="library"]["wheelchair"="no"]({{bbox}});node(w);relation["amenity"="library"]["wheelchair"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/wheelchair_no.svg',
			iconStyle: 'background-color:#00FF00',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,255,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Biblioteca Adaptada parcialment',
			query: '(node["amenity"="library"]["wheelchair"="limited"]({{bbox}});node(w);way["amenity"="library"]["wheelchair"="limited"]({{bbox}});node(w);relation["amenity"="library"]["wheelchair"="limited"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/wheelchair_limited.svg',
			iconStyle: 'background-color:#00FF00',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,255,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Biblioteca amb adaptació desconeguda',
			query: '(node["amenity"="library"][!"wheelchair"]({{bbox}});node(w);way["amenity"="library"][!"wheelchair"]({{bbox}});node(w);relation["amenity"="library"][!"wheelchair"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/wheelchair_unknown.svg',
			iconStyle: 'background-color:#00FF00',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,255,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},

		{
			group: 'Tipus',
			title: 'Públic en general',
			query: '(node["amenity"="library"]["library"="public"]({{bbox}});node(w);way["amenity"="library"]["library"="public"]({{bbox}});node(w);relation["amenity"="library"]["library"="public"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/library_public.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,255,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,255,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},

		{
			group: 'Tipus',
			title: 'Cinema',
			query: '(node["amenity"="library"]["library"="cinema"]({{bbox}});node(w);way["amenity"="library"]["library"="cinema"]({{bbox}});node(w);relation["amenity"="library"]["library"="cinema"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/library_cinema.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(255,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},

		{
			group: 'Tipus',
			title: 'Infantil',
			query: '(node["amenity"="library"]["library"="children"]({{bbox}});node(w);way["amenity"="library"]["library"="children"]({{bbox}});node(w);relation["amenity"="library"]["library"="children"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/library_children.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(64,224,208,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(64,224,208,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},

		{
			group: 'Tipus',
			title: 'Estudiantil',
			query: '(node["amenity"="library"]["library"="students"]({{bbox}});node(w);way["amenity"="library"]["library"="students"]({{bbox}});node(w);relation["amenity"="library"]["library"="students"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/library_students.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(160,82,45,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(160,82,45,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},

		{
			group: 'Tipus',
			title: 'Recerca',
			query: '(node["amenity"="library"]["library"="research"]({{bbox}});node(w);way["amenity"="library"]["library"="research"]({{bbox}});node(w);relation["amenity"="library"]["library"="research"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/library_research.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,128,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},

		{
			group: 'Tipus',
			title: 'Universitària',
			query: '(node["amenity"="library"]["library"="university"]({{bbox}});node(w);way["amenity"="library"]["library"="university"]({{bbox}});node(w);relation["amenity"="library"]["library"="university"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/library_university.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(255,165,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},

		{
			group: 'Tipus',
			title: 'Acadèmic',
			query: '(node["amenity"="library"]["library"="academic"]({{bbox}});node(w);way["amenity"="library"]["library"="academic"]({{bbox}});node(w);relation["amenity"="library"]["library"="academic"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/library_academic.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128,0,128,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(128,0,128,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},

		{
			group: 'Tipus',
			title: 'Desconegut (Falta informació)',
			query: '(node["amenity"="library"][!"library"]({{bbox}});node(w);way["amenity"="library"][!"library"]({{bbox}});node(w);relation["amenity"="library"][!"library"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/library_unknown.svg',
			iconStyle: 'background-color:#000000',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Tots',
			query: '(node["amenity"="library"]["books"~"all"]({{bbox}});node(w);way["amenity"="library"]["books"~"all"]({{bbox}});node(w);relation["amenity"="library"]["books"~"all"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_all.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Antiquari',
			query: '(node["amenity"="library"]["books"~"antiquarian"]({{bbox}});node(w);way["amenity"="library"]["books"~"antiquarian"]({{bbox}});node(w);relation["amenity"="library"]["books"~"antiquarian"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_antiquarian.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Arquitectura',
			query: '(node["amenity"="library"]["books"~"architecture"]({{bbox}});node(w);way["amenity"="library"]["books"~"architecture"]({{bbox}});node(w);relation["amenity"="library"]["books"~"architecture"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_architecture.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Fine Art',
			query: '(node["amenity"="library"]["books"~"fine_art"]({{bbox}});node(w);way["amenity"="library"]["books"~"fine_art"]({{bbox}});node(w);relation["amenity"="library"]["books"~"fine_art"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_fine_art.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Art',
			query: '(node["amenity"="library"]["books"~"art"]({{bbox}});node(w);way["amenity"="library"]["books"~"art"]({{bbox}});node(w);relation["amenity"="library"]["books"~"art"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_art.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Ciències de la comunicació',
			query: '(node["amenity"="library"]["books"~"communication_science"]({{bbox}});node(w);way["amenity"="library"]["books"~"communication_science"]({{bbox}});node(w);relation["amenity"="library"]["books"~"communication_science"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_communication_science.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Estudis de comunicació',
			query: '(node["amenity"="library"]["books"~"communication_studies"]({{bbox}});node(w);way["amenity"="library"]["books"~"communication_studies"]({{bbox}});node(w);relation["amenity"="library"]["books"~"communication_studies"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_communication_studies.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Turisme',
			query: '(node["amenity"="library"]["books"~"tourism"]({{bbox}});node(w);way["amenity"="library"]["books"~"tourism"]({{bbox}});node(w);relation["amenity"="library"]["books"~"tourism"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_tourism.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Geografia',
			query: '(node["amenity"="library"]["books"~"tourism_geography"]({{bbox}});node(w);way["amenity"="library"]["books"~"tourism_geography"]({{bbox}});node(w);relation["amenity"="library"]["books"~"tourism_geography"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_tourism_geography.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Enginyeria informàtica',
			query: '(node["amenity"="library"]["books"~"computer_engineering"]({{bbox}});node(w);way["amenity"="library"]["books"~"computer_engineering"]({{bbox}});node(w);relation["amenity"="library"]["books"~"computer_engineering"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_computer_engineering.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Enginyeria de Telecomunicació',
			query: '(node["amenity"="library"]["books"~"telecommunications_engineering"]({{bbox}});node(w);way["amenity"="library"]["books"~"telecommunications_engineering"]({{bbox}});node(w);relation["amenity"="library"]["books"~"telecommunications_engineering"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_telecommunications_engineering.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Economia',
			query: '(node["amenity"="library"]["books"~"economics"]({{bbox}});node(w);way["amenity"="library"]["books"~"economics"]({{bbox}});node(w);relation["amenity"="library"]["books"~"economics"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_economics.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Administració i direcció d\'empreses',
			query: '(node["amenity"="library"]["books"~"business_administration"]({{bbox}});node(w);way["amenity"="library"]["books"~"business_administration"]({{bbox}});node(w);relation["amenity"="library"]["books"~"business_administration"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_business_administration.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Ciències de l\'educació',
			query: '(node["amenity"="library"]["books"~"education_sciences"]({{bbox}});node(w);way["amenity"="library"]["books"~"education_sciences"]({{bbox}});node(w);relation["amenity"="library"]["books"~"education_sciences"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_education_sciences.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Psicologia',
			query: '(node["amenity"="library"]["books"~"psychology"]({{bbox}});node(w);way["amenity"="library"]["books"~"psychology"]({{bbox}});node(w);relation["amenity"="library"]["books"~"psychology"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_psychology.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Ciències de la salut',
			query: '(node["amenity"="library"]["books"~"health_sciences"]({{bbox}});node(w);way["amenity"="library"]["books"~"health_sciences"]({{bbox}});node(w);relation["amenity"="library"]["books"~"health_sciences"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_health_sciences.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Enginyeria industrial',
			query: '(node["amenity"="library"]["books"~"industrial_engineering"]({{bbox}});node(w);way["amenity"="library"]["books"~"industrial_engineering"]({{bbox}});node(w);relation["amenity"="library"]["books"~"industrial_engineering"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_industrial_engineering.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Dret',
			query: '(node["amenity"="library"]["books"~"law"]({{bbox}});node(w);way["amenity"="library"]["books"~"law"]({{bbox}});node(w);relation["amenity"="library"]["books"~"law"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_law.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Medicina',
			query: '(node["amenity"="library"]["books"~"medicine"]({{bbox}});node(w);way["amenity"="library"]["books"~"medicine"]({{bbox}});node(w);relation["amenity"="library"]["books"~"medicine"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_medicine.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Ciències',
			query: '(node["amenity"="library"]["books"~"sciences"]({{bbox}});node(w);way["amenity"="library"]["books"~"sciences"]({{bbox}});node(w);relation["amenity"="library"]["books"~"sciences"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_sciences.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Ciències naturals',
			query: '(node["amenity"="library"]["books"~"natural_sciences"]({{bbox}});node(w);way["amenity"="library"]["books"~"natural_sciences"]({{bbox}});node(w);relation["amenity"="library"]["books"~"natural_sciences"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_natural_sciences.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Fons documental',
			title: 'Ciències socials',
			query: '(node["amenity"="library"]["books"~"social_sciences"]({{bbox}});node(w);way["amenity"="library"]["books"~"social_sciences"]({{bbox}});node(w);relation["amenity"="library"]["books"~"social_sciences"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_social_sciences.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Fons documental',
			title: 'Mercat',
			query: '(node["amenity"="library"]["books"~"trade_studies"]({{bbox}});node(w);way["amenity"="library"]["books"~"trade_studies"]({{bbox}});node(w);relation["amenity"="library"]["books"~"trade_studies"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_trade_studies.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
},
		{
			group: 'Fons documental',
			title: 'Anarquisme',
			query: '(node["amenity"="library"]["books"~"anarchism"]({{bbox}});node(w);way["amenity"="library"]["books"~"anarchism"]({{bbox}});node(w);relation["amenity"="library"]["books"~"anarchism"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/books_anarchism.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Comunitat',
			query: '(node["amenity"="library"]["operator:type"="community"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="community"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="community"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_community.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Corporació',
			query: '(node["amenity"="library"]["operator:type"="corporation"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="corporation"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="corporation"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_corporation.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Fundació',
			query: '(node["amenity"="library"]["operator:type"="foundation"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="foundation"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="foundation"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_foundation.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Govern',
			query: '(node["amenity"="library"]["operator:type"="government"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="government"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="government"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_government.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Autoritat local',
			query: '(node["amenity"="library"]["operator:type"="local_authority"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="local_authority"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="local_authority"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_local_authority.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Privat',
			query: '(node["amenity"="library"]["operator:type"="private"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="private"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="private"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_private.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Privat (sense lucre)',
			query: '(node["amenity"="library"]["operator:type"="private_non_profit"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="private_non_profit"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="private_non_profit"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_private_non_profit.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Públic',
			query: '(node["amenity"="library"]["operator:type"="public"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="public"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="public"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_public.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Religiós',
			query: '(node["amenity"="library"]["operator:type"="religious"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="religious"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="religious"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_religious.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Universitat',
			query: '(node["amenity"="library"]["operator:type"="university"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="university"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="university"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_university.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Tipus d\'operador',
			title: 'Estatal',
			query: '(node["amenity"="library"]["operator:type"="statewide"]({{bbox}});node(w);way["amenity"="library"]["operator:type"="statewide"]({{bbox}});node(w);relation["amenity"="library"]["operator:type"="statewide"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/operator_statewide.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Visual-Sí',
			query: '(nwr["amenity"="library"]["access:blind"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_blind_yes.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Visual-Limitat',
			query: '(node["amenity"="library"]["access:blind"="limited"]({{bbox}});node(w);way["amenity"="library"]["access:blind"="limited"]({{bbox}});node(w);relation["amenity"="library"]["access:blind"="limited"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_blind_limited.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Visual-No',
			query: '(node["amenity"="library"]["access:blind"="no"]({{bbox}});node(w);way["amenity"="library"]["access:blind"="no"]({{bbox}});node(w);relation["amenity"="library"]["access:blind"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_blind_no.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Visual-Desconegut',
			query: '(node["amenity"="library"][!"access:blind"]({{bbox}});node(w);way["amenity"="library"][!"access:blind"]({{bbox}});node(w);relation["amenity"="library"][!"access:blind"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_blind_unknown.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,255,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Auditiu-Sí',
			query: '(node["amenity"="library"]["access:deaf"="yes"]({{bbox}});node(w);way["amenity"="library"]["access:deaf"="yes"]({{bbox}});node(w);relation["amenity"="library"]["access:deaf"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_deaf_yes.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Auditiu-Limitat',
			query: '(node["amenity"="library"]["access:deaf"="limited"]({{bbox}});node(w);way["amenity"="library"]["access:deaf"="limited"]({{bbox}});node(w);relation["amenity"="library"]["access:deaf"="limited"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_deaf_limited.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Auditiu-No',
			query: '(node["amenity"="library"]["access:deaf"="no"]({{bbox}});node(w);way["amenity"="library"]["access:deaf"="no"]({{bbox}});node(w);relation["amenity"="library"]["access:deaf"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_deaf_no.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Auditiu-Desconegut',
			query: '(node["amenity"="library"][!"access:deaf"]({{bbox}});node(w);way["amenity"="library"][!"access:deaf"]({{bbox}});node(w);relation["amenity"="library"][!"access:deaf"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_deaf_unknown.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,255,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Mental-Sí',
			query: '(node["amenity"="library"]["access:mental_disabled"="yes"]({{bbox}});node(w);way["amenity"="library"]["access:mental_disabled"="yes"]({{bbox}});node(w);relation["amenity"="library"]["access:mental_disabled"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_mental_disabled_yes.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Mental-Limitat',
			query: '(node["amenity"="library"]["access:mental_disabled"="limited"]({{bbox}});node(w);way["amenity"="library"]["access:mental_disabled"="limited"]({{bbox}});node(w);relation["amenity"="library"]["access:mental_disabled"="limited"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_mental_disabled_limited.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Mental-No',
			query: '(node["amenity"="library"]["access:mental_disabled"="no"]({{bbox}});node(w);way["amenity"="library"]["access:mental_disabled"="no"]({{bbox}});node(w);relation["amenity"="library"]["access:mental_disabled"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_mental_disabled_no.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Accessibilitat',
			title: 'Mental-Desconegut',
			query: '(node["amenity"="library"][!"mental_disabled"]({{bbox}});node(w);way["amenity"="library"][!"mental_disabled"]({{bbox}});node(w);relation["amenity"="library"][!"mental_disabled"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/access_mental_disabled_unknown.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,255,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Infantil',
			title: 'Sí Àrea infantil',
			query: '(node["amenity"="library"]["kids_area"="yes"]({{bbox}});node(w);way["amenity"="library"]["kids_area"="yes"]({{bbox}});node(w);relation["amenity"="library"]["kids_area"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/kids_yes.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Infantil',
			title: 'No Àrea infantil',
			query: '(node["amenity"="library"]["kids_area"="no"]({{bbox}});node(w);way["amenity"="library"]["kids_area"="no"]({{bbox}});node(w);relation["amenity"="library"]["kids_area"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/kids_no.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Infantil',
			title: 'Exterior',
			query: '(node["amenity"="library"]["kids_area"="outdoor"]({{bbox}});node(w);way["amenity"="library"]["kids_area"="outdoor"]({{bbox}});node(w);relation["amenity"="library"]["kids_area"="outdoor"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/kids_outdoor.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Infantil',
			title: 'Interior',
			query: '(node["amenity"="library"]["kids_area"="indoor"]({{bbox}});node(w);way["amenity"="library"]["kids_area"="indoor"]({{bbox}});node(w);relation["amenity"="library"]["kids_area"="indoor"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/kids_indoor.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Infantil',
			title: 'Supervisió sí',
			query: '(node["amenity"="library"]["kids_area:supervised"="yes"]({{bbox}});node(w);way["amenity"="library"]["kids_area:supervised"="yes"]({{bbox}});node(w);relation["amenity"="library"]["kids_area:supervised"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/kids_supervised_yes.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Infantil',
			title: 'Supervisió no',
			query: '(node["amenity"="library"]["kids_area:supervised"="no"]({{bbox}});node(w);way["amenity"="library"]["kids_area:supervised"="no"]({{bbox}});node(w);relation["amenity"="library"]["kids_area:supervised"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/kids_supervised_no.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Infantil',
			title: 'Pagament sí',
			query: '(node["amenity"="library"]["kids_area:fee"="sí"]({{bbox}});node(w);way["amenity"="library"]["kids_area:fee"="sí"]({{bbox}});node(w);relation["amenity"="library"]["kids_area:fee"="sí"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/kids_fee_yes.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
		{
			group: 'Infantil',
			title: 'Pagament no',
			query: '(node["amenity"="library"]["kids_area:fee"="no"]({{bbox}});node(w);way["amenity"="library"]["kids_area:fee"="no"]({{bbox}});node(w);relation["amenity"="library"]["kids_area:fee"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'libraries/kids_fee_no.svg',
			iconStyle: 'background-color:#FFFFFF',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,0,0.4)'
				});

				var stroke = new ol.style.Stroke({
					color: '#000000',
					width: 1.25
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,0,0,0.4)',
								font: '10px Verdana',
								offsetX : 0,
								offsetY : 30
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}

},
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'Changing table<br>Cambiador<br>Canviador',
			query: '(nwr["amenity"="library"]["changing_table"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 37, 180, 2  ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 37, 180, 2  ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 37, 180, 2  ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'No changing table<br>No cambiador<br>No canviador',
			query: '(nwr["amenity"="library"]["changing_table"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 202, 0, 0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 202, 0, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 202, 0, 0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'Limited changing table<br>Uso limitado<br>Ús limitat',
			query: '(nwr["amenity"="library"]["changing_table"="limited"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(243, 156, 18 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(243, 156, 18 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(243, 156, 18 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'Changing table fee<br>De pago<br>De pagament',
			query: '(nwr["amenity"="library"]["changing_table:fee"="yes"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(52, 152, 219 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(52, 152, 219,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(52, 152, 219 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'No changing table fee<br>Gratis<br>De franc',
			query: '(nwr["changing_table:fee"="no"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(125, 206, 160 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(125, 206, 160 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(125, 206, 160 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In wheelchair toilet<br>WC minusválidos<br>WC minusvàlids',
			query: '(nwr["changing_table:location"="wheelchair_toilet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 255, 165, 250 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 255, 165, 250 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In female toilet<br>WC mujeres<br>WC dones',
			query: '(nwr["changing_table:location"="female_toilet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 186, 74, 0 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 186, 74, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 186, 74, 0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In male toilet<br>WC hombres<br>WC homes',
			query: '(nwr["changing_table:location"="male_toilet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(223, 255, 0,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(223, 255, 0 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(223, 255, 0 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In unisex toilet<br>WC Unisex',
			query: '(nwr["changing_table:location"="unisex_toilet"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(204, 204, 255,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 204, 204, 255,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(204, 204, 255 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In a dedicated room<br>Habitación dedicada<br>Habitació dedicada',
			query: '(nwr["changing_table:location"="dedicated_room"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba( 255, 165, 250 ,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba( 255, 165, 250 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba( 255, 165, 250 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
			
{
			group: 'Changing_table|Cambiador|Canviador',
			title: 'In a room<br>Habitación<br>Habitació',
			query: '(nwr["changing_table:location"="room"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'base/circle.svg',
			iconStyle: 'background-color:rgba(100, 149, 237,1)',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(100, 149, 237 ,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(100, 149, 237 ,1)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Circle({
						fill: fill,
						stroke: stroke,
						radius: 5
					}),
							text: new ol.style.Text({
								text: name,
								offsetX : 0,
								offsetY : 20,
								fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,1)'
                        }),
						}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
 },
		{
			group: 'Test',
			title: 'Test',
			query: '(nwr["class:bicycle:mtb"="-3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#800000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(128,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(128,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		
		}
	],

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));
		//Mapcomplete editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Flibraries.json&language=ca#welcome', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapcomplete_logo.png', height: 20, width: 20})));
		
		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Latest OpenStreetMap Edits per Tile
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeBo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',normal', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));
		//OSMAnd
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSMAnd', href: 'https://osmand.net/go.html?lat=' + coordinateLL[1] + '&lon=' + coordinateLL[0] + '&z=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmand_logo.png', height: 20, width: 20})));

		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));

		return $.merge($.merge(edit, open), tool);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};
