interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = {
  +readonly[Property in keyof T]: T[Property];
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}


// todo.title = '111'; // 会报错
// todo.description = '222'; // 会报错
export default {};