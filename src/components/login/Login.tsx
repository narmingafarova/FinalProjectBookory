import React, { useContext, useState } from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import { useBetween } from 'use-between';
import useSharedLogin from '../sharedHook/useSharedLogin';
import { users } from '../../data/user';
import useSharedUser from '../sharedHook/useSharedUser';
import { ThemeContext } from '../../context/ThemeContext';

const Login: React.FC = () => {
    const { showLogin, setShowLogin } = useBetween(useSharedLogin);
    const { setUserStatus, setUserName } = useBetween(useSharedUser);
    const [mode] = useContext(ThemeContext);

    // For login
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

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
        if (user && user.isAdmin) {
            setUserStatus("admin");
            setShowLogin(false);
            setUsername("");
            setPassword("");
            localStorage.setItem("user", "admin");
        } else if (user && !user.isAdmin) {
            setUserStatus("user");
            setUserName(user.user);
            setShowLogin(false);
            setUsername("");
            setPassword("");
            localStorage.setItem("user", user.user);
        }
        else {
            setUserStatus("");
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

    return (
        <Modal className={`login-modal ${mode === "dark" ? "login-dark" : ""}`} centered show={showLogin} onHide={() => { setShowLogin(false); setForgotPass("d-none") }}>
            <Modal.Header>
                <Modal.Title>{forgotPass === "d-none" ? "Sign in" : "Forgot password"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={`login-form ${forgotPass === "d-none" ? "" : "d-none"}`}>
                    <Form onSubmit={loginSubmit}>
                        <Form.Group>
                            <Form.Label>Username or email <span>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder='Username'
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password <span>*</span></Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type={inputType}
                                    name="password"
                                    placeholder='Password'
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
                        <Button type='submit' variant='none' className='submit-btn text-uppercase'>Login</Button>
                    </Form>
                    <div className="forgot-pass d-flex justify-content-end mt-3">
                        <span onClick={() => { setForgotPass("d-block") }}>Lost your password?</span>
                    </div>
                </div>
                <div className={`forgot-div ${forgotPass}`}>
                    <Form onSubmit={forgotSubmit}>
                        <Form.Group>
                            <Form.Label>Username or email <span>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder='Username'
                                onChange={(e: any) => { setFUsername(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Secret word <span>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="secret"
                                placeholder='Secret Word'
                                onChange={(e: any) => { setFSecret(e.target.value) }}
                            />
                        </Form.Group>
                        <Button type='submit' variant='none' className='submit-btn text-uppercase'>Submit</Button>
                    </Form>
                    <div className="forgot-pass d-flex justify-content-end mt-3">
                        <span onClick={() => { setForgotPass("d-none") }}>Back to login</span>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default Login