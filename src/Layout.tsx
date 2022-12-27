import { ThemeProvider } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >

            <Outlet />
        </ThemeProvider>
    );
}