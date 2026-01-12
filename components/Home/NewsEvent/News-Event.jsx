import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BellRingIcon } from "lucide-react"
import { NewsButton } from "./NewsButton"
import { Fragment } from "react"
import { EventsBtn } from "./EventsBtn"

const NewsEvents = ({ newsItems, notifications, coes }) => {

    return (
        <section className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                {/* News & Events Column */}
                <div>
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-[#003366]">
                        <BellRingIcon className="h-6 w-6 text-red-600" />
                        News & Events
                    </h2>
                    <div className="max-h-[600px] border overflow-y-auto rounded-md p-2 space-y-6">
                        {" "}
                        {/* Added max-h and overflow-y-auto */}
                        {newsItems.map((item, index) => (
                            <div key={index} className="flex border-b pb-2 mb-2 items-start gap-4">
                                <div className="flex flex-col items-center rounded-md bg-[#007bff] p-2 text-white">
                                    <span className="text-2xl font-bold">{item.date.day}</span>
                                    <span className="text-xs">{item.date.month}</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-800">
                                        {item.title}
                                    </p>
                                    {item.isNewItem && <img loading="lazy"
                                        className="inline mr-2" src="/blinking_new.gif" alt="blinking_new" />
                                    }
                                    <EventsBtn href={item.href} text={item.btnText} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Notifications Column */}
                <div>
                    <Tabs defaultValue="notifications" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="notifications">Notifications</TabsTrigger>
                            <TabsTrigger value="coe-notifications">COE Notifications</TabsTrigger>
                        </TabsList>
                        <TabsContent value="notifications" className="mt-4 max-h-[600px] overflow-y-auto rounded-md border p-2 space-y-6">
                            {" "}
                            {/* Added max-h and overflow-y-auto */}
                            {notifications.map((notification, idx) => (
                                <div key={idx} className="rounded-lg border p-4 mb-3 shadow-sm">
                                    <div className="flex items-start gap-2">
                                        <BellRingIcon className="h-5 w-5 flex-shrink-0 text-red-500" />
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold text-gray-900">{notification.title}</span>
                                        </p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {notification.buttons.map((button, idx) => (
                                            <Fragment key={idx}>
                                                <NewsButton button={button} />
                                            </Fragment>
                                        ))}
                                        {notification?.isNewItem && <div className="flex items-center justify-center ">
                                            <img loading="lazy" className=" ml-2" src="/blinking_new.gif" alt="blinking_new" />
                                        </div>}
                                    </div>
                                </div>
                            ))}
                        </TabsContent>
                        <TabsContent value="coe-notifications" className="mt-4 max-h-[600px] rounded-md border p-2 overflow-y-auto  space-y-4">
                            {" "}
                            {coes.map((coe, idx) => (
                                <div key={idx} className="rounded-lg mb-3 border p-4 shadow-sm">
                                    <div className="flex items-start gap-2">
                                        <BellRingIcon className="h-5 w-5 flex-shrink-0 text-red-500" />
                                        <p className="text-sm text-gray-700">
                                            <span className="font-medium text-gray-700">{coe.title}</span>
                                            <a className="ml-1 text-blue-400 font-medium hover:underline cursor-pointer" href={coe.href}>
                                                {coe.btnText}
                                            </a>
                                            {coe?.isNewItem && <img loading="lazy" className="inline ml-2" src="/blinking_new.gif" alt="blinking_new" />}

                                        </p>
                                    </div>

                                </div>
                            ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}


export { NewsEvents }

