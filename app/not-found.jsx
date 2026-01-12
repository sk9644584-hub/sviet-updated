"use client"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const navigate = useRouter()
    return (

        <div className="max-w-2xl my-10 mx-auto text-center">
            {/* 404 Animation */}
            <div className="relative mb-8">
                <div className="text-[150px] md:text-[200px] font-bold text-gray-200 leading-none select-none">
                    404
                </div>

            </div>

            {/* Error Message */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Oops! Page Not Found
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <p className="text-gray-500">
                    Don't worry, let's get you back on track!
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                    variant={"outline"}
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white hover:text-white px-6 py-3"
                >
                    <Link href="/" className="flex items-center gap-2">
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                </Button>

                <Button
                    asChild
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50 text-black px-6 py-3 bg-transparent"
                >
                    <Button
                        onClick={() => navigate.back()}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </Button>
                </Button>
            </div>


            {/* Help Text */}
            <div className="text-sm text-gray-500">
                <p>
                    If you believe this is an error, please contact our support team.
                </p>
                <p className="mt-1">
                    Email:{" "}
                    <a
                        href="mailto:info@sviet.org.in"
                        className="text-blue-600 hover:underline"
                    >
                        info@sviet.org.in
                    </a>{" "}
                    | Phone:{" "}
                    <a
                        href="tel:+911234567890"
                        className="text-blue-600 hover:underline ml-1"
                    >
                        1800 120 1200
                    </a>
                </p>
            </div>
        </div>
    )
}
