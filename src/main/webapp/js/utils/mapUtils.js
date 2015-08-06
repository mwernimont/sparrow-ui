/*jslint browser: true */
/*global ol*/
define([
	"openlayers"
//	"olLayerSwitcher"
], function (ol/*, olLayerSwitcher*/) {
	"use strict";
	var self = {};
	self.ZYX = '/MapServer/tile/{z}/{y}/{x}';

	self.CONUS_EXTENT = [-14819398.304233, -92644.611414691, -6718296.2995848, 9632591.3700111];

	self.createWorldStreetMapBaseLayer = function (isVisible) {
		return new ol.layer.Tile({
			title: 'World Street Map',
			type: 'base',
			visible: isVisible,
			source: new ol.source.XYZ({
				attributions: [
					new ol.Attribution({
						html: 'Esri, DeLorme, FAO, IFL, NGA, NOAA, USGS, EPA'
					})
				],
				url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map" + self.ZYX
			})
		});
	};

	self.createStamenTonerBaseLayer = function (isVisible) {
		return new ol.layer.Tile({
			title: 'Light Gray Toner Map',
			type: 'base',
			visible: isVisible,
			source: new ol.source.Stamen({
				attributions: [
					new ol.Attribution({
						html: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
					})
				],
				layer: 'toner-lite'
			})
		});
	};

	self.createWorldTopoBaseLayer = function (isVisible) {
		return new ol.layer.Tile({
			title: 'World Topo Map',
			type: 'base',
			visible: isVisible,
			source: new ol.source.XYZ({
				attributions: [
					new ol.Attribution({
						html: 'Esri, DeLorme, FAO, NOAA, EPA'
					})
				],
				url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map' + self.ZYX
			})
		});
	};

	self.createWorldImageryLayer = function (isVisible) {
		return new ol.layer.Tile({
			title: 'World Imagery',
			type: 'base',
			visible: isVisible,
			source: new ol.source.XYZ({
				attributions: [
					new ol.Attribution({
						html: 'Earthstar Geographics'
					})
				],
				url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery' + self.ZYX
			})
		});
	};
	
	return self;

});


