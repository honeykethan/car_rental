;(function($) {
    "use strict";


	/*----------------------------------------------------*/
	/*  Language Flag js 
	/*----------------------------------------------------*/
	function createByJson() {
	var jsonData = [					
		{description:'Choos your payment gateway', value:'', text:'Payment Gateway'},					
		{image:'../img/country-aus.png', description:'My life. My card...', value:'amex', text:'Amex'},
		{image:'../img/country-aus.png', description:'It pays to Discover...', value:'Discover', text:'Discover'},
		{image:'../img/country-aus.png', title:'For everything else...', description:'For everything else...', value:'Mastercard', text:'Mastercard'},
		{image:'../img/country-aus.png', description:'Sorry not available...', value:'cash', text:'Cash on devlivery', disabled:true},
		{image:'../img/country-aus.png', description:'All you need...', value:'Visa', text:'Visa'},
		{image:'../img/country-aus.png', description:'Pay and get paid...', value:'Paypal', text:'Paypal'}
	];
	$("#byjson").msDropDown({byJson:{data:jsonData, name:'payments2'}}).data("dd");
	}
	$(document).ready(function(e) {		
	//no use
	try {
	var pages = $("#pages").msDropdown({on:{change:function(data, ui) {
		var val = data.value;
		if(val!="")
			window.location = val;
	}}}).data("dd");

	var pagename = document.location.pathname.toString();
	pagename = pagename.split("/");
	pages.setIndexByValue(pagename[pagename.length-1]);
	$("#ver").html(msBeautify.version.msDropdown);
	} catch(e) {
	//console.log(e);	
	}
	$("#ver").html(msBeautify.version.msDropdown);

	//convert
	$(".language_drop").msDropdown({roundedBorder:false});
	createByJson();
	$("#tech").data("dd");
	});
	function showValue(h) {
	console.log(h.name, h.value);
	}
	$("#tech").change(function() {
	console.log("by jquery: ", this.value);
	})
	
	
})(jQuery)