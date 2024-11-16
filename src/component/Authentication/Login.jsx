import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { signInUser, } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const accepted = e.target.terms.checked;
        console.log(email, password)

        // Sign in user / login user
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                // clean data after login
                e.target.reset();

                // After login automatic go home pages
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    };

    // const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    //         .then(result => {
    //             console.log(result.user)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }


    return (
        <div>

            <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
                <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md border border-black">
                    <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
                    <form onSubmit={handleSubmit} className="mt-4 ">
                        <div className="mb-4">

                            <input
                                type="email"
                                name='email' placeholder='Username or Email'
                                className="w-full px-4 py-2 mt-2 border-b-2 border-black  focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4">

                            <input
                                type="password"
                                name='password' placeholder='Passowrd'
                                className="w-full px-4 py-2 mt-2 border-b-2 border-black  focus:outline-none"

                                required
                            />
                            {/* className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none" */}


                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Login
                        </button>


                    </form>

                    <p>Don't have an account <Link to='/register' className='text-orange-500'>Register</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Login;