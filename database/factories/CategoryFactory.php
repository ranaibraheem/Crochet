<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'Product_id'   => \App\Models\Product::inRandomOrder()->first()->id,

            'name'          =>$this->faker->name(),
            'description'   =>$this->faker->sentence(),
        ];
    }
}
