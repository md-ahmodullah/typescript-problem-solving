### An example of using union and intersection types in TypeScript.

## What is Union Type?

- In the typescript, the union type is the liberal one. That means, in union type, a variable can hold more than one type, and the value of the variable can be any one of several types. It is denoted using ( | ) pipe symbol. Still not clear? Let’s break it down.

![union_type_hover.png](https://i.ibb.co.com/pjt5BjmV/union-type-hover.png)

<aside>
💡

> _a variable can hold more than one type - string | number_

_Data_ variable hold two types, one is string type and another is number type.

```tsx
type Data = string | number;
```

</aside>

<aside>
💡

> _and the value of the variable can be any one of several types - string | number_

The value of _Data_ can be a string or a number.

```tsx
const data: Data = "Typescript"; // it's a string
const release: Data = 2012; // it's a number
```

</aside>

### What if we assign another type except our declaration?

- If we assign another type except our declaration, it will throw a type error. That’s the beauty of TypeScript. As we didn’t declare boolean as a value, it throws an error for assigning a boolean value. See in image.

![union_type_test.png](https://i.ibb.co.com/G43vgv8D/union-type-test.png)

<hr />

### What is Intersection Type?

- In the typescript, the intersection type is like an arrogant. That means, in the intersection type, a variable can also hold more than one type, but the value of the variable must satisfy all the types at once. It is denoted using ( &) ampersand symbol. Still not clear? Let’s break it down.

![intersection_type_hover2.png](https://i.ibb.co.com/b5KwnKSR/intersection-type-hover2.png)

<aside>
💡

> _a variable can hold more than one type - User & Role_

_Data_ variable hold two types, one is User type and another is Role type.

```tsx
type User = { name: string }; // User type
type Role = { role: "admin" }; // Role Type
type Leader = User & Role; // intersecting between User & Role Type
```

</aside>

<aside>
💡

> _but the value of the variable must satisfy all the types at once- User & Role_

we must have to assign both value of User (name: "Mr. Thingumbob") and Role (role: "admin").

```tsx
const leader: Leader = { name: "Mr. Thingumbob", role: "admin" };
```

</aside>

### What if we don’t assign a required type?

- If we don’t assign a required type, it will throw a type error. That’s the core benifit of using TypeScript. As we declared Role as a type, but we didn’t assign it, typescript throws an error for not assigning a required type. See in image, ‘volunteer variable which intersects Leader type but do not provide Role type.

![intersection_type_hover2.png](https://i.ibb.co.com/fzd2qHFq/intersection-type-test.png)

<hr />

### What are some differences between interfaces and types in TypeScript?

### Interface VS Type

- `type` and `interface` are used to describe the shape and structure of data. But there are some difference between them.

| Feature             | `type`                           | `interface`                      |
| ------------------- | -------------------------------- | -------------------------------- |
| Declaration merging | No                               | Yes                              |
| Extending           | using intersection ( & )         | using `extends`                  |
| Usage               | Both Primitive and Non-primitive | Non-primitive (object and class) |

<aside>
💡

Let’s discuss it briefly.

</aside>

### Declaration merging

When we can define multiple interfaces with the same name is called declaration merging. Typescript will merge the same named interfaces and combined the properties and methods.

```tsx
interface A {
  // interface named as A
  x: string;
}
interface A {
  // again create an interface with same name A
  y: string;
}
const j: A = {
  x: "xx",
  y: "yy", // both are merged
};
```

On the other hand, type do not support declaration merging.

![merging declaration.png](https://i.ibb.co.com/rfbJyYhV/merging-declaration.png)

### Extending (inhertance)

Both types can extend, but in different way. Interface uses `extends` to inherite the properties and method from other interfaces.

```tsx
interface A {
  x: string;
  y: number;
}
interface B extends A {
  z: string;
}
const car: B = {
  x: "x",
  y: 123,
  z: "z",
};
```

type uses intersection to extends. (intersection using & operator)

```tsx
interface A {
  x: string;
  y: number;
}
type B = A & {
  j: string;
};
const c: B = {
  x: "x",
  y: 123,
  j: "j",
};
```

### Usage

Interface is used for object and array but type can be used for both primitive and non-primitive data type.

```tsx
type Name = "string"; // primitive
type isSubmit = false; // primitive
type Digits = number[]; // non-primitive
type Obj = {
  // non-primitive
  name: string;
  age: number;
};

interface User2 {
  // non-primitve: object
  id: number;
  sector: string;
}
interface EvenNumbers {
  // non-primitive: array
  [index: number]: number;
}
```
