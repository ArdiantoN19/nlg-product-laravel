import { router } from '@inertiajs/react';
import { Edit2, Trash2 } from 'lucide-react';
import type { IProduct } from '@/pages/Dashboard';


interface TableProductProps {
    products: IProduct[];
    links: { url: string | null; label: string; active: boolean }[];
    handleEdit: (product: IProduct) => void;
    handleDelete: (id: number) => void;
}

const TableProduct = ({ products, links, handleEdit, handleDelete }: TableProductProps) => {
    return (
        <>
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-slate-700 uppercase">
                                    Product Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-slate-700 uppercase">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider text-slate-700 uppercase">
                                    Stock
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-semibold tracking-wider text-slate-700 uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {products.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={4}
                                        className="px-6 py-12 text-center text-sm text-slate-500"
                                    >
                                        No products yet. Create one to get
                                        started!
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr
                                        key={product.id}
                                        className="transition-colors hover:bg-slate-50"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-slate-900">
                                                {product.name}
                                            </div>
                                            {product.description && (
                                                <div className="mt-1 line-clamp-1 text-xs text-slate-500">
                                                    {product.description}
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                                            ${product.price.toFixed(2)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                                                    product.stock > 20
                                                        ? 'bg-green-100 text-green-800'
                                                        : product.stock > 0
                                                          ? 'bg-yellow-100 text-yellow-800'
                                                          : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {product.stock}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() =>
                                                        handleEdit(product)
                                                    }
                                                    className="rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-violet-600"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(product.id)
                                                    }
                                                    className="rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-red-600"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {links.length > 0 && (
                <div className="mt-6 flex items-center justify-center gap-1">
                    {links.map((link, i) => (
                        <button
                            key={i}
                            disabled={!link.url}
                            onClick={() => router.get(link.url!)}
                            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                                link.active
                                    ? 'bg-violet-600 text-white'
                                    : link.url
                                      ? 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                                      : 'cursor-not-allowed border border-slate-200 text-slate-400'
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default TableProduct;
