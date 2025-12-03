src/index.auth0.tsx [5:23]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
} from "@mui/material";
import { Auth0Provider } from "@auth0/auth0-react";
import AppAuth0 from "./containers/AppAuth0";
import { history } from "./utils/historyUtils";

const theme = createTheme(
  adaptV4Theme({
    palette: {
      secondary: {
        main: "#fff",
      },
    },
  })
);
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



src/index.okta.tsx [5:26]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
} from "@mui/material";

// @ts-ignore
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import { history } from "./utils/historyUtils";
import AppOkta from "./containers/AppOkta";

const theme = createTheme(
  adaptV4Theme({
    palette: {
      secondary: {
        main: "#fff",
      },
    },
  })
);
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



