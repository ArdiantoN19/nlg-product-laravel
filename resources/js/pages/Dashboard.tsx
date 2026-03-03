import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import Alert from '@/lib/components/Alert';
import ButtonSync from '@/lib/components/ButtonSync';
import FormProduct from '@/lib/components/FormProduct';
import TableProduct from '@/lib/components/TableProduct';

export interface IProduct {
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
    const [isFormOpen, setIsFormOpen] = useState(false);

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
        setIsFormOpen(true);
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

    const closeForm = () => {
        setEditingMode(false);
        setIsFormOpen(false);
        setCurrentId(null);
        reset();
    };

    const openNewForm = () => {
        setEditingMode(false);
        setIsFormOpen(true);
        reset();
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title="Dashboard" />

            <div className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Products</h1>
                            <p className="mt-2 text-sm text-slate-600">Manage your product inventory efficiently</p>
                        </div>
                        <ButtonSync />
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <Alert {...flash}/>

                <FormProduct 
                  openNewForm={openNewForm}
                  isFormOpen={isFormOpen}
                  editingMode={editingMode}
                  data={data}
                  setData={setData}
                  handleSubmit={handleSubmit}
                  closeForm={closeForm}
                  errors={errors}
                />

                <TableProduct
                  products={products.data}
                  links={products.links}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
            </div>
        </div>
    );
}