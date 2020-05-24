export default function getStatNameByTime(timeDiff) {
  const statNames = ['offBeat', 'good', 'excellent'];

  if (timeDiff > 0.2) {
    return statNames[0];
  } if (timeDiff > 0.1) {
    return statNames[1];
  }
  return statNames[2];
}
