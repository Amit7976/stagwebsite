import { LoaderLink } from '@/components/ui/loaderLinks'

function Page() {
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center flex-col text-center">
                <p className="text-4xl font-medium animate-pulse">
                    Project is <span className="text-orange-600">not deployed</span> yet
                </p>
                <p className="text-2xl font-light mt-5 text-muted-foreground">
                    Check the
                    <LoaderLink href='/s/showcase' className='px-2 underline underline-offset-4 decoration-dashed'>
                        Showcase Page
                    </LoaderLink>
                    for project-related public images.
                </p>
            </div>
        </>
    )
}

export default Page
