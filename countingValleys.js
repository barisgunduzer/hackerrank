// Counting valleys (easy)

function countingValleys(steps, path) {
  // Write your code here
  let level = 0;
  let valleysHiked = 0;
  let belowSeaLevel = false;

  [...path].forEach((step) => {
    // Adjust current level of hike
    if (step === "D") {
      level -= 1;
    } else {
      level += 1;
    }

    if (level < 0) {
      belowSeaLevel = true;
    }

    if (belowSeaLevel && level === 0) {
      valleysHiked += 1;
      belowSeaLevel = false;
    }
  });

  return valleysHiked;
}
