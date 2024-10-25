| Feature         | `var`                       | `let`                     | `const`                      |
|-----------------|-----------------------------|----------------------------|------------------------------|
| Scope           | Local                    | Block                      | Block                        |
| Hoisting        | Yes (with undefined)         | Yes (but in Temporal Dead Zone) | Yes (but in Temporal Dead Zone) |
| Re-declaration  | Yes                          | No                         | No                           |
| Re-assignment   | Yes                          | Yes                        | No                           |
| Best for        | Legacy code                  | Variables that can change   | Constants or references that won’t change |
