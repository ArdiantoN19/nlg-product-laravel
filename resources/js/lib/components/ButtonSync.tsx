import { router } from '@inertiajs/react';
import { RefreshCw } from 'lucide-react';

const ButtonSync = () => {
    const handleSync = () => {
        router.post('/products/sync');
    };
    
    return (
        <button
            onClick={handleSync}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
        >
            <RefreshCw className="h-4 w-4" />
            Sync API
        </button>
    );
};

export default ButtonSync;
