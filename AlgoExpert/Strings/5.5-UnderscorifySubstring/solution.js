function underscorifySubstring(string, substring) {
  if (string === null) return null;
  if (substring === null) return string;

  const locations = collapse(getLocations(string, substring));
  return underscorify(string, locations);
}

function getLocations(string, substring) {
  const locations = [];
  for (let i = 0; i < string.length; i++) {
    const startIdx = string.indexOf(substring, i);
    if (startIdx !== -1) {
      locations.push([startIdx, startIdx + substring.length]);
      i = startIdx;
    } else {
      break;
    }
  }
  return locations;
}

function collapse(locations) {
  if (!locations.length) return locations;
  const newLocations = [locations[0]];
  let previous = newLocations[0]; //
  for (let i = 1; i < locations.length; i++) {
    const current = locations[i];
    if (previous[1] >= current[0]) {
      previous[1] = current[1];
    } else {
      newLocations.push(current);
      previous = current;
    }
  }
  return newLocations;
}

function underscorify(string, locations) {
  if (!locations.length) return string;

  let locationsIdx = 0;
  let stringIdx = 0;
  let inBetweenUnderscores = false;
  const finalChars = [];
  let i = 0;
  while (stringIdx < string.length && locationsIdx < locations.length) {
    if (stringIdx === locations[locationsIdx][i]) {
      finalChars.push('_');
      inBetweenUnderscores = !inBetweenUnderscores;
      if (!inBetweenUnderscores) locationsIdx++;
      i = i === 1 ? 0 : 1;
    }
    finalChars.push(string[stringIdx]);
    stringIdx++;
  }

  if (locationsIdx < locations.length) {
    finalChars.push('_');
  } else if (stringIdx < string.length) {
    finalChars.push(string.slice(stringIdx));
  }

  return finalChars.join('');
}
