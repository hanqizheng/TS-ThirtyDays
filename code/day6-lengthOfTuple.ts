/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #easy #tuple
  
  ### Question
  
  For given a tuple, you need create a generic `Length`, pick the length of the tuple
  
  For example
  
  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
  
  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```
  
  > View on GitHub: https://tsch.js.org/18
*/


/* _____________ Your Code Here _____________ */

type Length<T extends any> = T extends { length: unknown } ? T['length'] : never;


/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type cases = [
  Expect<Equal<Length<tesla>, 4>>,
  Expect<Equal<Length<spaceX>, 5>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/18/answer
  > View solutions: https://tsch.js.org/18/solutions
  > More Challenges: https://tsch.js.org
*/

