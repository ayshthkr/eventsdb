import {createServer} from "@/lib/supabase/server";
import {notFound} from "next/navigation";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {ArrowLeft, ArrowLeftCircle} from "lucide-react";

export default async function Page({ params }: { params: { id: string } }) {

    const supabase = createServer();
    const { data } = await supabase
        .from('events')
        .select('*')
        .eq('id', params.id);

    if(data == null || !data.length) notFound();

    const from = new Date(data[0]['date-from']);
    const to = new Date(data[0]['date-to']);

    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                    <Link href={'/events'} className='opacity-50 hover:opacity-75 transition'><Button variant={'link'}> <ArrowLeftCircle /> Back</Button></Link>
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    {data[0].name}
                                </h1>
                                <p className="text-gray-500 dark:text-gray-400">{from.toDateString()} - {to.toDateString()}</p>
                            </div>
                            <div className="space-y-4">
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    {data[0].description}
                                </p>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Register Now
                                    </Link>
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        View Schedule
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-950">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold">Event Details</h3>
                                    <div className="mt-2 text-gray-500 dark:text-gray-400">
                                        <p>
                                            <strong>Date:</strong>
                                            May 15-17, 2024{"\n                                  "}
                                        </p>
                                        <p>
                                            <strong>Location:</strong>
                                            San Francisco, CA{"\n                                  "}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Speakers</h3>
                                    <div className="mt-2 grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <div className="font-medium">John Doe</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc.</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="font-medium">Jane Smith</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Lead Developer, Widgets Co.</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="font-medium">Bob Johnson</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">CTO, Gadgets Inc.</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="font-medium">Alice Lee</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Senior Engineer, Doodads LLC</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Schedule</h3>
                                    <div className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                                        <div>
                                            <strong>Day 1 (May 15):</strong>
                                            Keynote, Workshops, Networking Event
                                        </div>
                                        <div>
                                            <strong>Day 2 (May 16):</strong>
                                            Talks, Panels, Hands-on Sessions
                                        </div>
                                        <div>
                                            <strong>Day 3 (May 17):</strong>
                                            Workshops, Hackathon, Closing Ceremony
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            Don't Miss Out on the Events of the Year
                        </h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Register now to secure your spot and join us for inspiring talks, hands-on workshops, and
                            networking with the best and brightest in web development.
                        </p>
                    </div>
                    <div className="mx-auto w-full max-w-sm space-y-2">
                        <form className="flex space-x-2">
                            <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                            <Button type="submit">Register Now</Button>
                        </form>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            By registering, you agree to our
                            <Link className="underline underline-offset-2" href="#">
                                Terms & Conditions
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}