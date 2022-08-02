// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.Todo Machine.Loading Todos:invocation[0]": {
      type: "done.invoke.Todo Machine.Loading Todos:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.Todo Machine.Loading Todos:invocation[0]": {
      type: "error.platform.Todo Machine.Loading Todos:invocation[0]";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    loadTodos: "done.invoke.Todo Machine.Loading Todos:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    services: "loadTodos";
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    assignTodosToContext: "done.invoke.Todo Machine.Loading Todos:invocation[0]";
    assignErrorToContext: "error.platform.Todo Machine.Loading Todos:invocation[0]";
    assignFormInputToContext: "Form input changed";
  };
  eventsCausingServices: {
    loadTodos: "xstate.init";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | "Loading Todos"
    | "Todos loaded"
    | "Loading todos errored"
    | "Create new todo"
    | "Create new todo.Showing form input"
    | { "Create new todo"?: "Showing form input" };
  tags: never;
}
