import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import logo from '../images/AtlasDuo.png';

const LogoPage = () =>{
    return (
        <>
            <Container>
                <img src={logo} alt="Atlas Duo logo" />
                <Outlet/>
            </Container>
        </>
    )
};

export default LogoPage;