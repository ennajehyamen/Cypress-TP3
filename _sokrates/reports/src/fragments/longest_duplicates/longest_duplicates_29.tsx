src/components/TransactionCreateStepOne.tsx [10:22]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const classes = {
  paper: `${PREFIX}-paper`,
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  [`&.${classes.paper}`]: {
    //marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



src/components/TransactionListFilters.tsx [11:22]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const classes = {
  paper: `${PREFIX}-paper`,
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  [`&.${classes.paper}`]: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



