import {Container, Grid, Typography} from "@mui/material";
import Form from "./components/Form";
import { NewsProvider } from "./context/NewsProvider";
import NewsList from "./components/NewsList";

const App = () => {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component={"h1"} variant="h3">
            Buscador de Noticias
          </Typography>
        </header>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Form />
          </Grid>
        </Grid>

        <NewsList/>

      </Container>
    </NewsProvider>
  );
};

export default App;
