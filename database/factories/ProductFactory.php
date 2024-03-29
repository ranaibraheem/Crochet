<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Categories;
use Faker\Generator as Faker;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name'          => $this->faker->name(),
            'description'   => $this->faker->paragraph(),
            'price'         => $this->faker->randomFloat(2, 0, 100),
            'image'         => $this->faker->imageUrl(),
        ];
    }
}
