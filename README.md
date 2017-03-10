
### Install
```javascript
npm install --save tiny-merges
```

### Use
```javascript
import { merge, mergeSet } from 'tiny-merges'

var object1 = { 'a': { 'user': { 'info': { 'age': 23}}}, 'b': [5, 2] };
var object2 = { 'a': { 'user': { 'info': { 'name': 'Jack'}}}, 'b': [4, 5] };
var object3 = { 'a': { 'user': { 'info': { 'sex': 'man'}}}, 'b': [4, 5] };

/* Array concat */
merge(object, object2, object3);
// {
//   "a":
//   {
//     "user":
//     {
//       "info":
//       {
//         "age":23,
//         "name":"Jack",
//         "sex":"man"
//       }
//     }
//   },
//   "b":[5,2,4,5,4,5]
// }

/* Array set */
mergeSet(object, object2, object3);
// {
//   "a":
//   {
//     "user":
//     {
//       "info":
//       {
//         "age":23,
//         "name":"Jack",
//         "sex":"man"
//       }
//     }
//   },
//   "b":[5,2,4]
// }


```
