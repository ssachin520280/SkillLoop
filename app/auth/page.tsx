"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Header from "@/components/Navbar"
import Footer from "@/components/Footer"

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    walletAddress: z.string().min(1, { message: "Wallet address is required" }),
    userType: z.enum(["student", "platform"], {
        required_error: "Please select a user type",
    }),
})

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState("signup")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            walletAddress: "",
            userType: "student",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        // Here you would handle the authentication logic
        alert(`${activeTab === "signup" ? "Signed up" : "Signed in"} as ${values.userType} with email: ${values.email}`)
    }

    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <Card className="w-full max-w-md shadow-lg border-blue-100">
                    <CardHeader className="space-y-1 bg-blue-50 rounded-t-lg">
                        <CardTitle className="text-2xl font-bold text-center text-blue-700">
                            {activeTab === "signup" ? "Create an account" : "Welcome back"}
                        </CardTitle>
                        <CardDescription className="text-center text-blue-600">
                            {activeTab === "signup" ? "Sign up to get started with our platform" : "Sign in to access your account"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <Tabs defaultValue="signup" value={activeTab} onValueChange={setActiveTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-6">
                                <TabsTrigger value="signup" className="text-blue-700">
                                    Sign Up
                                </TabsTrigger>
                                <TabsTrigger value="signin" className="text-blue-700">
                                    Sign In
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="signup">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="userType"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-blue-700">I am a:</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex space-x-4"
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="student" id="student" />
                                                                <Label htmlFor="student" className="cursor-pointer">
                                                                    Student
                                                                </Label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="teacher" id="platform" />
                                                                <Label htmlFor="Teacher" className="cursor-pointer">
                                                                    Teacher
                                                                </Label>
                                                            </div>
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-blue-700">Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="your@email.com"
                                                            {...field}
                                                            className="border-blue-200 focus-visible:ring-blue-500"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="walletAddress"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-blue-700">Wallet Address</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="0x..."
                                                            {...field}
                                                            className="border-blue-200 focus-visible:ring-blue-500"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                            Create Account
                                        </Button>
                                    </form>
                                </Form>
                            </TabsContent>

                            <TabsContent value="signin">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="userType"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel className="text-blue-700">I am a:</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex space-x-4"
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="student" id="signin-student" />
                                                                <Label htmlFor="signin-student" className="cursor-pointer">
                                                                    Student
                                                                </Label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="platform" id="signin-platform" />
                                                                <Label htmlFor="signin-platform" className="cursor-pointer">
                                                                    Platform
                                                                </Label>
                                                            </div>
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-blue-700">Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="your@email.com"
                                                            {...field}
                                                            className="border-blue-200 focus-visible:ring-blue-500"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="walletAddress"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-blue-700">Wallet Address</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="0x..."
                                                            {...field}
                                                            className="border-blue-200 focus-visible:ring-blue-500"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                            Sign In
                                        </Button>
                                    </form>
                                </Form>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t border-blue-100 pt-4">
                        <p className="text-sm text-blue-600">
                            {activeTab === "signup"
                                ? "By signing up, you agree to our Terms of Service"
                                : "Forgot your wallet address? Contact support"}
                        </p>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </>
    )
}
