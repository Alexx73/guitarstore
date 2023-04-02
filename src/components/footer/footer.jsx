import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = ({ theme }) => ({
  //   backgroundColor: #1c2331,
  //   theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
});

const Footer = () => {
  return (
    <Box className="bgdark" sx={{ width: "100%" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
        <Grid item xs={6}>
          <h6 class="text-uppercase fw-bold">Contacto</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            // style="width: 60px; background-color: #7c4dff; height: 2px"
          />
          <h6>
            <i class="fas fa-home mr-3"></i> Paraná, ER, Arg
          </h6>
          <h6>
            <i class="fas fa-envelope mr-3"></i> GuitarStore@gmail.com
          </h6>
          <h6>
            <i class="fas fa-phone mr-3"></i> + 054 343 226 5188
          </h6>
          {/* <Link>
              to={{ pathname: "https://github.com" }}
              <i class="fab fa-github" />
            </Link> */}

          <a
            mr={2}
            href="https://www.facebook.com/traversymedia/"
            target="_blank"
            className="text-white me-4"
          >
            {/* <i className="fab fa-facebook-f"></i> */}
          </a>

          <a
            href="https://www.instagram.com/programacion.es/?hl=en"
            target="_blank"
            className="text-white me-4"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </Grid>
        <Grid item xs={6}>
          <h6 class="text-uppercase fw-bold">Contacto</h6>
          <hr
            class="mb-4 mt-0 d-inline-block mx-auto"
            // style="width: 60px; background-color: #7c4dff; height: 2px"
          />
          <h6>
            <i class="fas fa-home mr-3"></i> Paraná, ER, Arg
          </h6>
          <h6>
            <i class="fas fa-envelope mr-3"></i> GuitarStore@gmail.com
          </h6>
          <h6>
            <i class="fas fa-phone mr-3"></i> + 054 343 226 5188
          </h6>

          <a
            href="https://github.com/Alexx73"
            target="_blank"
            className="text-white me-4"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://ar.linkedin.com"
            target="_blank"
            className="text-white me-4"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </Grid>

        {/* <Grid item xs={6}>
          <p>3</p>
        </Grid>
        <Grid item xs={6}>
          <p>4</p>
        </Grid> */}
      </Grid>
      <div>
        © 2023 Copyright:
        <a class="text-white" href="#">
          Indigo1
        </a>
      </div>
    </Box>
  );
};

export default Footer;
