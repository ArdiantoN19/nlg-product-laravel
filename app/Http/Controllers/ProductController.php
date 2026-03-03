<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::paginate(10);
        return Inertia::render('Dashboard', [
            'products' => $products
        ]);
    }

    public function apiIndex()
    {
        $products = Product::all();
        return response()->json([
            'success' => true,
            'data' => $products
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'nullable|string',
        ]);

        Product::create($validated);
        return redirect()->back()->with('message', 'Product created successfully.');
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'description' => 'nullable|string',
        ]);

        $product->update($validated);
        return redirect()->back()->with('message', 'Product updated successfully.');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->back()->with('message', 'Product deleted successfully.');
    }

    public function sync()
    {
        $response = Http::get('https://fakestoreapi.com/products');

        if ($response->successful()) {
            $apiProducts = $response->json();

            foreach ($apiProducts as $item) {
                Product::updateOrCreate(
                    ['name' => $item['title']],
                    [
                        'price' => $item['price'],
                        'stock' => 10, // default stock value, cause API doesn't provide stock info
                        'description' => $item['description'],
                    ]
                );
            }
            return redirect()->back()->with('message', 'Products synced successfully!');
        }

        return redirect()->back()->withErrors('Failed to fetch from FakeStoreAPI.');
    }
}
