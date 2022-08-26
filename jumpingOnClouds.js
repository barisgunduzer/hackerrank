function jumpingOnClouds(c, k) {
  let energy = 100;
  let clouds = c;
  let jumpPower = k;

  let [cloudIndex, jumpedCloudIndex] = [-1, -1];
  let [jumpTo, cloudType] = [0, 0];

  while (jumpedCloudIndex !== 0) {
    cloudIndex++;
    jumpTo += jumpPower;
    jumpedCloudIndex = jumpTo % clouds.length;
    cloudType = clouds[jumpedCloudIndex];
    energy = cloudType === 1 ? energy - 3 : energy - 1;
  }

  return energy;
}
