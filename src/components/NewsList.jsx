import { Grid, Typography, Pagination, Stack } from "@mui/material"
import useNews from "../hooks/useNews"
import { News } from "./News";

const NewsList = () => {

  const { newsResult, totalNews, handleChangePage, page } = useNews();
  console.log(page)
  const totalPages = Math.ceil(totalNews / 20);

  return (
    <>
      <Typography
        textAlign={'center'}
        marginY={5}
        variant="h3"
        component={'h2'}
      >
        Ultimas Noticias
      </Typography>

      <Grid
        container
        spacing={2}
      >
        {newsResult.map((news) => (
          <News
            news={news}
            key={news.url}
          />
        ))}
      </Grid>

      <Stack 
        spacing={2}
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          marginY: 5
        }}
      >
        <Pagination 
          count={totalPages} 
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </>
  )
}

export default NewsList