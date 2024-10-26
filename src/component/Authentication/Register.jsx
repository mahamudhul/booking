import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        // const accepted = e.target.terms.checked;
        console.log(name, email, password);

        // Create user in firebase 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // clean data after login
                e.target.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div>
            <h1>This is Register page </h1>

            <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
                <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md border border-black">
                    <h2 className="text-2xl font-semibold text-center text-gray-700">Register Now</h2>
                    <form onSubmit={handleSubmit} className="mt-4 ">

                        <div className="mb-4">
                            <input
                                type="name"
                                name='name' placeholder='Username '
                                className="w-full px-4 py-2 mt-2 border-b-2 border-black  focus:outline-none"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="name"
                                name='photo' placeholder='photo url'
                                className="w-full px-4 py-2 mt-2 border-b-2 border-black  focus:outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                name='email'
                                placeholder='Email'
                                className="w-full px-4 py-2 mt-2 border-b-2 border-black  focus:outline-none"
                                required
                            />
                        </div>

                        <div className="mb-4">

                            <input
                                type="password"
                                name='password' placeholder='Password'
                                className="w-full px-4 py-2 mt-2 border-b-2 border-black  focus:outline-none"

                                required
                            />
                            {/* className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none" */}


                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Register now
                        </button>
                    </form>

                    <p>have an account <Link to='/login' className='text-orange-500'>Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Register;