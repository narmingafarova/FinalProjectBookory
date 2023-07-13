import React, { useContext, useState } from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import { useBetween } from 'use-between';
import useSharedLogin from '../sharedHook/useSharedLogin';
import { users } from '../../data/user';
import useSharedUser from '../sharedHook/useSharedUser';
import { ThemeContext } from '../../context/ThemeContext';
import { LangContext } from '../../context/LangContext';

const Login: React.FC = () => {
    const { showLogin, setShowLogin } = useBetween(useSharedLogin);
    const { setUserStatus, setUserName } = useBetween(useSharedUser);
    const [mode] = useContext(ThemeContext);

    // For login
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errmsg, setErrMsg] = useState<string>("")

    // For password visibility
    const [inputType, setInputType] = useState<string>("password");
    const [eye, setEye] = useState<string>("eye-slash");

    // For forgot password
    const [forgotPass, setForgotPass] = useState<string>("d-none")
    const [fusername, setFUsername] = useState<string>("");
    const [fsecret, setFSecret] = useState<string>("");

    const loginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const user = users.find((user: any) => { return user.username === username && user.password === password });
        if (!username || !password) {
            setErrMsg("Please fill the inputs!")
        } else {
            if (user && user.isAdmin) {
                setUserStatus("admin");
                setShowLogin(false);
                setUsername("");
                setPassword("");
                localStorage.setItem("user", "admin");
                setErrMsg("")
            } else if (user && !user.isAdmin) {
                setUserStatus("user");
                setUserName(user.user);
                setShowLogin(false);
                setUsername("");
                setPassword("");
                localStorage.setItem("user", user.user);
                setErrMsg("")
            }
            else {
                setUserStatus("");
                setErrMsg("Username or password is wrong!")
            }
        }
    }

    const forgotSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const user = users.find((user: any) => { return user.username === fusername && user.secretWord === fsecret });
        if (user) {
            setForgotPass("d-none");
            setUsername(user.username);
            setPassword(user.password);
        }
    }

    const [lang] = useContext(LangContext);
    return (
        <Modal className={`login-modal ${mode === "dark" ? "login-dark" : ""}`} centered show={showLogin} onHide={() => { setShowLogin(false); setErrMsg(""); setUserName(""); setPassword(""); setForgotPass("d-none") }}>
            <Modal.Header>
                <Modal.Title>{forgotPass === "d-none" && lang === "en" ? "Sign in" : forgotPass === "d-none" && lang === "az" ? "Daxil ol" : lang === "en" ? "Forgot password" : "Şifrəmi unutdum"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={`login-form ${forgotPass === "d-none" ? "" : "d-none"}`}>
                    <Form onSubmit={loginSubmit}>
                        <Form.Group>
                            <Form.Label>{lang === "en" ? "Username or email" : "Istifadəçi adı və ya e-poçt"} <span>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder={lang === "en" ? "Username or email" : "Istifadəçi adı və ya e-poçt"}
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{lang === "en" ? "Password" : "Şifrə"} <span>*</span></Form.Label>
                            <InputGroup className="mb-0">
                                <Form.Control
                                    type={inputType}
                                    name="password"
                                    placeholder={lang === "en" ? "Password" : "Şifrə"}
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                <Button variant="outline-secondary" className='pass-btn' id="button-addon2" onClick={() => {
                                    if (inputType === "password") {
                                        setInputType("text");
                                        setEye("eye");
                                    } else {
                                        setInputType("password");
                                        setEye("eye-slash");
                                    }
                                }}>
                                    <i className={`fa-regular fa-${eye}`}></i>
                                </Button>
                            </InputGroup>
                        </Form.Group>
                        <p className='wrong-login'>{errmsg}</p>
                        <Button type='submit' variant='none' className='submit-btn text-uppercase'>{lang === "en" ? "Login" : "Daxil ol"}</Button>
                    </Form>
                    <div className="forgot-pass d-flex justify-content-end mt-3">
                        <span onClick={() => { setForgotPass("d-block") }}>{lang === "en" ? "Lost your password?" : "Şifrəni unutmusan?"}</span>
                    </div>
                </div>
                <div className={`forgot-div ${forgotPass}`}>
                    <Form onSubmit={forgotSubmit}>
                        <Form.Group>
                            <Form.Label>{lang === "en" ? "Username or email" : "Istifadəçi adı və ya e-poçt"} <span>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder={lang === "en" ? "Username or email" : "Istifadəçi adı və ya e-poçt"}
                                onChange={(e: any) => { setFUsername(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{lang === "en" ? "Secret word" : "Gizli söz"} <span>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="secret"
                                placeholder={lang === "en" ? "Secret word" : "Gizli söz"}
                                onChange={(e: any) => { setFSecret(e.target.value) }}
                            />
                        </Form.Group>
                        <Button type='submit' variant='none' className='submit-btn text-uppercase'>{lang === "en" ? "Submit" : "Təqdim et"}</Button>
                    </Form>
                    <div className="forgot-pass d-flex justify-content-end mt-3">
                        <span onClick={() => { setForgotPass("d-none") }}>{lang === "en" ? "Back to login" : "Giriş səhifəsinə qayıt"}</span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Login