"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { formSchemaSignup } from "@/lib/validations/auth";
import { useSignUp } from "@/hooks/mutations/useAuthMutations";
type FormSchemaType = z.infer<typeof formSchemaSignup>;

const SignUpForm: React.FC = () => {
    const signUpMutation = useSignUp();
    const [userType, setUserType] = useState<"transport" | "company">("transport");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const router = useRouter();
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchemaSignup),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            fullName: "",
            phoneNumber: "",
            type: "Company",
        },
    });
    const onSubmit = (values: FormSchemaType) => signUpMutation.mutate(values);
    return (
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md">
                <Form {...form}>
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Sign up</h1>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* User Type Selection */}
                        <div className="flex justify-center gap-2 sm:gap-3">
                            {(["transport", "company"] as const).map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    className={`py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl text-white font-bold transition text-sm sm:text-base ${userType === type ? "bg-[#446de2]" : "bg-black"}`}
                                    onClick={() => setUserType(type)}
                                >
                                    {type === "transport" ? "Transporter" : "Company"}
                                </button>
                            ))}
                        </div>

                        {/* Input Fields */}
                        {[
                            { name: "email", placeholder: "E-mail", icon: <Mail /> },
                            { name: "fullName", placeholder: "Full Name", icon: <User /> },
                            { name: "phoneNumber", placeholder: "Phone Number", icon: <Phone /> },
                        ].map(({ name, placeholder, icon }) => (
                            <FormField key={name} name={name as keyof FormSchemaType} control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{icon}</span>
                                            <Input {...field} placeholder={placeholder} className="h-12 pl-10 pr-4 text-base rounded-xl w-full" />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        ))}

                        {/* Password Fields */}
                        {([
                            { name: "password", placeholder: "Password", show: showPassword, setShow: setShowPassword },
                            { name: "confirmPassword", placeholder: "Confirm Password", show: showConfirmPassword, setShow: setShowConfirmPassword },
                        ] as const).map(({ name, placeholder, show, setShow }) => (
                            <FormField key={name} name={name as keyof FormSchemaType} control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"><Lock /></span>
                                            <Input {...field} type={show ? "text" : "password"} placeholder={placeholder} className="h-12 pl-10 pr-12 text-base rounded-xl w-full" />
                                            <span onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500">
                                                {show ? <Eye size={20} /> : <EyeOff size={20} />}
                                            </span>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        ))}

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-[#446de2] rounded-full py-3 sm:py-3.5 text-white font-semibold hover:opacity-85 text-base sm:text-lg" disabled={signUpMutation.isPending}>
                            {signUpMutation.isPending ? "Signing Up..." : "Sign Up"}
                        </button>

                        <p className="text-center text-sm sm:text-base">
                            Already have an account? <Link href="/signin" className="text-[#446de2] hover:underline font-semibold">Sign in</Link>
                        </p>
                    </form>
                </Form>
            </div>
        </div>
    );
}
export default SignUpForm;
