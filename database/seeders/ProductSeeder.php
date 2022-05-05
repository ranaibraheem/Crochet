<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Product::factory(10)->create();
    //    DB::table('products')->insert([
    //         'name'          => 'Crochet 1',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet1.jpg',
    //     ]);
    //     DB::table('products')->insert([
    //         'name'          => 'Crochet 2',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet2.jpg',
    //     ]);
    //     DB::table('products')->insert([
    //         'name'          => 'Crochet 3',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet3.jpg',
    //     ]);
    //     DB::table('products')->insert([
    //         'name'          => 'Crochet 4',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet4.jpg',
    //     ]);
    //     DB::table('products')->insert([
    //         'name'          => 'Crochet 5',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet5.jpg',
    //     ]);
    //     DB::table('products')->insert([
    //         'name'          => 'Crochet 6',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet6.jpg',
    //     ]);
    //     DB::table('products')->insert([
    //         'name'          => 'Crochet 7',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet7.jpg',
    //     ]);
    //     DB::table('products')->insert([
    //         'name'          => 'Crochet 8',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet8.jpg',
    //     ]);
    //     DB::table('products')->insert([
    //         'name'          => 'Crochet 9',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet9.jpg',
    //     ]);
    //     DB::table('products')->insert([
    //         'name'          => 'Crochet 10',
    //         'description'   => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, expedita?',
    //         'price'         => '10.00',
    //         'image'         => 'crochet10.jpg',
    //     ]);

    }
}
