import './style.css';
// TODO: required imports
import { Countries } from './models/Countries.enum.js';
const countrySelect = (document.getElementById('country-slt'));
const medalSelect = (document.getElementById('medal-slt'));
const sportSelect = (document.getElementById('sport-slt'));
const addButton = document.getElementById('add-btn');
//TODO: add an eventlistener to the button to trigger addMedal
let countries = [];
init();
// This function sets up some display elements
function init() {
    let count = 0;
    for (let c in Countries) {
        if (isNaN(Number(c))) {
            let newOption = document.createElement('option');
            newOption.innerHTML = c;
            newOption.value = count.toString();
            count++;
            countrySelect.add(newOption);
        }
    }
    //TODO: populate the Sport select
    //TODO: populate the Medal select
}
// This function adds a medal to the countries tally
function addMedal() {
    //TODO: complete this function
    displayTable();
}
// This function refreshes the medal tally table
function displayTable() {
    const resultsBody = (document.getElementById('results-body'));
    let newBody = (document.createElement('tbody'));
    newBody.id = 'results-body';
    // TODO: create the rows required for the new table body element
    // replaces the old tbody with the new one created above
    resultsBody.parentNode.replaceChild(newBody, resultsBody);
}
