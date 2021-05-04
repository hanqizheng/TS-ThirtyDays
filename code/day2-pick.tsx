interface Todo {
  title: string
  description: string
  completed: boolean
}

type a = keyof Todo

const aa: a = 'completed'

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

export default {};