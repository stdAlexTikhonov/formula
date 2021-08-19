import { makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles<Theme, { text: boolean }>((theme) => ({
  mathIcon: {
    "&:before": {
      fontFamily: "MathIcon",
      fontSize: ({ text }) => (text ? 10 : "0.875rem"),
    },
  },
  eq: {
    "&:before": {
      content: '"\\f122"',
    },
  },
  ne: {
    "&:before": {
      content: '"\\f140"',
    },
  },
  gt: {
    "&:before": {
      content: '"\\f138"',
    },
  },
  gte: {
    "&:before": {
      content: '"\\f137"',
    },
  },
  lt: {
    "&:before": {
      content: '"\\f13a"',
    },
  },
  lte: {
    "&:before": {
      content: '"\\f13b"',
    },
  },
  plus: {
    "&:before": {
      content: '"\\f165"',
    },
  },
  mult: {
    "&:before": {
      content: '"\\f150"',
    },
  },
  or: {
    "&:before": {
      content: '"\\f142"',
    },
  },
  minus: {
    "&:before": {
      content: '"\\f14f"',
    },
  },
  in: {
    "&:before": {
      content: '"\\f134"',
    },
  },
  braces: {
    "&:before": {
      content: '"\\f15e"',
    },
  },
  union: {
    "&:before": {
      content: '"\\f17e"',
    },
  },
  divide: {
    "&:before": {
      content: '"\\f169"',
    },
  },
}));
