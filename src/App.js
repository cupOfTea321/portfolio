import './App.css';
import Navbar from "./components/Header/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer";
import {Container, createTheme, Paper, ThemeProvider} from "@mui/material";
import bannerBg from "./assets/img/banner-bg.png";
import Centra from './assets/font/CentraNo2-Medium.ttf'
import Aducation from "./components/Education";
const styles = {
    paperContainer: {
        backgroundImage: `url(${bannerBg})`
    }
};
const theme = createTheme({
    typography: {
        fontFamily: Centra,
    },
})
function App() {
  return (
      <>
          <ThemeProvider theme={theme}>
          <Paper style={styles.paperContainer} sx={{
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',

          }}>
        <Navbar/>
          <Container  sx={{mt: '20px', height: '100vh'}}>
              <Banner />
          </Container>
          </Paper>
              <Skills />
              <Projects />
              <About />
              <Aducation/>
              <Footer />
          </ThemeProvider>

      </>


  );
}

export default App;
