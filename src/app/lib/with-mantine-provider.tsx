import { createTheme, MantineProvider } from "@mantine/core";
import { FC } from "react";

const theme = createTheme({
    /** Put your mantine theme override here */
  });

export const WithMantineProvider = (Component: FC) => () => (
	<MantineProvider theme={theme}>
		<Component />
    </MantineProvider>
)