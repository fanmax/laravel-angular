<?php

use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->insert([
            'email' => "jessica@mail.com",
            'text' => "Very Nice!",
            'active' => true,
            'post_id' => 1
        ]);

        DB::table('comments')->insert([
            'email' => "angelica@mail.com",
            'text' => 'No like!',
            'post_id' => 1
        ]);

        DB::table('comments')->insert([
            'email' => "roberto@mail.com",
            'text' => "Very good",
            'active' => true,
            'post_id' => 1
        ]);
    }
}
