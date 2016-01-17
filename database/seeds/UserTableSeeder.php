<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'rodrigo',
            'email' => 'rodrigo@gmail.com',
            'password' => bcrypt('123456')
        ]);

        DB::table('users')->insert([
            'name' => 'paulo',
            'email' => 'paulo@gmail.com',
            'password' => bcrypt('123456')
        ]);
    }
}
