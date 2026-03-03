import Alert from '@/lib/components/Alert';
import { Head, useForm, router } from '@inertiajs/react';
import { useState } from 'react';

interface IProduct {
    id: number;
    name: string;
    price: number;
    stock: number;
    description?: string;
}

interface DashboardProps {
    products: {
        data: IProduct[];
        links: { url: string | null; label: string; active: boolean }[];
    },
    flash: {
        message: string;
        error: string
    }
}

export default function Dashboard({ products, flash }: DashboardProps) {
    const [editingMode, setEditingMode] = useState(false);
    const [currentId, setCurrentId] = useState<number | null>(null);

    const { data, setData, post, put, delete: destroy, reset, errors } = useForm<IProduct>({
       id: 0, name: '', price: 0, stock: 0, description: ''
    });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editingMode) {
            put(`/products/${currentId}`, { 
                onSuccess: () => closeForm() 
            });
        } else {
            post('/products', { 
                onSuccess: () => closeForm() 
            });
        }
    };

    const handleEdit = (product: IProduct) => {
        setEditingMode(true);
        setCurrentId(product.id);
        setData({
            id: product.id,
            name: product.name, 
            price: product.price, 
            stock: product.stock, 
            description: product.description || ''
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this product?')) {
            destroy(`/products/${id}`);
        }
    };

    const handleSync = () => {
        router.post('/products/sync');
    };

    const closeForm = () => {
        setEditingMode(false);
        setCurrentId(null);
        reset();
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Alert {...flash}/>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold">Manage Products</h3>
                            <button onClick={handleSync} className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition cursor-pointer">
                                🔄 Sync FakeStore API
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="mb-8 bg-gray-50 p-4 rounded border border-gray-300">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Product Name</label>
                                    <input type="text" id="name" placeholder="Product Name" className="w-full border-gray-300 rounded shadow-sm py-2.5 px-2"
                                        value={data.name} onChange={e => setData('name', e.target.value)} required />
                                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                                </div>
                                <div>
                                    <label htmlFor="price" className='block text-sm font-medium text-gray-700'>Price</label>
                                    <input type="number" id="price" placeholder="Price" className="w-full border-gray-300 rounded shadow-sm py-2.5 px-2"
                                        value={data.price} onChange={e => setData('price', parseFloat(e.target.value))} required />
                                </div>
                                <div>
                                    <label htmlFor="stock" className='block text-sm font-medium text-gray-700'>Stock</label>
                                    <input type="number" id="stock" placeholder="Stock" className="w-full border-gray-300 rounded shadow-sm py-2.5 px-2"
                                        value={data.stock} onChange={e => setData('stock', parseFloat(e.target.value))} required />
                                </div>
                                <div className="col-span-full"> 
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea 
                                        id="description" 
                                        rows={3}
                                        placeholder="Enter product description..." 
                                        className="w-full border-gray-300 rounded shadow-sm py-2.5 px-3 focus:border-violet-500 focus:ring-violet-500"
                                        value={data.description} 
                                        onChange={e => setData('description', e.target.value)}
                                    ></textarea>
                                    {errors.description && <div className="text-red-500 text-xs mt-1">{errors.description}</div>}
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button type="submit" className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700 cursor-pointer">
                                    {editingMode ? 'Update Product' : 'Add Product'}
                                </button>
                                {editingMode && (
                                    <button type="button" onClick={closeForm} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 cursor-pointer">Cancel</button>
                                )}
                            </div>
                        </form>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 border-b">
                                        <th className="p-3">No</th>
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Price</th>
                                        <th className="p-3">Stock</th>
                                        <th className="p-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.data.map((product, index) => (
                                        <tr key={product.id} className="border-b hover:bg-gray-50">
                                            <td className="p-3">{index + 1}.</td>
                                            <td className="p-3">{product.name}</td>
                                            <td className="p-3">${product.price}</td>
                                            <td className="p-3">{product.stock}</td>
                                            <td className="p-3 flex gap-2">
                                                <button onClick={() => handleEdit(product)} className="text-violet-600 hover:underline cursor-pointer">Edit</button>
                                                <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:underline cursor-pointer">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 flex gap-1">
                            {products.links.map((link, i) => (
                                <button key={i} disabled={!link.url} onClick={() => router.get(link.url!)}
                                    className={`px-3 py-1 border rounded ${link.active ? 'bg-violet-600 text-white' : 'bg-white text-gray-700'} cursor-pointer disabled:opacity-50 disabled:cursor-no-drop`}
                                    dangerouslySetInnerHTML={{ __html: link.label }} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}