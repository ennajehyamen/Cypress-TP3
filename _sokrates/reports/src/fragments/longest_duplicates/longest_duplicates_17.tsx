src/containers/BankAccountsContainer.tsx [5:27]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  BaseActionObject,
  Interpreter,
  ResolveTypegenMeta,
  ServiceMap,
  TypegenDisabled,
} from "xstate";
import { Link as RouterLink, useRouteMatch } from "react-router-dom";
import { Grid, Button, Paper, Typography } from "@mui/material";

import { AuthMachineContext, AuthMachineEvents, AuthMachineSchema } from "../machines/authMachine";
import { DataContext, DataEvents, DataSchema } from "../machines/dataMachine";
import BankAccountForm from "../components/BankAccountForm";
import BankAccountList from "../components/BankAccountList";

export interface Props {
  authService: Interpreter<AuthMachineContext, AuthMachineSchema, AuthMachineEvents, any, any>;
  bankAccountsService: Interpreter<
    DataContext,
    DataSchema,
    DataEvents,
    any,
    ResolveTypegenMeta<TypegenDisabled, DataEvents, BaseActionObject, ServiceMap>
  >;
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



src/containers/UserOnboardingContainer.tsx [15:39]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  BaseActionObject,
  Interpreter,
  ResolveTypegenMeta,
  ServiceMap,
  TypegenDisabled,
} from "xstate";
import { isEmpty } from "lodash/fp";
import { useActor, useMachine } from "@xstate/react";

import { userOnboardingMachine } from "../machines/userOnboardingMachine";
import BankAccountForm from "../components/BankAccountForm";
import { DataContext, DataEvents, DataSchema } from "../machines/dataMachine";
import { AuthMachineContext, AuthMachineEvents, AuthMachineSchema } from "../machines/authMachine";
import NavigatorIllustration from "../components/SvgUndrawNavigatorA479";
import PersonalFinance from "../components/SvgUndrawPersonalFinanceTqcd";

export interface Props {
  authService: Interpreter<AuthMachineContext, AuthMachineSchema, AuthMachineEvents, any, any>;
  bankAccountsService: Interpreter<
    DataContext,
    DataSchema,
    DataEvents,
    any,
    ResolveTypegenMeta<TypegenDisabled, DataEvents, BaseActionObject, ServiceMap>
  >;
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



