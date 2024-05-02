import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {createServer} from "@/lib/supabase/server";


export default async function Component() {

  const supabase = createServer();
  const { data } = await supabase
      .from('events')
      .select('*');

  return (
      <div className="flex flex-col min-h-[100dvh]">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Events Near You
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Explore a curated selection of events happening in your local area. Find the perfect event to attend
                    and connect with your community.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="/events"
                  >
                    Find Events
                  </Link>
                </div>
              </div>
              <img
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                  height="550"
                  src="/placeholder.svg"
                  width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Upcoming Events
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Events Near You</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover a variety of events happening in your local area. From concerts and festivals to workshops
                  and
                  meetups, there&apos;s something for everyone.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {data?.map(event => <Card key={event.id}>
                <CardHeader>
                  <img
                      alt="Event"
                      className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                      height="200"
                      src="/placeholder.svg"
                      width="300"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">{event.type}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">From {(new Date(event['date-from'])).toDateString()}</div>
                  </div>
                  <h3 className="text-xl font-bold">{event.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400"/>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{event.location}</span>
                    </div>
                    <Link
                        className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href={`/event/${event.id}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </CardContent>
              </Card>)}
            </div>
            <center>
              <Link href={'/events'}>
                <Button variant={"link"} >Load More</Button>
              </Link>
            </center>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Discover Your Next Adventure</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Sign up today and start exploring the best events happening in your local area.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your location" type="text" />
                <Button type="submit">Find Events</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
  )
}

function LocateIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <line x1="2" x2="5" y1="12" y2="12" />
        <line x1="19" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="5" />
        <line x1="12" x2="12" y1="19" y2="22" />
        <circle cx="12" cy="12" r="7" />
      </svg>
  )
}
