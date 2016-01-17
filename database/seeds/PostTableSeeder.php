<?php

use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'title' => "My First Post",
            'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus dolor\
             quam, id varius dolor faucibus ac. Curabitur ut bibendum ligula. Mauris molestie mattis\
              mi, non sodales erat condimentum vitae. Pellentesque nec porttitor turpis. Proin ac pulvinar\
               metus. Sed non libero condimentum, hendrerit ipsum non, consectetur mi. Nunc ut lectus in\
                metus ornare condimentum. In molestie suscipit nisi sit amet iaculis. Cum sociis natoque\
                 penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            'user_id' => 1
        ]);

        DB::table('posts')->insert([
            'title' => "My Second Post",
            'text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus dolor\
             quam, id varius dolor faucibus ac. Curabitur ut bibendum ligula. Mauris molestie mattis\
              mi, non sodales erat condimentum vitae. Pellentesque nec porttitor turpis. Proin ac pulvinar\
               metus. Sed non libero condimentum, hendrerit ipsum non, consectetur mi. Nunc ut lectus in\
                metus ornare condimentum. In molestie suscipit nisi sit amet iaculis. Cum sociis natoque\
                 penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            'user_id' => 1
        ]);

        DB::table('posts')->insert([
            'title' => "Hello World",
            'text' => 'Hello World',
            'user_id' => 2
        ]);
    }
}
