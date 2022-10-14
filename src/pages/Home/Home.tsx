import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
    return(
        <>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid justifyContent="center" direction="row" alignItems="center" container spacing={2}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h2">Exemplo de uso para useRef</Typography>
                    </Grid>
                    <Grid item xs={6}>
                            <Link to="/useState">
                                <button id="btnSignIn" className="btn btn--secondary">
                                    <span className="btn__content">UseState</span>
                                    <span className="btn__glitch"></span>
                                    <span className="btn__label">flp</span>
                                </button>
                            </Link>
                    </Grid>
                    <Grid item xs={6}>
                            <Link to="/useRef">
                                <button id="btnSignIn" className="btn btn--secondary">
                                    <span className="btn__content">UseRef</span>
                                    <span className="btn__glitch"></span>
                                    <span className="btn__label">flp</span>
                                </button>
                            </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}