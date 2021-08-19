export const DATA = {
  VARIABLES: [
    { name: "DISTANCE", type: "number" },
    { name: "LENGHT", type: "number" },
    { name: "HEIGHT", type: "number" },
    { name: "WEIGHT", type: "number" },
    { name: "LATITUDE", type: "number" },
    { name: "REPLICAS", type: "number" },
    { name: "CODE_GENDER", type: "string" },
    { name: "AMT_ANNUITY", type: "number" },
    { name: "CNT_FAM_MEMBERS", type: "string" },
  ],
  OPERATORS: [
    {
      name: "and",
      return_type: "boolean",
      arguments_types: ["boolean", "boolean"],
    },
    {
      name: "or",
      return_type: "boolean",
      arguments_types: ["boolean", "boolean"],
    },
    {
      name: "+",
      return_type: "number",
      arguments_types: ["number", "number"],
    },
    {
      name: "-",
      return_type: "number",
      arguments_types: ["number", "number"],
    },
    {
      name: "*",
      return_type: "number",
      arguments_types: ["number", "number"],
    },
    {
      name: "/",
      return_type: "number",
      arguments_types: ["number", "number"],
    },
    {
      name: "<",
      return_type: "boolean",
      arguments_types: ["any", "any"],
    },
    {
      name: "<=",
      return_type: "boolean",
      arguments_types: ["any", "any"],
    },
    {
      name: "==",
      return_type: "boolean",
      arguments_types: ["any", "any"],
    },
    {
      name: "!=",
      return_type: "boolean",
      arguments_types: ["any", "any"],
    },
    {
      name: ">",
      return_type: "boolean",
      arguments_types: ["any", "any"],
    },
    {
      name: ">=",
      return_type: "boolean",
      arguments_types: ["any", "any"],
    },
    {
      name: "like",
      return_type: "boolean",
      arguments_types: ["string", "string"],
    },
    {
      name: "ilike",
      return_type: "boolean",
      arguments_types: ["string", "string"],
    },
    {
      name: "contains",
      return_type: "boolean",
      arguments_types: ["string", "string"],
    },
  ],
  FUNCTIONS: [
    { name: "curent_date", return_type: "datetime", arguments_types: [] },
    { name: "current_time", return_type: "datetime", arguments_types: [] },
    { name: "current_timestamp", return_type: "number", arguments_types: [] },
    { name: "now", return_type: "datetime", arguments_types: [] },
    {
      name: "concat",
      arbitrary_args: true,
      return_type: "string",
      arguments_types: ["string"],
    },
    {
      name: "cahr_length",
      return_type: "number",
      arguments_types: ["string"],
    },
    { name: "random", return_type: "number", arguments_types: [] },
    {
      name: "coalesce",
      arbitrary_args: true,
      return_type: "any",
      arguments_types: ["any"],
    },
    {
      name: "in",
      is_operator: true,
      return_type: "boolean",
      arguments_types: ["any"],
      arbitrary_args: true,
    },
    {
      name: "between",
      is_operator: true,
      return_type: "boolean",
      arguments_types: ["number", "number"],
      arbitrary_args: false,
    },
    {
      name: "not_in",
      is_operator: true,
      return_type: "boolean",
      arguments_types: ["any"],
      arbitrary_args: true,
    },
    {
      name: "startwith",
      return_type: "boolean",
      arguments_types: ["string"],
    },
    {
      name: "endwith",
      return_type: "boolean",
      arguments_types: ["string"],
    },
    {
      name: "not",
      return_type: "boolean",
      arguments_types: ["boolean"],
    },
    {
      name: "power",
      return_type: "number",
      arguments_types: ["number", "number"],
    },
    {
      name: "ln",
      return_type: "number",
      arguments_types: ["number"],
    },
    {
      name: "exp",
      return_type: "number",
      arguments_types: ["number"],
    },
    {
      name: "sqrt",
      return_type: "number",
      arguments_types: ["number"],
    },
    {
      name: "abs",
      return_type: "number",
      arguments_types: ["number"],
    },
    {
      name: "ceil",
      return_type: "number",
      arguments_types: ["number"],
    },
    {
      name: "floor",
      return_type: "number",
      arguments_types: ["number"],
    },
  ],
};
