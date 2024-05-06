export type Find<
  K extends string | number | symbol,
  V,
  Tuple extends object[] | readonly object[]
> = Extract<Tuple[number], { [P in K]: V }>;

// type Tuple = [{ id: 1; name: "Alice" }, { id: 2; name: "Bob" }, { id: 3; name: "Charlie" }];
// type Result = Find<"name", "Bob", Tuple>;
