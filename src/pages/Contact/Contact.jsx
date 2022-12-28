import { Box, FormControl, TextField, Typography } from "@mui/material";
import { AccountCircle, Email, Subject } from "@mui/icons-material/";
import useChange from "../../hooks/useChange";
import { useRef } from "react";

function Contact() {


  const form = useRef();
  const [values, handleChange] = useChange();

  console.log(form.current);

  return (
    <Box marginRight={6} justifyContent="initial" alignItems="initial">
      <Typography variant="h2">Contact Me</Typography>
      <FormControl ref={form} >
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={4}
        >
          <Box sx={{ display: "flex", alingItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField label="Name" variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alingItems: "flex-end" }}>
            <Email sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField label="Email" variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alingItems: "flex-end" }}>
            <Subject sx={{ color: "action.active", mr: 1, my: 2 }} />
            <TextField label="Subject" variant="standard" />
          </Box>
        </Box>
        <TextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        />
      </FormControl>
      <Box>Reds</Box>
    </Box>
  );
}
export default Contact;
