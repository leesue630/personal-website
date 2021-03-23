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
import headshotAmericaImage from "../assets/headshotAmerica.jpg";
import headshotFriend from "../assets/headshotFriend.jpg";

function SendSueweet(props) {
  const [newSueweet, setNewSueweet] = React.useState("");
  const [error, setError] = React.useState("");
  const [currCheckLevel, setCurrCheckLevel] = React.useState(0);
  const checkboxContent = [
    "I am Sue.",
    "I pinky promise!",
    "I can't tell a lie.",
    "One more to cross-check with Sue's checkbox checking...🔀",
    "96% similarity detected!✅ But...",
    "...one can never be too careful these days...👀",
    "Would the real Sue have lasted this long?😬",
    "That's true. She's well-known for her determination and endurance.😤",
    "Would the real Sue be clicking checkboxes at this incredible pace?😳",
    "You're right. A little bit of text is no match for her lightning-fast reading comprehension.⚡",
    "Wait, but wouldn't Sue have better things to do right now than to be complimenting herself on her personal website?🤔",
    "Ah I see. She probably found a second to spare, in between selflessly spreading positivity and performing noble acts of kindness.🤩",
    "The galaxy awaits! Let's get this sueweet uploaded so you can keep up the great work!🛸",
  ];

  const [checkStates, setCheckStates] = React.useState(
    Array(checkboxContent.length).fill(false)
  );

  const checkLevelCount = checkboxContent.length;

  function handleNewSueweet(e) {
    setNewSueweet(e.target.value);
    setError("");
  }

  const handleCheck = (idx) => (e) => {
    if (e.target.checked) {
      setCurrCheckLevel(idx + 1);
      let newCheckStates = [...checkStates];
      newCheckStates[idx] = true;
      setCheckStates(newCheckStates);
    } else {
      setCurrCheckLevel(idx);
      setCheckStates(checkStates.map((b, i) => (i >= idx ? false : b)));
    }
  };

  function handlePostSueweet() {
    if (!newSueweet.startsWith(process.env.REACT_APP_SUEWEET_STARTS_WITH)) {
      setError("Sorry, but you're not Sue...🙊");
      resetChecks();
    } else {
      props
        .postSueweet(
          newSueweet.substring(process.env.REACT_APP_SUEWEET_STARTS_WITH.length)
        )
        .then(() => {
          setNewSueweet("");
          resetChecks();
        })
        .catch(() => {
          setError("Something went wrong...😓");
          resetChecks();
        });
    }
  }

  function resetChecks() {
    setCurrCheckLevel(0);
    setCheckStates(checkStates.map((_) => false));
  }

  var image;
  switch (props.userType) {
    case "Friend":
      image = headshotFriend;
      break;
    case "FBI":
      image = headshotAmericaImage;
      break;
    default:
      image = headshotImage;
  }

  const checkStateByIdx = (idx) => {
    return newSueweet !== "" && currCheckLevel >= idx;
  };

  const SueweetCheckbox = (label, idx) => {
    return (
      checkStateByIdx(idx) && (
        <Grid item key={`gridItemCheckbox${idx}`}>
          <FormControlLabel
            key={`formCLCheckbox${idx}`}
            control={
              <Checkbox
                checked={checkStates[idx]}
                onChange={handleCheck(idx)}
                name={`checkbox${idx}`}
                key={`checkbox${idx}`}
                color={idx % 2 === 0 ? "primary" : "secondary"}
              />
            }
            label={label}
          />
        </Grid>
      )
    );
  };

  return (
    <Grid container spacing={2} alignItems="flex-end">
      <Grid item>
        <Avatar alt="Sue Lee Headshot" src={image} />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="new-sueweet"
          label="Whatsuep?"
          onChange={handleNewSueweet}
          fullWidth
          value={newSueweet}
          error={error !== ""}
          helperText={error !== "" ? error : ""}
        />
      </Grid>
      {checkboxContent.map((label, idx) => SueweetCheckbox(label, idx))}
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          disabled={!checkStateByIdx(checkLevelCount)}
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
