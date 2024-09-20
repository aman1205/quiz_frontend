"use client";
import { useMutation } from "@tanstack/react-query";

import { apiAuth } from "@/lib/axios";

export interface IRequestUserSignUp {
	firstname: string;
	lastname: string;
	username: string;
	email: string;
	phoneNumber: string;
	password: string;
}

export const useUserSignUp = () => {
	const userSignUp = async (signUpData: IRequestUserSignUp) => {
		return await apiAuth.post('/questions', {
			firstName: signUpData.firstname,
			lastName: signUpData.lastname,
			username: signUpData.username,
			phoneNumber: signUpData.phoneNumber,
			email: signUpData.email,
			password: signUpData.password,
		});
	};

	return useMutation({
		mutationKey: ["userSignUp"],
		mutationFn: (signUpData: IRequestUserSignUp) => userSignUp(signUpData),
	});
};
