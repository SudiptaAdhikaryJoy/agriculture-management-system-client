import React from 'react';
import login from '../../assets/login:signup/login.svg'
import google from '../../assets/login:signup/google.svg'
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import './Login.css'
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        console.log(user);
    }

    const {
			register,
			formState: { errors },
			handleSubmit,
		} = useForm();
		const onSubmit = (data) => console.log(data);
    return (
			<div className="flex h-screen justify-center items-center mesher">
				<div className="card lg:card-side md:card-side bg-base-100 shadow-xl">
					<figure>
						<img src={login} alt="Album" />
					</figure>
					<div className="card-body">
						<h2 className="text-center font-bold">Login</h2>

						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								{...register("firstName", { required: true, maxLength: 50 })}
							/>
							<input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
							<input type="number" {...register("age", { min: 18, max: 99 })} />
							<input type="submit" />
						</form>
                        
						<div className="divider">OR</div>

						<div className="flex">
							<button
								onClick={() => signInWithGoogle()}
								className="btn btn-outline"
							>
								Continue With Google
								<img style={{ color: "red" }} src={google} alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
};
    
export default Login;