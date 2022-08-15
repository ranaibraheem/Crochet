<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_id',
        'name',
        'location',
        'image'
    ];

    public function user(){
        return $this->hasOne(User::class, 'id', 'category_id');
    }




    protected $table = 'products';

    protected $guarded = [
        'id',
    ];
}
