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
			iconSrc: imgSrc + 'accessibilitat/wheelchair_yes.svg',
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
			}

},

		{
			group: 'Accessibilitat',
			title: 'Biblioteca designada',
			query: '(node["amenity"="library"]["wheelchair"="designated"]({{bbox}});node(w);way["amenity"="library"]["wheelchair"="designated"]({{bbox}});node(w);relation["amenity"="library"]["wheelchair"="designated"]({{bbox}});node(w););out meta;',
			iconSrc: imgSrc + 'accessibilitat/wheelchair_designated.svg',
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
			iconSrc: imgSrc + 'accessibilitat/wheelchair_no.svg',
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
			iconSrc: imgSrc + 'accessibilitat/wheelchair_limited.svg',
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
			iconSrc: imgSrc + 'accessibilitat/wheelchair_unknown.svg',
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
			iconSrc: imgSrc + 'libraries/libraries_public.svg',
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
			group: 'Tipus',
			title: 'Cinema',
			query: 'nwr[library=cinema][amenity=library]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'libraries/library_cinema.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'libraries/library_cinema.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Tipus',
			title: 'Infantil',
			query: 'nwr[library=children][amenity=library]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'libraries/library_children.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'libraries/library_children.svg'
					})
				});
				return style;
			}
		},
		{
			group: 'Tipus',
			title: 'Estudiants',
			query: 'nwr[library=students][amenity=library]({{bbox}});way(r)({{bbox}});node(w););out skel;',
			iconSrc: imgSrc + 'libraries/library_students.svg',
			style: function () {
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						scale: 0.04,
						src: imgSrc + 'libraries/library_students.svg'
					})
				});
				return style;
			}
		},

		{
			group: 'mtb',
			title: 'mtb=designated',
			query: '(nwr["wheelchair"="yes"]["amenity"="library"]({{bbox}}););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#003399',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,51,153,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,51,153,0.4)',
					width: 1
				});
				var style = new ol.style.Style({
					image: new ol.style.Icon({
						src: imgSrc + 'accessibilitat/wheelchair_yes.svg'
					}),
							text: new ol.style.Text({
								text: name,
								color: 'rgba(0,128,0,0.4)',
								font: '10px Arial',
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
			group: 'mtb',
			title: 'mtb=no',
			query: '(nwr["mtb"="no"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ff0000',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
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
								color: 'rgba(255,0,0,0.4)',
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb',
			title: 'mtb:type=crosscountry',
			query: '(nwr["mtb:type"="crosscountry"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ffc0cb',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,192,203,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(255,192,203,0.4)',
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
								color: 'rgba(0,128,0,0.4)',
								font: '14px Verdana',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb',
			title: 'mtb:type=allmountain',
			query: '(nwr["mtb:type"="allmountain"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ff00ff',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,255,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,255,0.4)',
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
								color: 'rgba(0,128,0,0.4)',
								font: '14px Gill Sans Extrabold',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb',
			title: 'mtb:type=downhill',
			query: '(nwr["mtb:type"="downhill"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#800080',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128,0,128,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(128,0,128,0.4)',
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
								color: 'rgba(255,0,0,0.4)',
								font: '12px Verdana',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb',
			title: 'mtb:type=freeride',
			query: '(nwr["mtb:type"="freeride"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#003399',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,51,153,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,51,153,0.4)',
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
								color: 'rgba(0,128,0,0.4)',
								font: '14px Gill Sans Extrabold',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb',
			title: 'mtb:type=trail',
			query: '(nwr["mtb:type"="trail"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#000080',
			style: function (feature) {
				var key_regex = /^name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(0,0,128,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(0,0,128,0.4)',
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
								color: 'rgba(0,128,0,0.4)',
								font: '14px Gill Sans Extrabold',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb',
			title: 'mtb:name (node)',
			query: '(node["mtb:name"][name]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#808080',
			style: function (feature) {
				var key_regex = /^mtb:name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128,128,128,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(128,128,128,0.4)',
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
								color: 'rgba(0,128,0,0.4)',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb',
			title: 'mtb:name (way)',
			query: '(wr["mtb:name"][name]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#808080',
			style: function (feature) {
				var key_regex = /^mtb:name$/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var fill = new ol.style.Fill({
					color: 'rgba(128,128,128,0.1)'
				});

				var stroke = new ol.style.Stroke({
					color: 'rgba(128,128,128,0.4)',
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
								color: 'rgba(0,128,0,0.4)',
								placement: 'line',
								offsetX : 0,
								offsetY : 12
							}),
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale=0',
			query: '(nwr["mtb:scale"="0"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale=1',
			query: '(nwr["mtb:scale"="1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale=2',
			query: '(nwr["mtb:scale"="2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale=3',
			query: '(nwr["mtb:scale"="3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale=4',
			query: '(nwr["mtb:scale"="4"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale=5',
			query: '(nwr["mtb:scale"="5"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
			iconStyle: 'background-color:#c23b22',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(194,59,34,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(194,59,34,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale=6',
			query: '(nwr["mtb:scale"="6"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot.png',
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
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:uphill=0',
			query: '(nwr["mtb:scale:uphill"="0"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:uphill=1',
			query: '(nwr["mtb:scale:uphill"="1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:uphill=2',
			query: '(nwr["mtb:scale:uphill"="2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:uphill=3',
			query: '(nwr["mtb:scale:uphill"="3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:uphill=4',
			query: '(nwr["mtb:scale:uphill"="4"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:uphill=5',
			query: '(nwr["mtb:scale:uphill"="5"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#c23b22',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(194,59,34,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(194,59,34,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:uphill=6',
			query: '(nwr["mtb:scale:uphill"="6"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
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
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:imba=0',
			query: '(nwr["mtb:scale:tdot2"="0"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/line.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:imba=1',
			query: '(nwr["mtb:scale:imba"="1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot2.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:imba=2',
			query: '(nwr["mtb:scale:imba"="2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot2.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:imba=3',
			query: '(nwr["mtb:scale:imba"="3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot2.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'mtb:scale:imba=4',
			query: '(nwr["mtb:scale:imba"="4"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tdot2.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'class:bicycle:mtb=3',
			query: '(nwr["class:bicycle:mtb"="3"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#00ff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(0,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(0,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'class:bicycle:mtb=2',
			query: '(nwr["class:bicycle:mtb"="2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#ffff00',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,255,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,255,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'class:bicycle:mtb=1',
			query: '(nwr["class:bicycle:mtb"="1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#ffe135',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,225,53,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,225,53,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'class:bicycle:mtb=0',
			query: '(nwr["class:bicycle:mtb"="0"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#ffa500',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,165,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,165,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'class:bicycle:mtb=-1',
			query: '(nwr["class:bicycle:mtb"="-1"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#ff0000',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(255,0,0,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(255,0,0,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'class:bicycle:mtb=-2',
			query: '(nwr["class:bicycle:mtb"="-2"]({{bbox}});node(w););out;',
			iconSrc: imgSrc + 'base/tlineline.png',
			iconStyle: 'background-color:#c23b22',
			style: function () {
				var fill = new ol.style.Fill({
					color: 'rgba(194,59,34,0.4)'
				});
				var stroke = new ol.style.Stroke({
					color: 'rgba(194,59,34,0.4)',
					width: 5
				});
				var style = new ol.style.Style({
					fill: fill,
					stroke: stroke
				});
				return style;
			}
		},
		{
			group: 'mtb:scale',
			title: 'class:bicycle:mtb=-3',
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
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete', href: 'https://mapcomplete.osm.be/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Flibraries.json&language=ca#welcome', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapcomplete_logo.png', height: 20, width: 20})));
		
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
