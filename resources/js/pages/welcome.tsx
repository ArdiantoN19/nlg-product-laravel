import { Head, router } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8">
                <div className="flex w-full flex-col items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 gap-7">
                    <h1 className='text-3xl font-bold'>Welcome to the Product Management System</h1>
                    <button 
                        type='button' 
                        className="ml-4 cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-white hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-300"
                        onClick={() => router.get('/dashboard')}
                    >Go to Dashboard</button>
                </div>
            </div>
        </>
    );
}
