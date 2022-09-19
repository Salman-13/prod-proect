import { Suspense} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./styles/index.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={"/"}>Главная странциа</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Идет загрузка...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage />}/>
                    <Route path={"/"} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;