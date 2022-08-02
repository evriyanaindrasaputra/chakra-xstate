import { createMachine, assign } from "xstate";

export const todoMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQAyquEZUmaGsAxBuRWQG6oDWlZljxEylGnQZN0qWAh6p8uAC7FUpANoAGALqJQAB1nFV6-SAAeiALQB2AMwUALLYCsARneuAHC-sf7AE4AGhAATxsAJkDA51tvd0D3WydIyNcANlsAX2zQoRwCEk4JelJGITYwACdq1GqKAwAbFQAzeoBbCgKRYvFaMoqZOQUlU01dcyNYEzVScysEa3sM1wp3bwynDJXXe0itIPtQiKX3SO8KC-jA73t7d0PA2xy8kB6isW7hzCaByFYAGFqmAVGBMOQAO5TYzjBaIDZOCjeSIOBL2ba2SKrVwnGyJJFOLRbLExDYZDKRXJvUjoODmD6iEoDKSVGEzOFISw2eybChaVwCjZ3QVOPFLaKxFwJJIpNKZDK5fIyQpMwQ-P50SDs2ZmLmLdwZLQUVwxSL7VzxFGBDLi6wXNYxDKBexaLF7bwupXvFW9L6lKTKH41OogiA6zmgRbLFIUG22Q23e62SnPcWRQkeVyuC4PLZObOub2MvoUYGg5TgqGYIMYCjV2DKMGYdwRubwhDJRxG2zE9wF7Zac228I2CnIw0CilDo1OLzF32fTjl5vV2uoNt6qMIpyxHt9gdG4d29y85HEhNaBKC7xaQILjCqvqb+b6mxz40CoXeEVaMWjpZ7ATZwMh-VFLUCQVKScalsiAA */
  createMachine(
    {
      context: {
        todos: [] as string[],
        errorMessage: undefined as string | string,
        createNewTodoFormInput: "",
      },
      tsTypes: {} as import("./todoMachine.typegen").Typegen0,
      schema: {
        services: {} as {
          loadTodos: {
            data: string[];
          };
        },
        events: {} as
          { type: 'Create new' } | { type: 'Form input changed', value : string }
      },
      id: "Todo Machine",
      initial: "Loading Todos",
      states: {
        "Loading Todos": {
          invoke: {
            src: "loadTodos",
            onDone: [
              {
                actions: "assignTodosToContext",
                target: "Todos loaded",
              },
            ],
            onError: [
              {
                actions: "assignErrorToContext",
                target: "Loading todos errored",
              },
            ],
          },
        },
        "Todos loaded": {
          on: {
            "Create new": {
              target: "Create new todo",
            },
          },
        },
        "Loading todos errored": {},
        "Create new todo": {
          initial: "Showing form input",
          states: {
            "Showing form input": {
              on: {
                "Form input changed": {
                  actions: "assignFormInputToContext",
                }
              }
            },
          },
        },
      },
    },
    {
      actions: {
        assignTodosToContext: assign((context, event) => {
          return {
            todos: event.data
          }
        }),
        assignErrorToContext: assign((context, event) => {
          return {
            errorMessage: (event.data as Error).message
          }
        }),
        assignFormInputToContext: assign((context, event) => {
          return {
            createNewTodoFormInput: event.value,
          };
        }),
      }
    }
  )
