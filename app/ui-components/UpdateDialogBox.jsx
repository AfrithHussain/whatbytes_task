import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { TiHtml5 } from "react-icons/ti";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
    overflowY: "auto",
    overflowX: "hidden", // Prevent horizontal scrollbar
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

export default function UpdateDialogBox({ onUpdate }) {
  const [open, setOpen] = React.useState(false);
  const [rank, setRank] = React.useState("1");
  const [percentile, setPercentile] = React.useState("30");
  const [currentScore, setCurrentScore] = React.useState("10");
  const [errors, setErrors] = React.useState({
    rank: "",
    percentile: "",
    currentScore: "",
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validate = (field, value) => {
    let message = "";
    if (value.trim() === "") {
      message = `${field} is required`;
    } else {
      const numValue = Number(value);
      if (field === "percentile" && numValue > 100) {
        message = "Limit is 100";
      } else if (field === "currentScore" && numValue > 15) {
        message = "Limit is 15";
      }
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
    return message === "";
  };

  const handleSave = () => {
    const isRankValid = validate("rank", rank);
    const isPercentileValid = validate("percentile", percentile);
    const isScoreValid = validate("currentScore", currentScore);

    if (!isRankValid || !isPercentileValid || !isScoreValid) return;

    onUpdate(rank, percentile, currentScore);
    handleClose();
  };

  const labelStyle = {
    fontWeight: "bold",
    minWidth: "270px",
    whiteSpace: "nowrap",
  };
  const numberStyle = { width: 24, fontWeight: "bold" };
  const inputStyle = { flex: 1 };

  // Use media query for responsiveness
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            fontWeight: "bold",
            fontSize: "1.5rem",
            position: "relative",
          }}
        >
          Update scores
          <TiHtml5
            size={45}
            style={{
              position: "absolute",
              right: 16,
              top: 16,
              color: "#f16529",
            }}
          />
        </DialogTitle>

        <DialogContent dividers sx={{ padding: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Rank */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexDirection: isSmallScreen ? "column" : "row", // Stack elements in small screens
                alignItems: isSmallScreen ? "flex-start" : "center", // Adjust alignment for small screens
              }}
            >
              <Typography
                sx={{
                  ...numberStyle,
                  fontSize: isSmallScreen ? "1rem" : "1.3rem", // Adjust size on small screens
                }}
                className="text-white bg-blue-900 rounded-full flex justify-center items-center md:px-4"
              >
                1
              </Typography>
              <Typography
                sx={{
                  ...labelStyle,
                  fontSize: isSmallScreen ? "0.8rem" : "1rem", // Reduce text size on small screens
                }}
              >
                Update your <strong className="font-semibold">Rank</strong>
              </Typography>
              <TextField
                value={rank}
                onChange={(e) => {
                  setRank(e.target.value);
                  validate("rank", e.target.value);
                }}
                error={!!errors.rank}
                helperText={errors.rank}
                sx={{ ...inputStyle, flex: 1 }}
                fullWidth
              />
            </Box>

            {/* Percentile */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexDirection: isSmallScreen ? "column" : "row",
                alignItems: isSmallScreen ? "flex-start" : "center",
              }}
            >
              <Typography
                sx={{
                  ...numberStyle,
                  fontSize: isSmallScreen ? "1rem" : "1.3rem",
                }}
                className="text-white bg-blue-900 rounded-full flex justify-center items-center md:px-4"
              >
                2
              </Typography>
              <Typography
                sx={{
                  ...labelStyle,
                  fontSize: isSmallScreen ? "0.8rem" : "1rem",
                }}
              >
                Update your{" "}
                <strong className="font-semibold">Percentile</strong>
              </Typography>
              <TextField
                value={percentile}
                onChange={(e) => {
                  setPercentile(e.target.value);
                  validate("percentile", e.target.value);
                }}
                error={!!errors.percentile}
                helperText={errors.percentile}
                sx={{ ...inputStyle, flex: 1 }}
                fullWidth
              />
            </Box>

            {/* Current Score */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexDirection: isSmallScreen ? "column" : "row",
                alignItems: isSmallScreen ? "flex-start" : "center",
              }}
            >
              <Typography
                sx={{
                  ...numberStyle,
                  fontSize: isSmallScreen ? "1rem" : "1.3rem",
                }}
                className="text-white bg-blue-900 rounded-full flex justify-center items-center md:px-4"
              >
                3
              </Typography>
              <Typography
                sx={{
                  ...labelStyle,
                  fontSize: isSmallScreen ? "0.8rem" : "1rem",
                }}
              >
                Update your{" "}
                <strong className="font-semibold">
                  Current Score (out of 15)
                </strong>
              </Typography>
              <TextField
                value={currentScore}
                onChange={(e) => {
                  setCurrentScore(e.target.value);
                  validate("currentScore", e.target.value);
                }}
                error={!!errors.currentScore}
                helperText={errors.currentScore}
                sx={{ ...inputStyle, flex: 1 }}
                fullWidth
              />
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "end", px: 3, pb: 3, gap: 3 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              textTransform: "lowercase",
              borderRadius: 2,
              px: 4,
            }}
          >
            cancel
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{
              backgroundColor: "#002ead",
              color: "#fff",
              textTransform: "lowercase",
              borderRadius: 2,
              px: 3,
              "&:hover": {
                backgroundColor: "#001a75",
              },
            }}
          >
            save →
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
