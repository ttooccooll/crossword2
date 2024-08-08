(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Church leader and school of fish",
					answer: "polycarp",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "Means of learning and hitting the doorbell twice",
					answer: "reading",
					position: 7,
					orientation: "across",
					startx: 6,
					starty: 2
				},
				{
					clue: "Type of nightclub and the hat of an Uber competitor",
					answer: "cabaret",
					position: 9,
					orientation: "across",
					startx: 4,
					starty: 3
				},
				{
					clue: "one version of your favorite layer two and the idea that what has been will continue to be",
					answer: "lnd",
					position: 11,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "more isolated and an ever more isolated English king",
					answer: "lonelier",
					position: 13,
					orientation: "across",
					startx: 5,
					starty: 4
				},
				{
					clue: "moved faster on foot and an exclamation upon seeing the dino king",
					answer: "outran",
					position: 14,
					orientation: "across",
					startx: 3,
					starty: 5
				},
				{
					clue: "procedure to conjoin statements and that last word",
					answer: "and",
					position: 15,
					orientation: "across",
					startx: 1,
					starty: 6
				},
				{
					clue: "a type of protein and you're just not going to get this one, do it last",
					answer: "relt",
					position: 16,
					orientation: "across",
					startx: 5,
					starty: 6
				},
				{
					clue: "mind power and album by Miles",
					answer: "esp",
					position: 17,
					orientation: "across",
					startx: 10,
					starty: 6
				},
				{
					clue: "moral obligation and excrament",
					answer: "duty",
					position: 19,
					orientation: "across",
					startx: 4,
					starty: 7
				},
				{
					clue: "you don't want to give me this and the heart of the leader of the CCP",
					answer: "inch",
					position: 20,
					orientation: "across",
					startx: 9,
					starty: 7
				},
				{
					clue: "popular car and before you and me",
					answer: "prius",
					position: 21,
					orientation: "across",
					startx: 3,
					starty: 8
				},
				{
					clue: "SOL on sitting space and that which inspires lament",
					answer: "sro",
					position: 22,
					orientation: "across",
					startx: 10,
					starty: 8
				},
				{
					clue: "having to do with the universe and wearing a costume to look Irish",
					answer: "cosmic",
					position: 23,
					orientation: "across",
					startx: 3,
					starty: 9
				},
				{
					clue: "the center of it all and the old man",
					answer: "hub",
					position: 24,
					orientation: "across",
					startx: 10,
					starty: 9
				},
				{
					clue: "sound my car makes and sound I make when my car makes other sounds",
					answer: "hmm",
					position: 25,
					orientation: "across",
					startx: 3,
					starty: 10
				},
				{
					clue: "the Mrs. and a couple of polinators",
					answer: "bibi",
					position: 26,
					orientation: "across",
					startx: 9,
					starty: 10
				},
				{
					clue: "your favorite nurse on a bad day and a bird's home coupled with an examination",
					answer: "anesthetist",
					position: 27,
					orientation: "across",
					startx: 1,
					starty: 12
				},
				{
					clue: "legislature and an average expression of grief",
					answer: "parliament",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "a home for trees and a pirate's declaration of intent to dine on a wild animal",
					answer: "arboretum",
					position: 2,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "another attempt to break down a topic and an Irish women's backstreet sibling",
					answer: "reanalysis",
					position: 3,
					orientation: "down",
					startx: 7,
					starty: 1
				},
				{
					clue: "guardian an average tree person",
					answer: "parent",
					position: 4,
					orientation: "down",
					startx: 8,
					starty: 1
				},
				{
					clue: "memberships to municipalities and the calming boats thereof",
					answer: "citizenships",
					position: 5,
					orientation: "down",
					startx: 10,
					starty: 1
				},
				{
					clue: "desire to avoid the crowd and justaposing agriculture with soup and a lighter",
					answer: "agoraphobic",
					position: 6,
					orientation: "down",
					startx: 12,
					starty: 1
				},
				{
					clue: "computer company and that's all you get on this one",
					answer: "del",
					position: 8,
					orientation: "down",
					startx: 9,
					starty: 2
				},
				{
					clue: "most bitcoiners don't believe in it and every completely correct doctrine",
					answer: "altruism",
					position: 10,
					orientation: "down",
					startx: 5,
					starty: 3
				},
				{
					clue: "MIC spender and nickname I gave Garfield's buddy",
					answer: "dod",
					position: 12,
					orientation: "down",
					startx: 3,
					starty: 4
				},
				{
					clue: "never wanted by Tender, Loving, Care and a sacred dung beetle",
					answer: "scrub",
					position: 18,
					orientation: "down",
					startx: 11,
					starty: 6
				},
				{
					clue: "olfactory delicacies and one Italian donkey",
					answer: "aromas",
					position: 19,
					orientation: "down",
					startx: 4,
					starty: 7
				},
				{
					clue: "popular sweepstakes and a fruit from Georgia",
					answer: "pch",
					position: 21,
					orientation: "down",
					startx: 3,
					starty: 8
				},
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)

let toggleState = 0;
let usdPrice = null;
let blockHeight = null;
let satFee = null;

async function fetchPrice() {
	try {
		const response = await fetch('https://mempool.space/api/v1/prices');
		const data = await response.json();
		usdPrice = data.USD.toFixed();
	} catch (error) {
		console.error('Error fetching the price:', error);
	}
}

async function fetchBlock() {
	try {
		const response = await fetch('https://blockchain.info/q/getblockcount');
		const data = await response.text();
		blockHeight = parseInt(data).toFixed(0);
	} catch (error) {
		console.error('Error fetching the price:', error);
	}
}

async function fetchFee() {
	try {
		const response = await fetch('https://mempool.space/api/v1/fees/recommended');
		const data = await response.json();
		satFee = data.halfHourFee.toFixed();
		console.log(satFee);
	} catch (error) {
		console.error('Error fetching the price:', error);
	}
}

async function togglePrice() {
	if (!usdPrice) {
		await fetchPrice();
	}
	if (!blockHeight) {
		await fetchBlock();
	}
	if (!satFee) {
		await fetchFee();
	}

	const button = document.querySelector('.onesat');
	switch (toggleState) {
		case 0:
			button.textContent = `${blockHeight}`;
			break;
		case 1:
			button.textContent = `${satFee} sat/vB`;
			break;
		case 2:
			button.textContent = `$${usdPrice}`;
			break;
		case 3:
			button.textContent = '1sat=1sat';
			break;
	}
	toggleState = (toggleState + 1) % 4;
}