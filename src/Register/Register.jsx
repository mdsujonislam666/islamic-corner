import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
// import { data } from 'react-router';

const Register = () => {
    const [show, setShow] = useState(false);

    const { signInWithGoogle, createUser } = use(AuthContext);

    const signUpWithEmailandPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.value;
        const name = e.target.name.value;
        console.log(email, password, name, image);

        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]{8,}$/;
        if (!regExp.test(password)) {
            toast.error(
                "Password must be at lest 8 character long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
            )
        }
        createUser(email, password)
            .then(result => {
                console.log(result);
                toast.success('SignUp Successful')
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL:image
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ..
                    console.log(error);
                    toast.error(error);
                });
            })
            .catch(error => {
                console.log(error);
                toast.error(error);
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                toast.success('Google SignUP Successful');


                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                }

                // create user in the database
                fetch('http://localhost:4000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data after user server', data);
                    })

            })
            .catch(error => {
                console.log(error);
                toast.error(error);
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-10">
            <h1 className='text-5xl font-bold mx-auto'>Register Now!</h1>
            <form onSubmit={signUpWithEmailandPassword} className="card-body">
                <fieldset className="fieldset">
                    {/* name */}
                    <label className='label'>Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />

                    {/* photo url */}
                    <label className='label'>PhotoURL</label>
                    <input type="text" name="image" className="input" placeholder="Photo URL" />

                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    {/* password */}
                    <div className='relative'>
                        <label className="label">Password</label>
                        <input type={show ? "text" : "password"} name="password" className="input" placeholder="Password" />
                        <span onClick={() => setShow(!show)} className='absolute right-[30px] top-7 cursor-pointer z-50'>{show ? <IoEye size={22} /> : <IoEyeOff size={22} />}</span>
                        <button className="btn btn-neutral mt-4 w-full">Register</button>
                    </div>

                    <div className='flex items-center justify-center gap-2'>
                        <div className='h-px w-24 bg-black'></div>
                        <span className='text-sm text-black'>OR</span>
                        <div className='h-px w-24 bg-black'></div>
                    </div>

                    {/* Google */}
                    <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p>Already have any account? <span text-green-600 font-bold underline><Link to='/login'>Login</Link></span> </p>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;