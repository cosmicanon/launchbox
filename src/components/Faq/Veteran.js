import React from "react";
import { Grid } from "@material-ui/core";

import { FaqContainer } from ".";

export const FaqVeteran = () => (
  <Grid container>
    <FaqContainer title="5. What is Lorem Ipsum ?">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </FaqContainer>
    <FaqContainer title="6. Why do we use it ?">
      It has survived not only five centuries, but also the leap into electronic
      typesetting, remaining essentially unchanged. It was popularised in the
      1960s with the release of Letraset sheets containing Lorem Ipsum passages,
      and more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.
    </FaqContainer>
  </Grid>
);
