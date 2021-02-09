import React from "react";

// MUI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import SendIcon from "@material-ui/icons/Send";

// assets
import headshotImage from "../assets/headshot.jpeg";

function SendSueweet(props) {
  const [newSueweet, setNewSueweet] = React.useState("");
  const [error, setError] = React.useState(false);
  const [checkStates, setCheckStates] = React.useState({
    isSue: false,
    pinkyPromise: false,
    idNeverLie: false,
  });

  function handleNewSueweet(e) {
    setNewSueweet(e.target.value);
  }

  function handleCheck(e) {
    setCheckStates({ ...checkStates, [e.target.name]: e.target.checked });
  }

  function resetChecks() {
    setCheckStates({
      isSue: false,
      pinkyPromise: false,
      idNeverLie: false,
    });
  }

  function handlePostSueweet() {
    props
      .postSueweet(newSueweet)
      .then(() => {
        setNewSueweet("");
        console.log("enter here");
      })
      .catch(() => {
        setError(true);
      });

    resetChecks();
  }

  return (
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item>
        <Avatar alt="Sue Lee Headshot" src={headshotImage} />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="new-sueweet"
          label="Whatsuep?"
          onChange={handleNewSueweet}
          fullWidth
          value={newSueweet}
          error={error}
          helperText={error ? "Something went wrong..." : ""}
        />
      </Grid>
      {newSueweet !== "" && (
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkStates.isSue}
                onChange={handleCheck}
                name="isSue"
                color="primary"
              />
            }
            label="I am Sue"
          />
        </Grid>
      )}
      {checkStates.isSue && (
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkStates.pinkyPromise}
                onChange={handleCheck}
                name="pinkyPromise"
                color="secondary"
              />
            }
            label="I pinky promise!"
          />
        </Grid>
      )}
      {checkStates.pinkyPromise && (
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={checkStates.idNeverLie}
                onChange={handleCheck}
                name="idNeverLie"
                color="primary"
              />
            }
            label="I can't tell a lie."
          />
        </Grid>
      )}
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          disabled={!Object.values(checkStates).reduce((a, b) => a && b)}
          endIcon={<SendIcon />}
          onClick={handlePostSueweet}
        >
          Sueweet
        </Button>
      </Grid>
    </Grid>
  );
}

export default SendSueweet;
