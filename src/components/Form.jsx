import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { CATEGORYS } from "../constants"
import useNews from "../hooks/useNews";

const Form = () => {
  const { category, handleChangeCategory } = useNews();
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select
          label={"categoria"}
          onChange={handleChangeCategory}
          value={category}
        >
          {CATEGORYS.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}

export default Form