import { Input } from "@/components/ui/input"
import {createServer} from "@/lib/supabase/server";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {

    const supabase = createServer();

    const { data } = await supabase
        .from('events')
        .select('*');

    return (
        <div className="flex justify-between">
            <Link href={'/'}><h1 className='text-3xl font-bold p-2 hover:underline'>EventsDB</h1></Link>
        <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
            <div className="container mx-auto">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Upcoming Events</h2>
                    <div className="w-full max-w-md">
                        <Input
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-gray-500 focus:outline-none dark:border-gray-600 dark:bg-gray-950 dark:text-gray-50"
                            placeholder="Search events..."
                            type="search"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data?.map(event =>
                        <div key={event.id} className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-950">
                            <img
                                alt="Event Image"
                                className="h-48 w-full rounded-t-lg object-cover"
                                height={225}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "400/225",
                                    objectFit: "cover",
                                }}
                                width={400}
                            />
                            <div className="p-4">
                                <h3 className="mb-2 text-lg font-semibold tracking-tight">{event.name}</h3>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">May 15, 2023</p>
                                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                    {event.description}
                                </p>
                            </div>
                            <div className="w-full flex justify-end p-3">
                                <Link href={`/event/${event.id}`}>
                                    <Button>Learn More</Button>
                                </Link>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
        </div>

    )
}