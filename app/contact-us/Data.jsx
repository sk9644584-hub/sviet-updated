"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import {
    Phone,
    Mail,
    MapPin,
    VoicemailIcon as Fax,
    Shield,
    Truck,
    GraduationCap,
    Users
} from "lucide-react"
import axiosInstance from "@/lib/axiosInstance"

function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// ...existing code...

function filterNumberInput(value, allowPlus = false, allowDash = false) {
    // Only allow up to 10 digits (excluding + and -)
    let digits = value.replace(/[^0-9]/g, "")
    if (digits.length > 10) digits = digits.slice(0, 10)

    let filtered = ""
    let digitCount = 0
    let dashCount = 0
    let lastWasDash = false

    for (let i = 0; i < value.length; i++) {
        const c = value[i]
        if (c === "+" && allowPlus && i === 0) {
            filtered += "+"
            lastWasDash = false
        } else if (c === "-" && allowDash) {
            // - not at start or end, not continuous, max 4, only after at least 1 digit and before 10th digit
            if (
                filtered.length > 0 &&
                !lastWasDash &&
                dashCount < 4 &&
                digitCount > 0 &&
                digitCount < 10
            ) {
                filtered += "-"
                dashCount++
                lastWasDash = true
            }
        } else if (/\d/.test(c) && digitCount < 10) {
            filtered += c
            digitCount++
            lastWasDash = false
        }
        // Stop if 10 digits reached
        if (digitCount === 10) break
    }
    // Remove trailing dash if present
    if (filtered.endsWith("-")) filtered = filtered.slice(0, -1)
    return filtered
}

function validatePhone(phone) {
    // Only numbers, + at start, - up to 4 times, not continuous, not at start or end, not repeated
    // + only at start, - not continuous, max 4, length of digits must be 10 (excluding + and -)
    if (!phone) return false
    let p = phone
    if (p[0] === "+") p = p.slice(1)
    // Check for invalid characters
    if (!/^[0-9\-+]+$/.test(phone)) return false
    // + only at start
    if (phone.slice(1).includes("+")) return false
    // - not continuous
    if (p.includes("--")) return false
    // - max 4
    if ((p.match(/-/g) || []).length > 4) return false
    // - not at start or end
    if (p[0] === "-" || p[p.length - 1] === "-") return false
    // Only digits and - after optional +
    let digits = p.replace(/-/g, "")
    if (!/^\d+$/.test(digits)) return false
    // Digits must be exactly 10
    if (digits.length !== 10) return false
    return true
}


