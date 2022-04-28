<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;


class ProductController extends Controller
{
    public function index()
    {
        return ProductResource::collection(Product::all());
        // $products =  ProductResource::collection(Product::all());
        // return view('products', compact('products'));

    }
}
