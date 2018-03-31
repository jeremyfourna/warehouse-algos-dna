const R = require('ramda');

const {
  endAtALocation,
  locationsListToMatrixData,
  startFromALocation,
  pathBtwTwoLocations,
  pathBtwManyLocations
} = require('warehouse-picker-tour');
const { toDNA, toComplementaryDNA } = require('to-dna');

function shortestPathViaDNA(matrix, sortingArea, locationsList, functionToApply) {
  const sortingAreaDNAed = toDNA(sortingArea);
  const locationsListDNAed = R.map(toDNA, locationsList);
  console.log(locationsList, locationsListDNAed);
  return [];
}

exports.shortestPathViaDNA = R.curry(shortestPathViaDNA);