// ...existing
export function ContactUsPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        course: "",
        program: "",
    })
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false) // <-- loading state added

    const contactDetails = [
        {
            icon: Phone,
            title: "Phone Numbers",
            details: ["1800-120-1200", "01762-507-888/222", "+91-94652-33333"]
        },
        {
            icon: Mail,
            title: "Email",
            details: ["info@sviet.ac.in", "Admissions@sviet.ac.in"]
        },
        {
            icon: Fax,
            title: "Fax",
            details: ["01762-507333"]
        },
        {
            icon: MapPin,
            title: "Address",
            details: [
                "Village- Ramnagar Near Banur, Tehsil- Rajpura,",
                "District- Patiala"
            ]
        }
    ]
    const courseOptions = [
        { value: "btech", label: "B.Tech" },
        { value: "mtech", label: "M.Tech" },
        { value: "mba", label: "MBA" },
        { value: "mca", label: "MCA" }
    ]

    const programOptions = {
        btech: [
            { value: "cse", label: "Computer Science and Engineering" },
            { value: "csd", label: "Computer Science and Design" },
            { value: "ai", label: "Artificial Intelligence" },
            { value: "ece", label: "Electronics & Communication Engineering" },
            { value: "ee", label: "Electrical Engineering" },
            { value: "me", label: "Mechanical Engineering" },
            { value: "ce", label: "Civil Engineering" }
        ],
        mtech: [
            { value: "cse", label: "Computer Science and Engineering" },
            { value: "ece", label: "Electronics & Communication Engineering" },
            { value: "me", label: "Mechanical Engineering" },
            { value: "ce", label: "Civil Engineering" }
        ],
        mba: [
            { value: "mba", label: "Master of Business Administration (MBA)" }
        ],
        mca: [
            { value: "mca", label: "Master of Computer Application (MCA)" }
        ]
    }

    const otherContacts = [
        {
            icon: Users,
            title: "Admin/Reception",
            numbers: ["01762-507222", "01762-507888"],
            color: "bg-blue-600"
        },
        {
            icon: GraduationCap,
            title: "Admission Cell",
            numbers: ["94652-33333", "01762-507800"],
            color: "bg-purple-600"
        },
        {
            icon: Shield,
            title: "Security",
            numbers: ["94649-09298"],
            color: "bg-gray-700"
        },
        {
            icon: Truck,
            title: "Transport",
            numbers: ["84270-25133"],
            color: "bg-green-600"
        },
        {
            icon: Phone,
            title: "Placement Cell",
            numbers: ["8556001844"],
            color: "bg-indigo-600"
        }
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "email") {
            setForm({ ...form, [name]: value })
        } else if (name === "phone") {
            // Only allow numbers, + at start, - up to 4, not continuous, etc.
            let filtered = filterNumberInput(value, true, true)
            setForm({ ...form, phone: filtered })
        } else {
            setForm({ ...form, [name]: value })
        }
    }

    const handleCourseChange = (value) => {
        setForm({ ...form, course: value, program: "" })
    }

    const handleProgramChange = (value) => {
        setForm({ ...form, program: value })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        let newErrors = {}
        if (!validateEmail(form.email)) {
            newErrors.email = "Please enter a valid email address."
        }
        if (!validatePhone(form.phone)) {
            newErrors.phone = "Please enter a valid phone number."
        }
        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) return

        setLoading(true) // <-- set loading true
        // try catch block

        try {
            const BACKEND_URL = "/api/enquiry";
            await axiosInstance.post(BACKEND_URL,form)

            alert("Enquiry submitted successfully!")

            setForm({ name: "", email: "", phone: "", city: "", course: "", program: "" })
        } catch (error) {
            console.error("Submission error:", error)
            alert("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }

    }

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-gray-300 to-gray-400 py-10 md:py-14">
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="container relative mx-auto px-4 md:px-6">
                        <div className="text-center text-white">
                            <p className="mb-2 text-lg">
                                Dial Our Toll Free Number : 1800-120-1200
                            </p>
                            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                Get In Touch With Us
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Contact Form and Details Section */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {/* Contact Details - Left Sidebar on Desktop */}
                            <div className="lg:col-span-1">
                                <div className="bg-[#1e3a8a] rounded-lg p-6 text-white">
                                    <h2 className="mb-6 text-2xl font-bold">Our Contacts</h2>
                                    <div className="space-y-6">
                                        {contactDetails.map((contact, index) => {
                                            const IconComponent = contact.icon
                                            return (
                                                <div key={index} className="flex items-start gap-3">
                                                    <div className="rounded-full bg-yellow-500 p-2">
                                                        <IconComponent className="h-5 w-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold">{contact.title}</h3>
                                                        {contact.details.map((detail, idx) => (
                                                            <p key={idx} className="text-sm text-gray-200">
                                                                {detail}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form - Right Side on Desktop */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-lg p-6 md:px-10 shadow-lg">
                                    <h2 className="mb-6 text-2xl font-bold text-[#003366]">
                                        Enquire Now!
                                    </h2>
                                    <form className="space-y-4 space-x-4" onSubmit={handleSubmit} autoComplete="off">
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <Input
                                                name="name"
                                                onChange={handleChange}
                                                placeholder="Enter Your Name"
                                                className="border-gray-300"
                                                autoComplete="off"
                                            />
                                            <div>
                                                <Input
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter Your Email Address"
                                                    className="border-gray-300"
                                                    autoComplete="off"
                                                />
                                                {errors.email && (
                                                    <p className="text-red-500 text-xs">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                            <div>
                                                <Input
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter Mobile Number (eg. 1234567890)"
                                                    type="text"
                                                    className="border-gray-300"
                                                    autoComplete="off"
                                                />
                                                {errors.phone && (
                                                    <p className="text-red-500 text-xs">{errors.phone}</p>
                                                )}
                                            </div>
                                            <Input
                                                name="city"
                                                onChange={handleChange}
                                                placeholder="Enter Your district/state/address"
                                                className="border-gray-300"
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-gray-700">
                                                Enter Your Interested Program
                                            </label>
                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <Select value={form.course} onValueChange={handleCourseChange}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Your Course" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {courseOptions.map((course) => (
                                                            <SelectItem key={course.value} value={course.value}>
                                                                {course.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                                <Select
                                                    value={form.program}
                                                    onValueChange={handleProgramChange}
                                                    disabled={!form.course}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Your Program" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {form.course &&
                                                            programOptions[form.course]?.map((prog) => (
                                                                <SelectItem key={prog.value} value={prog.value}>
                                                                    {prog.label}
                                                                </SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <Button
                                            disabled={loading}
                                            type="submit" className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white py-3">
                                            {loading ? "Submitting..." : "Submit Enquiry"}
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Contacts Section */}
                <section className="bg-gray-50 py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold text-[#003366]">
                                Other Contacts
                            </h2>
                            <p className="text-gray-600">Want To Reach Out To Us</p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {otherContacts.map((contact, index) => {
                                const IconComponent = contact.icon
                                return (
                                    <Card key={index} className="overflow-hidden shadow-md">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-3">
                                                <div className={`rounded-full ${contact.color} p-3`}>
                                                    <IconComponent className="h-6 w-6 text-white" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-[#003366]">
                                                    {contact.title}
                                                </h3>
                                            </div>
                                            <div className="space-y-1">
                                                {contact.numbers.map((number, idx) => (
                                                    <p
                                                        key={idx}
                                                        className="text-lg font-medium text-yellow-600"
                                                    >
                                                        {number}
                                                    </p>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}