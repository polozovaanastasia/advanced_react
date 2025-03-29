import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";
import { Theme } from "./providers/theme/lib/themeContext";
import "./styles/index.scss";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <div
                className="main"
                style={{ padding: "30px 15px", width: "100%" }}
            >
                <AppLink to={"https://www.google.com/"}> Google </AppLink>
                <button className="btn-theme" onClick={toggleTheme}>
                    {theme === Theme.LIGHT ? (
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M25 18.2656C23.4703 18.2656 21.9749 18.7192 20.703 19.5691C19.4311 20.419 18.4398 21.6269 17.8544 23.0402C17.269 24.4535 17.1158 26.0086 17.4142 27.5089C17.7127 29.0092 18.4493 30.3874 19.531 31.469C20.6126 32.5507 21.9908 33.2873 23.4911 33.5858C24.9914 33.8842 26.5465 33.731 27.9598 33.1456C29.3731 32.5602 30.581 31.5689 31.4309 30.297C32.2808 29.0251 32.7344 27.5297 32.7344 26C32.7313 23.9497 31.9154 21.9842 30.4656 20.5344C29.0158 19.0846 27.0503 18.2687 25 18.2656ZM25 32.3281C23.7484 32.3281 22.5249 31.957 21.4843 31.2616C20.4436 30.5663 19.6325 29.578 19.1536 28.4217C18.6746 27.2654 18.5493 25.993 18.7935 24.7654C19.0376 23.5379 19.6403 22.4103 20.5253 21.5253C21.4103 20.6403 22.5379 20.0376 23.7654 19.7935C24.993 19.5493 26.2654 19.6746 27.4217 20.1536C28.578 20.6325 29.5663 21.4436 30.2616 22.4843C30.957 23.5249 31.3281 24.7484 31.3281 26C31.3281 27.6783 30.6614 29.2879 29.4747 30.4747C28.2879 31.6614 26.6783 32.3281 25 32.3281ZM24.2969 15.2188V12.875C24.2969 12.6885 24.371 12.5097 24.5028 12.3778C24.6347 12.246 24.8135 12.1719 25 12.1719C25.1865 12.1719 25.3653 12.246 25.4972 12.3778C25.629 12.5097 25.7031 12.6885 25.7031 12.875V15.2188C25.7031 15.4052 25.629 15.5841 25.4972 15.7159C25.3653 15.8478 25.1865 15.9219 25 15.9219C24.8135 15.9219 24.6347 15.8478 24.5028 15.7159C24.371 15.5841 24.2969 15.4052 24.2969 15.2188ZM15.2266 17.2109C15.1619 17.1463 15.1107 17.0696 15.0757 16.9851C15.0407 16.9007 15.0227 16.8102 15.0227 16.7188C15.0227 16.6273 15.0407 16.5368 15.0757 16.4524C15.1107 16.3679 15.1619 16.2912 15.2266 16.2266C15.2912 16.1619 15.3679 16.1107 15.4524 16.0757C15.5368 16.0407 15.6273 16.0227 15.7188 16.0227C15.8102 16.0227 15.9007 16.0407 15.9851 16.0757C16.0696 16.1107 16.1463 16.1619 16.2109 16.2266L17.875 17.8789C18.0046 18.0123 18.0771 18.191 18.0771 18.377C18.0771 18.5629 18.0046 18.7416 17.875 18.875C17.8087 18.9404 17.73 18.9918 17.6434 19.026C17.5568 19.0603 17.4642 19.0767 17.3711 19.0742C17.2799 19.0757 17.1893 19.0589 17.1047 19.0247C17.0202 18.9904 16.9434 18.9395 16.8789 18.875L15.2266 17.2109ZM14.9219 26C14.9219 26.1865 14.8478 26.3653 14.7159 26.4972C14.5841 26.629 14.4052 26.7031 14.2188 26.7031H11.875C11.6885 26.7031 11.5097 26.629 11.3778 26.4972C11.246 26.3653 11.1719 26.1865 11.1719 26C11.1719 25.8135 11.246 25.6347 11.3778 25.5028C11.5097 25.371 11.6885 25.2969 11.875 25.2969H14.2188C14.4052 25.2969 14.5841 25.371 14.7159 25.5028C14.8478 25.6347 14.9219 25.8135 14.9219 26ZM17.875 33.125C18.0046 33.2584 18.0771 33.4371 18.0771 33.623C18.0771 33.809 18.0046 33.9877 17.875 34.1211L16.2109 35.7734C16.1463 35.8381 16.0696 35.8893 15.9851 35.9243C15.9007 35.9593 15.8102 35.9773 15.7188 35.9773C15.6273 35.9773 15.5368 35.9593 15.4524 35.9243C15.3679 35.8893 15.2912 35.8381 15.2266 35.7734C15.1619 35.7088 15.1107 35.6321 15.0757 35.5476C15.0407 35.4632 15.0227 35.3727 15.0227 35.2812C15.0227 35.1898 15.0407 35.0993 15.0757 35.0149C15.1107 34.9304 15.1619 34.8537 15.2266 34.7891L16.8789 33.125C17.0123 32.9954 17.191 32.9229 17.377 32.9229C17.5629 32.9229 17.7416 32.9954 17.875 33.125ZM25.7031 36.7812V39.125C25.7031 39.3115 25.629 39.4903 25.4972 39.6222C25.3653 39.754 25.1865 39.8281 25 39.8281C24.8135 39.8281 24.6347 39.754 24.5028 39.6222C24.371 39.4903 24.2969 39.3115 24.2969 39.125V36.7812C24.2969 36.5948 24.371 36.4159 24.5028 36.2841C24.6347 36.1522 24.8135 36.0781 25 36.0781C25.1865 36.0781 25.3653 36.1522 25.4972 36.2841C25.629 36.4159 25.7031 36.5948 25.7031 36.7812ZM34.7734 34.7891C34.8381 34.8537 34.8893 34.9304 34.9243 35.0149C34.9593 35.0993 34.9773 35.1898 34.9773 35.2812C34.9773 35.3727 34.9593 35.4632 34.9243 35.5476C34.8893 35.6321 34.8381 35.7088 34.7734 35.7734C34.7088 35.8381 34.6321 35.8893 34.5476 35.9243C34.4632 35.9593 34.3727 35.9773 34.2812 35.9773C34.1898 35.9773 34.0993 35.9593 34.0149 35.9243C33.9304 35.8893 33.8537 35.8381 33.7891 35.7734L32.125 34.1211C31.9929 33.989 31.9187 33.8099 31.9187 33.623C31.9187 33.4362 31.9929 33.2571 32.125 33.125C32.2571 32.9929 32.4362 32.9187 32.623 32.9187C32.8099 32.9187 32.989 32.9929 33.1211 33.125L34.7734 34.7891ZM38.8281 26C38.8281 26.1865 38.754 26.3653 38.6222 26.4972C38.4903 26.629 38.3115 26.7031 38.125 26.7031H35.7812C35.5948 26.7031 35.4159 26.629 35.2841 26.4972C35.1522 26.3653 35.0781 26.1865 35.0781 26C35.0781 25.8135 35.1522 25.6347 35.2841 25.5028C35.4159 25.371 35.5948 25.2969 35.7812 25.2969H38.125C38.3115 25.2969 38.4903 25.371 38.6222 25.5028C38.754 25.6347 38.8281 25.8135 38.8281 26ZM34.7734 16.2266C34.8401 16.29 34.8932 16.3664 34.9294 16.451C34.9657 16.5356 34.9844 16.6267 34.9844 16.7188C34.9844 16.8108 34.9657 16.9019 34.9294 16.9865C34.8932 17.0711 34.8401 17.1475 34.7734 17.2109L33.1211 18.875C33.0566 18.9395 32.9798 18.9904 32.8953 19.0247C32.8107 19.0589 32.7201 19.0757 32.6289 19.0742C32.5358 19.0767 32.4432 19.0603 32.3566 19.026C32.27 18.9918 32.1913 18.9404 32.125 18.875C31.9954 18.7416 31.9229 18.5629 31.9229 18.377C31.9229 18.191 31.9954 18.0123 32.125 17.8789L33.7891 16.2266C33.8525 16.1599 33.9289 16.1068 34.0135 16.0706C34.0981 16.0343 34.1892 16.0156 34.2812 16.0156C34.3733 16.0156 34.4644 16.0343 34.549 16.0706C34.6336 16.1068 34.71 16.1599 34.7734 16.2266Z"
                                fill="#303030"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_92221_6409)">
                                <path
                                    d="M18.6831 18.6733C20.1156 17.4295 21.8019 16.6653 23.5445 16.3669C21.9888 17.8962 21.0748 19.9611 20.9886 22.1409C20.9025 24.3206 21.6507 26.4512 23.0808 28.0985C24.5108 29.7458 26.5152 30.7859 28.6855 31.0068C30.8557 31.2277 33.0285 30.6128 34.7612 29.2874C34.2883 30.7554 33.4822 32.0942 32.4059 33.199C31.3297 34.3038 30.0125 35.1447 28.5573 35.6559C27.1021 36.1671 25.5484 36.3348 24.0177 36.1458C22.487 35.9569 21.0207 35.4164 19.7335 34.5666C18.4463 33.7169 17.3732 32.5809 16.5979 31.2476C15.8227 29.9142 15.3663 28.4196 15.2646 26.8806C15.1629 25.3416 15.4186 23.7999 16.0116 22.3761C16.6046 20.9524 17.519 19.685 18.6831 18.6733Z"
                                    stroke="#fdfdfd"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                        </svg>
                    )}
                </button>
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
