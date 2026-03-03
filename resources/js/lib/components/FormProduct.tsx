import { X, Plus } from 'lucide-react';
import React from 'react';

interface FormProductProps {
    openNewForm: () => void;
    isFormOpen: boolean;
    editingMode: boolean;
    data: {
        id: number;
        name: string;
        price: number;
        stock: number;
        description?: string;
    };
    setData: (field: string, value: any) => void;
    handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
    closeForm: () => void;
    errors: {
        name?: string;
        price?: string;
        stock?: string;
        description?: string;
    };
}

const FormProduct = ({
    openNewForm,
    isFormOpen,
    editingMode,
    data,
    setData,
    handleSubmit,
    closeForm,
    errors,
}: FormProductProps) => {
    
    return (
        <>
            <div className="mb-8">
                <button
                    type="button"
                    onClick={openNewForm}
                    className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700"
                >
                    <Plus className="h-4 w-4" />
                    Add Product
                </button>
            </div>

            {isFormOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white shadow-lg">

                        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                            <h2 className="text-lg font-semibold text-slate-900">
                                {editingMode
                                    ? 'Edit Product'
                                    : 'Add New Product'}
                            </h2>
                            <button
                                onClick={closeForm}
                                className="text-slate-500 transition-colors hover:text-slate-700"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 px-6 py-6"
                        >
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-1.5 block text-sm font-medium text-slate-700"
                                    >
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter product name"
                                        className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-300'} bg-white px-3.5 py-2.5 text-sm placeholder-slate-400 transition-colors outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500`}
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        required
                                    />
                                    {errors.name && (
                                        <span className="mt-1.5 text-xs text-red-500">
                                            {errors.name}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="price"
                                        className="mb-1.5 block text-sm font-medium text-slate-700"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        id="price"
                                        placeholder="0.00"
                                        className={`w-full rounded-lg border ${errors.price ? 'border-red-500' : 'border-slate-300'} bg-white px-3.5 py-2.5 text-sm placeholder-slate-400 transition-colors outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500`}
                                        value={data.price}
                                        onChange={(e) =>
                                            setData(
                                                'price',
                                                parseFloat(e.target.value),
                                            )
                                        }
                                        required
                                    />
                                    {errors.price && (
                                        <span className="mt-1.5 text-xs text-red-500">
                                            {errors.price}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <label
                                        htmlFor="stock"
                                        className="mb-1.5 block text-sm font-medium text-slate-700"
                                    >
                                        Stock
                                    </label>
                                    <input
                                        type="number"
                                        id="stock"
                                        placeholder="0"
                                        className={`w-full rounded-lg border ${errors.stock ? 'border-red-500' : 'border-slate-300'} bg-white px-3.5 py-2.5 text-sm placeholder-slate-400 transition-colors outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500`}
                                        value={data.stock}
                                        onChange={(e) =>
                                            setData(
                                                'stock',
                                                parseFloat(e.target.value),
                                            )
                                        }
                                        required
                                    />
                                    {errors.stock && (
                                        <span className="mt-1.5 text-xs text-red-500">
                                            {errors.stock}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                    className="mb-1.5 block text-sm font-medium text-slate-700"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    placeholder="Enter product description..."
                                    className={`w-full rounded-lg border ${errors.description ? 'border-red-500' : 'border-slate-300'} resize-none bg-white px-3.5 py-2.5 text-sm placeholder-slate-400 transition-colors outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500`}
                                    value={data.description}
                                    onChange={(e) =>
                                        setData('description', e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <span className="mt-1.5 text-xs text-red-500">
                                        {errors.description}
                                    </span>
                                )}
                            </div>

                            <div className="-mx-6 -mb-6 flex justify-end gap-3 border-t border-slate-200 px-6 py-4 pt-6">
                                <button
                                    type="button"
                                    onClick={closeForm}
                                    className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700"
                                >
                                    {editingMode
                                        ? 'Update Product'
                                        : 'Create Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormProduct;
