import React from "react";
import {
  Box,
  CardContent,
  Paper,
  Card,
  Typography,
  Grid,
} from "@material-ui/core";
import SignInOutContainer from "../../SignInOutContainer";

export default function Logout() {
  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Box margin='auto'>
            <Card>
              <CardContent>
               <SignInOutContainer />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
