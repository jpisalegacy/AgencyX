$(document).foundation();

// JavaScript Document

(function() {
	"use strict";
	console.log("SEAF Fired");
	//variables

	var homeLink = document.querySelector('#homeLink');
	var teamLink = document.querySelector('#teamLink');
	var contactLink = document.querySelector('#contactLink');

	console.log(homeLink);

	//functions

	function homeShow(){
		//console.log('homeShow');
		var allHome = document.querySelector('#home');
		var allTeam = document.querySelector('#team');
		var allContact = document.querySelector('#contact');

		if(allHome.classList = "row hide"){
			allHome.classList.remove("hide");
		}

		if(allTeam.classList != "row hide"){
			allTeam.classList.add("hide");
		}

		if(allContact.classList != "row hide"){
			allContact.classList.add("hide");
		}
		
	}

	function teamShow(){
		//console.log('homeShow');
		var allHome = document.querySelector('#home');
		var allTeam = document.querySelector('#team');
		var allContact = document.querySelector('#contact');

		if(allTeam.classList = "row hide"){
			allTeam.classList.remove("hide");
		}

		if(allHome.classList != "row hide"){
			allHome.classList.add("hide");
		}

		if(allContact.classList != "row hide"){
			allContact.classList.add("hide");
		}
		
	}

	function contactShow(){
		//console.log('homeShow');
		var allHome = document.querySelector('#home');
		var allTeam = document.querySelector('#team');
		var allContact = document.querySelector('#contact');

		if(allContact.classList = "row hide"){
			allContact.classList.remove("hide");
		}

		if(allTeam.classList != "row hide"){
			allTeam.classList.add("hide");
		}

		if(allHome.classList != "row hide"){
			allHome.classList.add("hide");
		}
		
	}

	


	//listeners	

	homeLink.addEventListener("click",homeShow,false);
	teamLink.addEventListener("click",teamShow,false);
	contactLink.addEventListener("click",contactShow,false);
	
})();