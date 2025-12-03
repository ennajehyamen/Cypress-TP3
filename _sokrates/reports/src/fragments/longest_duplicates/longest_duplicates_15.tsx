src/components/CommentForm.tsx [13:30]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const classes = {
  paper: `${PREFIX}-paper`,
  form: `${PREFIX}-form`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.paper}`]: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [`& .${classes.form}`]: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



src/components/UserListSearchForm.tsx [7:24]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const classes = {
  paper: `${PREFIX}-paper`,
  form: `${PREFIX}-form`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.paper}`]: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [`& .${classes.form}`]: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



