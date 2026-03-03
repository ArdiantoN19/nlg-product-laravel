import { Head, router } from '@inertiajs/react';
import { ArrowRight, Package, Zap, Shield, Smartphone } from 'lucide-react';

export default function Welcome() {
    const features = [
        {
            icon: <Package className="h-6 w-6" />,
            title: 'Product Management',
            description: 'Create, update, and manage your products with ease'
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: 'Lightning Fast',
            description: 'Real-time synchronization and instant updates'
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: 'Secure & Reliable',
            description: 'Built with enterprise-grade security standards'
        },
        {
            icon: <Smartphone className="h-6 w-6" />,
            title: 'Fully Responsive',
            description: 'Works perfectly on desktop, tablet, and mobile'
        }
    ];

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            
            <div className="min-h-screen bg-slate-50">
                {/* Header */}
                <div className="border-b border-slate-200 bg-white">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <h2 className="text-xl font-semibold text-slate-900">NLG Product Manager</h2>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            Welcome to Product Management
                        </h1>
                        
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 sm:text-xl">
                            Streamline your inventory, boost productivity, and take control of your products with our modern management platform.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4">
                            <button 
                                onClick={() => router.get('/dashboard')}
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-700 transition-colors"
                            >
                                Go to Dashboard
                                <ArrowRight className="h-4 w-4" />
                            </button>
                            
                            <button 
                                onClick={() => {
                                    const element = document.getElementById('features');
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 scroll-mt-20">
                    <div className="mb-12">
                        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
                            Why Choose Our Platform?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
                            Everything you need to manage your products efficiently and effectively.
                        </p>
                    </div>
                    
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-md"
                            >
                                <div className="inline-flex rounded-lg bg-violet-100 p-3 text-violet-600 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12">
                        <div className="grid gap-8 sm:grid-cols-3">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-violet-600 sm:text-4xl">
                                    100%
                                </div>
                                <p className="mt-2 text-slate-600">Uptime Guaranteed</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-violet-600 sm:text-4xl">
                                    1M+
                                </div>
                                <p className="mt-2 text-slate-600">Products Managed</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-violet-600 sm:text-4xl">
                                    24/7
                                </div>
                                <p className="mt-2 text-slate-600">Support Available</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">
                        <h2 className="mb-4 text-2xl font-bold text-slate-900">Ready to get started?</h2>
                        <p className="mb-6 text-slate-600">
                            Join thousands of teams managing their products efficiently.
                        </p>
                        <button 
                            onClick={() => router.get('/dashboard')}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-8 py-3 font-medium text-white hover:bg-violet-700 transition-colors"
                        >
                            Enter Dashboard
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
