TODO write this.

Note do not use this - it is only a POC.

`npm install frontity-brs-components`

TODOD

```js
const processorsConfig = [
  {
    tag: "practitioner-packages-table",
    component: PractitionerPackagesTable,
  },
  {
    tag: "edit-practitioner-profile",
    component: EditProfile,
  },
];

const makeProcessors = (config) =>
  config.reduce((processor, item) => {
    return makeProcessor(item.tag, item.component);
  }, {});
```
