# Day 2 Pick

> by Anthony Fu @antfu

Implement the built-in Pick<T, K> generic without using it.

Constructs a type by picking the set of properties K from T

For example

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```

## 今日TS词汇

- implement 
- generic ***adj.*** 普通的， 通称  ｜ 在TS中是使用特别多的一个词，我们叫做`范型`



## 解析

今天的题目是用来实现一个TS内置的库类型`Pick`。而且实现的过程中我们不能使用这个`Pick`类型。

`Pick`的作用是从一个给定的类型中`挑几个`属性出来然后构建一个`新的类型`。

### 怎么构建一个范型类型？


## 参考资料

- []()
- [what do “extends keyof” and “keyof” mean?](https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean)
- [Generic Types](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types)
- [keyof and Lookup Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types)





