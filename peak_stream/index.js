const StreamFromArray = require('./streamFromArray');

const peaks = [
  'Tallac',
  'Ralston',
  'Rubicon',
  'Twin Peaks',
  'Castle Peak',
  'Rose',
  'Freel Peak'
];

const peakStream = new StreamFromArray(peaks);

peakStream.on('data', (chunk) => console.log(chunk));
peakStream.on('end', () => console.log('done!'))