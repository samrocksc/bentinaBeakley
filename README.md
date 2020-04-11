# Bentina Beakley!

I basically curry functions in a super opinionated way. I originally made this inside of [boulangerie](https://github.com/samrocksc/boulangerie), but found i was using this function more than that module....so, i made it.

You can pass in sync, or async functions.

```javascript
const currier = require('bentinabeakley');

const buildAdapterFunc = (build, service, output) => {
  const totalArray = [...build, ...service, ...output];
  return async initialParam => currier(initialParam).chain(totalArray).execute();
};

await buildAdapterFunc(
  [
    async () => {
      console.log('a build step');
    },
  ],
  [
    () => {
      console.log('a service step');
    },
  ],
  [
    () => {
      console.log('an output step');
    },
    () => true,
  ]
); // returns true
```
