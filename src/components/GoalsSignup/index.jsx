import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const GoalsSignup = () => {
  return (
    <div>
      <h3>Cadastro de Metas</h3>
      <form>
        <TextField
          color="secondary"
          className="title"
          label="Título"
          variant="filled"
        />
        <select placeholder="Dificuldade">
          {["", "Fácil", "Médio", "Difícil"].map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>

        <FormLabel component="legend">Objetivo alcançado?</FormLabel>
        <RadioGroup defaultValue={false} aria-label="achieved">
          <FormControlLabel value={true} control={<Radio />} label="Sim" />
          <FormControlLabel value={false} control={<Radio />} label="Não" />
        </RadioGroup>
      </form>
    </div>
  );
};

export default GoalsSignup;
